# Entity Definitions

## User

Purpose:
Represents an authenticated person or identity with access to one or more workspaces.

Key fields:
- id
- email
- displayName
- status
- createdAt
- updatedAt

Relationships:
- One-to-many with Session, OAuthAccount, WorkspaceMember

Ownership:
- User-owned account.

Lifecycle:
- Created, verified, active, deactivated, deleted.

Sensitive fields:
- passwordHash, provider tokens.

## Workspace

Purpose:
A collaboration boundary for collections, environments, and shared assets.

Key fields:
- id
- name
- slug
- ownerId
- status

Relationships:
- One-to-many with Collection, WorkspaceMember, Invitation

## Request

Purpose:
A saved HTTP request definition with methods, headers, auth, body, and metadata.

Key fields:
- id
- name
- method
- url
- authConfig
- body
- collectionId
- status

Relationships:
- One-to-many with RequestExecution, RequestVersion, RequestExample

## RequestExecution

Purpose:
A captured execution of a request in a given environment.

Key fields:
- id
- requestId
- environmentId
- status
- durationMs
- startedAt
- endedAt

Relationships:
- Many-to-one with Request and ResponseSnapshot

## Environment

Purpose:
A named configuration set used to resolve request variables.

Key fields:
- id
- name
- workspaceId
- isDefault

Relationships:
- One-to-many with Variable, RequestExecution

## Variable

Purpose:
A named substitutable value within a given scope.

Key fields:
- id
- name
- value
- scopeType
- isSecret

Relationships:
- Many-to-one with Environment, Workspace, Collection, Request

## Secret

Purpose:
A protected credential or token stored securely for runtime access.

Key fields:
- id
- secretType
- referenceKey
- maskedLabel

Relationships:
- Many-to-one with Workspace

## DocumentationSite

Purpose:
A versionable documentation artifact for a collection.

Key fields:
- id
- name
- status
- publishedAt
- version

Relationships:
- One-to-many with DocumentationVersion

## RequestFlow

Purpose:
A visual orchestration of one or more API-related nodes.

Key fields:
- id
- name
- createdBy
- version

Relationships:
- One-to-many with FlowNode, FlowEdge, FlowExecution
