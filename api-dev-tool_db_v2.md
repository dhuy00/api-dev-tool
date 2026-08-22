# Database Schema v2 — API Dev Tool

## Conventions

- Primary key: `id` (BIGSERIAL / UUID)
- Timestamps: `created_at` (TIMESTAMPTZ), `updated_at` (TIMESTAMPTZ)
- Soft delete: `deleted_at` (TIMESTAMPTZ, nullable) on all resource tables
- FK naming: `{table_singular}_id` → references `{table}.id`
- JSON fields store structured data without a fixed schema

---

## 0. common column

Authentication and user profile.

| Column | Type | Description |
|--------|------|-------------|
| `created_by` | BIGINT | User who created this record |
| `created_at` | TIMESTAMPTZ | Timestamp when record is created |
| `updated_at` | TIMESTAMPTZ | Timestamp when record is updated |
| `deleted_at` | TIMESTAMPTZ | Timestamp when record is deleted |
---

## 1. user

Authentication and user profile.

| Column | Type | Description |
|--------|------|-------------|
| `id` | BIGSERIAL | Primary key |
| `display_name` | VARCHAR(255) | User display name |
| `email` | VARCHAR(255) | Unique email address |
| `password_hash` | VARCHAR(255) | Bcrypt/argon2 hash of password (never store plain text) |
| `password_changed_at` | TIMESTAMPTZ | Timestamp of last password change (for multi-device force reset) |
| `photo_url` | TEXT | URL to avatar image |
| `status` | VARCHAR(20) | Account status: `active`, `inactive`, `suspended` |
| `provider` | VARCHAR(50) | OAuth provider: `google`, `github`, `null` for password auth |

**Constraints:**
- `UNIQUE(email)`
- `CHECK(status IN ('active', 'inactive', 'suspended'))`

---

## 2. user_session

Refresh token management. Each session represents one login from one device.

| Column | Type | Description |
|--------|------|-------------|
| `id` | BIGSERIAL | Primary key |
| `user_id` | BIGINT | FK → `user.id` |
| `refresh_token_hash` | VARCHAR(255) | Hash of the refresh token (never store plain token) |
| `device_id` | VARCHAR(255) | Unique device identifier |
| `device_name` | VARCHAR(255) | Human-readable device name (e.g. "Chrome on Windows") |
| `ip_address` | VARCHAR(45) | IP address at login time |
| `user_agent` | TEXT | Browser/app user agent string |
| `expires_at` | TIMESTAMPTZ | When this session token expires |
| `revoked_at` | TIMESTAMPTZ | When token was revoked (nullable; non-null = revoked) |
| `last_active_at` | TIMESTAMPTZ | Last time this session was used to refresh |

**Constraints:**
- `FK(user_id) → user(id)` ON DELETE CASCADE

---

## 3. workspace

A collaborative workspace containing collections, requests, environments, and flows.

| Column | Type | Description |
|--------|------|-------------|
| `id` | BIGSERIAL | Primary key |
| `name` | VARCHAR(255) | Workspace display name |
| `slug` | VARCHAR(255) | URL-safe unique identifier (e.g. `acme-api`) |
| `description` | TEXT | Optional workspace description |
| `icon` | TEXT | Icon image URL or emoji |
| `owner_id` | BIGINT | FK → `user.id` (workspace creator/admin) |
| `is_default` | BOOLEAN | True if this is the user's default workspace on creation |

**Constraints:**
- `UNIQUE(slug)`
- `FK(owner_id) → user(id)`

---

## 4. workspace_member

Membership of users within workspaces.

| Column | Type | Description |
|--------|------|-------------|
| `id` | BIGSERIAL | Primary key |
| `workspace_id` | BIGINT | FK → `workspace.id` |
| `user_id` | BIGINT | FK → `user.id` |
| `role` | VARCHAR(20) | Role: `owner`, `admin`, `member`, `viewer` |
| `joined_at` | TIMESTAMPTZ | When user accepted the invitation |

**Constraints:**
- `UNIQUE(workspace_id, user_id)` — one user cannot join same workspace twice
- `FK(workspace_id) → workspace(id)` ON DELETE CASCADE
- `FK(user_id) → user(id)` ON DELETE CASCADE
- `CHECK(role IN ('owner', 'admin', 'member', 'viewer'))`

---

## 5. workspace_invitation

Outstanding or historical workspace invitations.

| Column | Type | Description |
|--------|------|-------------|
| `id` | BIGSERIAL | Primary key |
| `workspace_id` | BIGINT | FK → `workspace.id` |
| `invited_by` | BIGINT | FK → `user.id` (who sent the invitation) |
| `invitee_email` | VARCHAR(255) | Email address the invitation was sent to |
| `token` | VARCHAR(255) | Secure random token for invitation URL |
| `invitee_role` | VARCHAR(20) | Proposed role: `admin`, `member`, `viewer` |
| `status` | VARCHAR(20) | Status: `pending`, `accepted`, `declined`, `expired`, `cancelled` |
| `expires_at` | TIMESTAMPTZ | Invitation expiration timestamp |
| `message` | TEXT | Optional personal message from inviter |

**Constraints:**
- `UNIQUE(token)`
- `FK(workspace_id) → workspace(id)` ON DELETE CASCADE
- `CHECK(status IN ('pending', 'accepted', 'declined', 'expired', 'cancelled'))`

---

## 6. collection

Hierarchical folder for organizing API requests. Supports nested folders via `parent_id`.

| Column | Type | Description |
|--------|------|-------------|
| `id` | BIGSERIAL | Primary key |
| `workspace_id` | BIGINT | FK → `workspace.id` |
| `parent_id` | BIGINT | FK → `collection.id` (nullable, null = root collection) |
| `owner_id` | BIGINT | FK → `user.id` (creator) |
| `name` | VARCHAR(255) | Collection name |
| `description` | TEXT | Optional description |
| `sequence` | INTEGER | Sort order within the same parent |
| `is_public` | BOOLEAN | True = visible to all workspace members |

**Constraints:**
- `FK(workspace_id) → workspace(id)` ON DELETE CASCADE
- `FK(parent_id) → collection(id)` ON DELETE SET NULL
- `FK(owner_id) → user(id)`
- `UNIQUE(workspace_id, name, parent_id)` — no duplicate names within same folder level

---

## 7. api_request

A single HTTP request definition stored within a collection.

| Column | Type | Description |
|--------|------|-------------|
| `id` | BIGSERIAL | Primary key |
| `workspace_id` | BIGINT | FK → `workspace.id` |
| `collection_id` | BIGINT | FK → `collection.id` |
| `name` | VARCHAR(255) | Request name/label |
| `method` | VARCHAR(10) | HTTP method: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, `OPTIONS` |
| `url` | TEXT | Full URL or URL with variable placeholders |
| `description` | TEXT | Optional endpoint description |
| `request_definition` | JSONB | Headers, query params, body, form-data, raw body |
| `auth_type` | VARCHAR(20) | Auth type: `none`, `basic`, `bearer`, `api_key`, `oauth2` |
| `auth_config` | JSONB | Auth credentials (encrypted for secrets) |
| `pre_request_script` | TEXT | JavaScript executed before the request |
| `test_script` | TEXT | JavaScript assertions executed after the response |
| `sequence` | INTEGER | Sort order within the collection |

**Constraints:**
- `FK(workspace_id) → workspace(id)` ON DELETE CASCADE
- `FK(collection_id) → collection(id)` ON DELETE CASCADE
- `UNIQUE(collection_id, name, sequence)`
- `CHECK(method IN ('GET','POST','PUT','PATCH','DELETE','HEAD','OPTIONS'))`

**Indexes:**
- `INDEX(method)` — filter requests by HTTP method
- `INDEX(url text_pattern_ops)` — prefix search on URL

---

## 8. request_history

Immutable log of every request execution.

| Column | Type | Description |
|--------|------|-------------|
| `id` | BIGSERIAL | Primary key |
| `workspace_id` | BIGINT | FK → `workspace.id` |
| `api_request_id` | BIGINT | FK → `api_request.id` |
| `environment_id` | BIGINT | FK → `environment.id` (nullable, which env was active) |
| `user_id` | BIGINT | FK → `user.id` (who executed) |
| `status_code` | INTEGER | HTTP response status code |
| `execution_time_ms` | INTEGER | Response time in milliseconds |
| `response_size_bytes` | INTEGER | Response body size in bytes |
| `request_snapshot` | JSONB | Snapshot of the request payload at execution time |
| `response_snapshot` | JSONB | Snapshot of the response payload |
| `error_message` | TEXT | Error message if the request failed (nullable) |
| `executed_at` | TIMESTAMPTZ | When the request was executed |

**Constraints:**
- `FK(workspace_id) → workspace(id)` ON DELETE CASCADE
- `FK(api_request_id) → api_request(id)` ON DELETE SET NULL
- `FK(environment_id) → environment(id)` ON DELETE SET NULL
- `FK(user_id) → user(id)` ON DELETE SET NULL

**Indexes:**
- `INDEX(user_id, executed_at DESC)` — user's recent history
- `INDEX(api_request_id, executed_at DESC)` — history for one request
- `INDEX(status_code)` — filter by success/error responses

---

## 9. environment

A named environment containing variables (e.g. Development, Staging, Production).

| Column | Type | Description |
|--------|------|-------------|
| `id` | BIGSERIAL | Primary key |
| `workspace_id` | BIGINT | FK → `workspace.id` |
| `name` | VARCHAR(255) | Environment name (e.g. "Production") |
| `is_default` | BOOLEAN | True if this is the default environment for the workspace |

**Constraints:**
- `FK(workspace_id) → workspace(id)` ON DELETE CASCADE
- `FK(owner_id) → user(id)`
- `UNIQUE(workspace_id, name)` — no duplicate names within a workspace

---

## 10. environment_variable

Individual key-value variables scoped to an environment.

| Column | Type | Description |
|--------|------|-------------|
| `id` | BIGSERIAL | Primary key |
| `environment_id` | BIGINT | FK → `environment.id` |
| `key` | VARCHAR(255) | Variable name (e.g. `BASE_URL`) |
| `value` | TEXT | Variable value. Encrypted at rest if `is_secret = true` |
| `is_secret` | BOOLEAN | True = sensitive value (password, API key), should be masked in UI |

**Constraints:**
- `FK(environment_id) → environment(id)` ON DELETE CASCADE
- `UNIQUE(environment_id, key)` — no duplicate keys within same environment

---

## 11. flow

An automated multi-step workflow (similar to Postman Flows or Zapier).

| Column | Type | Description |
|--------|------|-------------|
| `id` | BIGSERIAL | Primary key |
| `workspace_id` | BIGINT | FK → `workspace.id` |
| `created_by` | BIGINT | FK → `user.id` (who created this flow) |
| `name` | VARCHAR(255) | Flow name |
| `description` | TEXT | Optional description |
| `status` | VARCHAR(20) | Status: `draft`, `published`, `archived` |
| `last_executed_at` | TIMESTAMPTZ | Last time the flow was run (nullable) |

**Constraints:**
- `FK(workspace_id) → workspace(id)` ON DELETE CASCADE
- `FK(created_by) → user(id)`
- `CHECK(status IN ('draft', 'published', 'archived'))`

---

## 12. flow_node

A single step within a flow. Each node represents an action (API request, delay, condition, etc.).

| Column | Type | Description |
|--------|------|-------------|
| `id` | BIGSERIAL | Primary key |
| `flow_id` | BIGINT | FK → `flow.id` |
| `name` | VARCHAR(255) | Node display name |
| `node_type` | VARCHAR(30) | Type: `request`, `delay`, `condition`, `set_variable`, `http_request` |
| `api_request_id` | BIGINT | FK → `api_request.id` (nullable, set when node_type = request) |
| `config` | JSONB | Node-specific configuration (depends on node_type) |
| `position_x` | INTEGER | X coordinate on the canvas |
| `position_y` | INTEGER | Y coordinate on the canvas |

**Constraints:**
- `FK(flow_id) → flow(id)` ON DELETE CASCADE
- `FK(api_request_id) → api_request(id)` ON DELETE SET NULL
- `FK(created_by) → user(id)`
- `CHECK(node_type IN ('request', 'delay', 'condition', 'set_variable', 'http_request'))`

---

## 13. flow_edge

Directed edge connecting two nodes in a flow graph.

| Column | Type | Description |
|--------|------|-------------|
| `id` | BIGSERIAL | Primary key |
| `flow_id` | BIGINT | FK → `flow.id` |
| `source_node_id` | BIGINT | FK → `flow_node.id` (outgoing node) |
| `target_node_id` | BIGINT | FK → `flow_node.id` (incoming node) |
| `condition` | JSONB | Conditional expression (nullable, null = unconditional edge) |
| `label` | VARCHAR(255) | Optional edge label (e.g. "On Success", "On Error") |

**Constraints:**
- `FK(flow_id) → flow(id)` ON DELETE CASCADE
- `FK(source_node_id) → flow_node(id)` ON DELETE CASCADE
- `FK(target_node_id) → flow_node(id)` ON DELETE CASCADE
- `UNIQUE(flow_id, source_node_id, target_node_id)` — no duplicate edges

---

## 14. test_suite

A group of test cases.

| Column | Type | Description |
|--------|------|-------------|
| `id` | BIGSERIAL | Primary key |
| `workspace_id` | BIGINT | FK → `workspace.id` |
| `name` | VARCHAR(255) | Suite name |
| `description` | TEXT | Optional description |
| `sequence` | INTEGER | Sort order within the workspace |

**Constraints:**
- `FK(workspace_id) → workspace(id)` ON DELETE CASCADE
- `FK(owner_id) → user(id)`

---

## 15. test_case

A single test case within a test suite. Can target a request, a flow, or an entire collection.

| Column | Type | Description |
|--------|------|-------------|
| `id` | BIGSERIAL | Primary key |
| `test_suite_id` | BIGINT | FK → `test_suite.id` (nullable) |
| `name` | VARCHAR(255) | Test case name |
| `target_type` | VARCHAR(20) | What is being tested: `request`, `flow`, `collection` |
| `target_id` | BIGINT | ID of the target resource (interpreted by target_type) |
| `assertions` | JSONB | Array of assertion objects: `{field, operator, expected}` |
| `status` | VARCHAR(20) | Status: `draft`, `published` |
| `last_run_at` | TIMESTAMPTZ | Last execution timestamp (nullable) |
| `last_run_result` | VARCHAR(20) | Last result: `pass`, `fail`, `error` (nullable) |

**Constraints:**
- `FK(workspace_id) → workspace(id)` ON DELETE CASCADE
- `FK(test_suite_id) → test_suite(id)` ON DELETE SET NULL
- `FK(created_by) → user(id)`
- `CHECK(target_type IN ('request', 'flow', 'collection'))`
- `CHECK(status IN ('draft', 'published'))`
- `CHECK(last_run_result IN ('pass', 'fail', 'error') OR last_run_result IS NULL)`

---

## 16. audit_log

Immutable append-only log tracking all significant actions across the platform.

| Column | Type | Description |
|--------|------|-------------|
| `id` | BIGSERIAL | Primary key |
| `workspace_id` | BIGINT | FK → `workspace.id` (nullable, null for system-level events) |
| `user_id` | BIGINT | FK → `user.id` (nullable for system-initiated events) |
| `action` | VARCHAR(30) | Action type: `create`, `update`, `delete`, `restore`, `publish`, `invite`, `revoke` |
| `resource_type` | VARCHAR(50) | Entity type: `workspace`, `collection`, `api_request`, `user`, etc. |
| `resource_id` | BIGINT | ID of the affected resource |
| `old_value` | JSONB | Snapshot of entity before the change (nullable) |
| `new_value` | JSONB | Snapshot of entity after the change (nullable) |
| `ip_address` | VARCHAR(45) | IP address of the actor |
| `user_agent` | TEXT | User agent string of the actor |

**Constraints:**
- `FK(workspace_id) → workspace(id)` ON DELETE SET NULL
- `FK(user_id) → user(id)` ON DELETE SET NULL

**Indexes:**
- `INDEX(workspace_id, created_at DESC)` — workspace activity feed
- `INDEX(user_id, created_at DESC)` — user activity feed
- `INDEX(resource_type, resource_id)` — audit trail for specific resource

---

## 17. documentation

Smart auto-generated API documentation linked to individual requests.

| Column | Type | Description |
|--------|------|-------------|
| `id` | BIGSERIAL | Primary key |
| `api_request_id` | BIGINT | FK → `api_request.id` (one doc per request) |
| `generated_content` | JSONB | Auto-generated documentation sections from schema/request |
| `manual_edits` | JSONB | User-written overrides that survive regeneration |
| `publish_status` | VARCHAR(20) | Status: `draft`, `published`, `archived` |
| `ai_assisted` | BOOLEAN | True = some content was generated by AI |
| `version` | INTEGER | Version number (auto-increment per request) |

**Constraints:**
- `FK(workspace_id) → workspace(id)` ON DELETE CASCADE
- `FK(api_request_id) → api_request(id)` ON DELETE CASCADE
- `UNIQUE(api_request_id)` — one doc per request
- `CHECK(publish_status IN ('draft', 'published', 'archived'))`

---

## 18. api_key

Workspace-level API keys for external programmatic access.

| Column | Type | Description |
|--------|------|-------------|
| `id` | BIGSERIAL | Primary key |
| `workspace_id` | BIGINT | FK → `workspace.id` |
| `name` | VARCHAR(255) | Human-readable key name (e.g. "CI/CD Pipeline") |
| `description` | TEXT | Optional description |
| `key_hash` | VARCHAR(255) | SHA-256 hash of the API key (never store plain key) |
| `expires_at` | TIMESTAMPTZ | Expiration timestamp (nullable = never expires) |
| `last_used_at` | TIMESTAMPTZ | Last time this key was used (nullable) |
| `revoked_at` | TIMESTAMPTZ | Revocation timestamp (nullable = active) |

**Constraints:**
- `FK(workspace_id) → workspace(id)` ON DELETE CASCADE
- `FK(owner_id) → user(id)`

---

## Entity Relationship Summary

```
user
 ├── user_session (1:N)
 ├── workspace (1:N) [as owner]
 │    ├── workspace_member (N:1)
 │    ├── workspace_invitation (N:1)
 │    ├── audit_log (1:N)
 │    ├── api_key (1:N)
 │    ├── collection (1:N)
 │    │    └── api_request (1:N) [no owner_id — belongs to collection]
 │    │         ├── request_history (1:N)
 │    │         └── flow_node (1:N) [as api_request reference]
 │    ├── environment (1:N)
 │    │    └── environment_variable (1:N)
 │    ├── flow (1:N)
 │    │    ├── flow_node (1:N)
 │    │    └── flow_edge (1:N)
 │    ├── test_suite (1:N)
 │    │    └── test_case (1:N)
 │    └── documentation (1:N) [1:1 with api_request]
 └── test_case (1:N) [as target — polymorphic]
```

## Indexes Checklist

| Table | Index | Purpose |
|-------|-------|---------|
| `user` | `UNIQUE(email)` | Fast email lookup at login |
| `user_session` | `FK(user_id)` | Find all sessions for a user |
| `user_session` | `idx_session_token` on `refresh_token_hash` | Token lookup at refresh |
| `workspace_member` | `UNIQUE(workspace_id, user_id)` | Prevent duplicate memberships |
| `workspace_invitation` | `UNIQUE(token)` | Token lookup for invitation acceptance |
| `api_request` | `INDEX(method)` | Filter by HTTP method |
| `api_request` | `INDEX(url text_pattern_ops)` | URL prefix search |
| `api_request` | `UNIQUE(collection_id, name, sequence)` | Ordering uniqueness |
| `request_history` | `INDEX(user_id, executed_at DESC)` | User history feed |
| `request_history` | `INDEX(api_request_id, executed_at DESC)` | Per-request history |
| `environment_variable` | `UNIQUE(environment_id, key)` | Key uniqueness per environment |
| `flow_node` | `FK(flow_id)` | All nodes in a flow |
| `flow_edge` | `UNIQUE(flow_id, source_node_id, target_node_id)` | Edge uniqueness |
| `audit_log` | `INDEX(workspace_id, created_at DESC)` | Workspace activity feed |
| `audit_log` | `INDEX(user_id, created_at DESC)` | User activity feed |
| `audit_log` | `INDEX(resource_type, resource_id)` | Resource audit trail |
| `documentation` | `UNIQUE(api_request_id)` | One doc per request |
