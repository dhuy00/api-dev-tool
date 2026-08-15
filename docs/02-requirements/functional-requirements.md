# Functional Requirements

## Requirement Conventions

All functional requirements in this document follow the pattern:

- ID
- Title
- Description
- Actors
- Preconditions
- Trigger
- Main Flow
- Alternative Flows
- Exception Flows
- Postconditions
- Business Rules
- Priority
- Dependencies
- Acceptance Criteria

## Functional Requirements

### FR-AUTH-001

Title:
User registration with email verification

Description:
The system shall allow a new user to create an account using email and password, complete optional OAuth registration, and verify the email address before full account activation.

Actors:
Authenticated user, unauthenticated user, system

Preconditions:
- The user is not already registered.
- The email address is valid and not already claimed.

Trigger:
The user submits the registration form.

Main Flow:
1. The user enters email, password, and profile details.
2. The system validates the input.
3. The system creates a pending account record.
4. The system sends a verification email.
5. The user confirms the email link.
6. The system activates the account.

Alternative Flows:
- The user registers with OAuth provider.
- The user retries registration after a validation failure.

Exception Flows:
- Duplicate email.
- Verification link expired.
- Verification link already used.

Postconditions:
- The account becomes active after successful verification.
- The user can sign in and create or join workspaces.

Business Rules:
- Passwords must be hashed before storage.
- Email verification is required for new local accounts.

Priority:
Must Have

Dependencies:
- Authentication service
- Email delivery provider

Acceptance Criteria:
Given a new user requests registration with a valid email address,
When the registration form is submitted,
Then the system must create a pending account and send a verification email.

### FR-AUTH-002

Title:
OAuth login using Google and GitHub

Description:
The system shall allow users to authenticate through Google and GitHub OAuth providers and bind the resulting identity to a user account.

Actors:
Unauthenticated user, identity provider, system

Preconditions:
- OAuth provider configuration is available.
- The user has a valid account at the provider.

Trigger:
The user chooses Google or GitHub sign-in.

Main Flow:
1. The user selects an OAuth provider.
2. The system redirects the user to the provider.
3. The user authorizes the account.
4. The system receives the provider response.
5. The system links or creates the account.
6. The system creates a session.

Alternative Flows:
- The provider account is already linked to an existing user.
- The provider account is not linked and requires account creation.

Exception Flows:
- Provider denied access.
- Provider returned an invalid or incomplete identity.
- Email scope missing.

Postconditions:
- The user completes sign-in and is redirected to the workspace.

Business Rules:
- OAuth login must be consent-based.
- Account linking must be deterministic and auditable.

Priority:
Must Have

Dependencies:
- OAuth provider configuration

Acceptance Criteria:
Given a user has a valid Google or GitHub account,
When the user signs in through OAuth,
Then the system must create or link the account and establish a session.

### FR-WS-001

Title:
Create and manage personal workspace

Description:
The system shall allow a user to create, update, archive, duplicate, and delete a personal workspace.

Actors:
Authenticated user

Preconditions:
- The user is authenticated.

Trigger:
The user opens the workspace management interface.

Main Flow:
1. The user chooses to create a workspace.
2. The user specifies name and description.
3. The system creates the workspace record.
4. The system assigns the creator as owner.
5. The user can later update or delete the workspace.

Alternative Flows:
- The user duplicates a workspace as a template.
- The user archives instead of deleting a workspace.

Exception Flows:
- Workspace name conflict.
- Workspace deletion blocked due to active resources.

Postconditions:
- The workspace becomes available for collection and asset creation.

Business Rules:
- A user must own at least one workspace to keep assets.

Priority:
Must Have

Dependencies:
- Workspace ownership model

Acceptance Criteria:
Given a signed-in user,
When the user creates a workspace,
Then the workspace must be created with the user as the owner.

### FR-REQ-001

Title:
Build and execute REST HTTP requests

Description:
The system shall allow users to configure and execute HTTP requests using standard methods and request components.

Actors:
Authenticated user

Preconditions:
- The user has access to a workspace.
- The request editor is open.

Trigger:
The user submits an HTTP request.

Main Flow:
1. The user selects method, URL, headers, query parameters, path variables, body, and auth.
2. The system validates the request configuration.
3. The system executes the request.
4. The system stores the response metadata and response body.
5. The user can inspect the response.

Alternative Flows:
- The user saves the request to a collection.
- The user copies the request as a new request.

Exception Flows:
- Invalid URL.
- SSL certificate validation failure.
- Request timeout.
- Network connection failure.

Postconditions:
- The response is visible in the response panel.
- A request history entry is recorded.

Business Rules:
- REST/HTTP is required for the MVP.
- Connection security settings must be explicitly configurable.

Priority:
Must Have

Dependencies:
- Network execution engine

Acceptance Criteria:
Given a user enters a valid HTTP request,
When the user sends it,
Then the system must display status, response data, and execution metadata.

### FR-DATA-GEN-001

Title:
Generate valid request payload

Description:
The system shall generate synthetic valid values for fields in a JSON payload based on field names, data types, schemas, constraints, examples, and the selected locale.

Actors:
Authenticated user

Preconditions:
- The user has access to a workspace.
- A request with a JSON payload is open.

Trigger:
The user selects “Generate valid data”.

Main Flow:
1. The system parses the payload.
2. The system identifies fields and nested structures.
3. The system detects available schemas and validation constraints.
4. The system generates synthetic values.
5. The system presents a preview.
6. The user accepts the generated payload.
7. The system applies it to the request editor.

Alternative Flows:
- The user selects only specific fields.
- The user regenerates one field.
- The user changes the locale.
- The user chooses a deterministic seed.

Exception Flows:
- Invalid JSON.
- Unsupported schema.
- Generation service unavailable.
- Payload exceeds the configured limit.

Postconditions:
- Generated data is inserted into the request editor.
- The user can undo the operation.

Business Rules:
- The system must not overwrite fields unless the user explicitly allows it.
- Generation must be privacy-safe and avoid using real personal data by default.

Priority:
Must Have

Dependencies:
- Payload parser
- Generation service

Acceptance Criteria:
Given a request body containing a structured payload,
When the user generates valid data,
Then the system must produce a preview of the synthetic payload and allow the user to apply it to the request.

### FR-TEST-GEN-001

Title:
Generate test cases from a request definition

Description:
The system shall generate candidate test cases from the request definition, payload, schema, response examples, and user-defined business rules.

Actors:
Authenticated user, system

Preconditions:
- The user has access to a workspace.
- A request and optional schema or response example exist.

Trigger:
The user invokes automated test generation.

Main Flow:
1. The system reads the request definition and supporting artifacts.
2. The system classifies the request into test categories.
3. The system proposes happy path and negative path tests.
4. The system creates a test suite candidate.
5. The user can execute or edit the generated tests.

Alternative Flows:
- The user asks for only a subset of test categories.
- The system generates tests from an OpenAPI contract instead of a manual request.

Exception Flows:
- Missing request schema.
- Unsupported method or body type.
- Test generation service unavailable.

Postconditions:
- Test cases become available in the test suite workspace.

Business Rules:
- Generated tests must be labeled as generated or manual.
- AI-assisted suggestions must be clearly marked as suggestions rather than authoritative assertions.

Priority:
Should Have

Dependencies:
- Request schema extraction
- Test execution engine

Acceptance Criteria:
Given a request with an identifiable schema or payload,
When the user generates tests,
Then the system must create a set of candidate test cases with category, expected result, and execution metadata.

### FR-PERF-001

Title:
Run basic performance scenario

Description:
The system shall support a basic performance test workflow that configures concurrency, duration, and request conditions and produces a dashboard of aggregated metrics.

Actors:
Authenticated user, performance worker

Preconditions:
- The user has access to a workspace.
- The request target is valid.
- Workspace capacity and limits are configured.

Trigger:
The user starts a performance run.

Main Flow:
1. The user selects a request and run configuration.
2. The system validates the configuration against safe limits.
3. The system enqueues a performance job.
4. A worker executes the load scenario.
5. The system collects metrics and renders dashboard output.

Alternative Flows:
- The user compares two runs.
- The user adjusts thresholds and reruns.

Exception Flows:
- Exceeded concurrency or duration threshold.
- Target endpoint unavailable.
- Job queue failure.

Postconditions:
- Run metrics are stored for comparison and reporting.

Business Rules:
- The system must not silently exceed configured safe testing limits.
- Performance execution must be isolated from interactive request execution.

Priority:
Should Have

Dependencies:
- Performance worker infrastructure

Acceptance Criteria:
Given a user configures a valid performance run,
When the run is started,
Then the system must record request metrics and display dashboard summaries.

### FR-TIMELINE-001

Title:
Capture request timeline information

Description:
The system shall capture a request timeline that represents the major execution phases of a request and surface the timing data to the user.

Actors:
Authenticated user, browser or request execution pipeline, system

Preconditions:
- The user executes a request.
- The execution environment supports timing observation.

Trigger:
The user sends a request.

Main Flow:
1. The system initiates the request.
2. The system records the major network phases.
3. The system computes total duration and phase timings.
4. The system renders a waterfall-style timeline.

Alternative Flows:
- The user compares two request timelines.
- The user exports the timeline data.

Exception Flows:
- Browser does not expose a required metric.
- Backend proxy or agent is required to provide a metric.

Postconditions:
- The user can inspect the timeline and identify the slowest phase.

Business Rules:
- The system must label metrics as browser-observable, proxy-observable, or estimated.

Priority:
Must Have for basic level

Dependencies:
- Request execution timing collection

Acceptance Criteria:
Given a request completes successfully,
When the timeline is rendered,
Then the system must show the request execution phases and timing summary.

### FR-DOC-001

Title:
Generate documentation from request assets

Description:
The system shall generate a documentation site from collections, requests, examples, schemas, and test metadata.

Actors:
Authenticated user, system

Preconditions:
- The user has access to a workspace.
- Requests and examples exist.

Trigger:
The user invokes documentation generation.

Main Flow:
1. The system reads request metadata and examples.
2. The system builds documentation sections.
3. The system renders a preview.
4. The user optionally edits sections manually.
5. The user publishes the documentation site.

Alternative Flows:
- The user regenerates a selected section.
- The user drafts a version and later publishes it.

Exception Flows:
- Schema conflicts.
- Documentation generation service unavailable.
- Manual edits conflict with generated sections.

Postconditions:
- A documentation version exists in draft or published state.

Business Rules:
- Generated content and manual edits must be distinguished.
- Published documentation must be versioned and traceable.

Priority:
Should Have

Dependencies:
- Documentation renderer

Acceptance Criteria:
Given request and schema assets exist,
When the user generates documentation,
Then the system must create a documentation version that can be reviewed and published.

### FR-FLOW-001

Title:
Create and execute a sequential request flow

Description:
The system shall allow a user to build a sequential request flow with nodes representing requests, delay, condition, variable extraction, and stop behavior.

Actors:
Authenticated user, flow execution engine

Preconditions:
- The user has access to a workspace.
- A flow can be created from existing requests.

Trigger:
The user creates or runs a flow.

Main Flow:
1. The user adds nodes to a canvas.
2. The user connects nodes and configures them.
3. The user validates the flow.
4. The user runs the flow.
5. The system executes the nodes in order and records outputs.

Alternative Flows:
- The user retries a failed node.
- The user runs from a selected node.

Exception Flows:
- Invalid node configuration.
- Missing variable reference.
- Execution timeout.

Postconditions:
- The flow execution history is stored.

Business Rules:
- Sequential flow is an MVP capability.
- Conditional and parallel execution are later-stage features.

Priority:
Should Have

Dependencies:
- Flow modeling engine

Acceptance Criteria:
Given a user defines a valid sequence of nodes,
When the flow is executed,
Then the system must run each node in sequence and record execution output.
