# Use Case Specifications

## UC-001: Register and Verify Account

### Goal

Allow a new user to create an account and verify their identity.

### Actors

- User
- System
- Email delivery service

### Preconditions

- The user is not already registered.
- The user has access to an email account for verification.

### Main Flow

1. The user provides account details.
2. The system validates the input.
3. The system creates a pending account.
4. The system sends a verification link.
5. The user verifies the account.
6. The system activates the account.

### Alternate Flow

- The user signs in through OAuth.

### Exception Flow

- Verification link is expired or invalid.

## UC-002: Create Project

### Goal

Create a new API project in a workspace.

### Actors

- Workspace owner or admin
- System

### Preconditions

- The user has workspace access.

### Main Flow

1. The user opens the workspace.
2. The user selects Create Project.
3. The system stores the project record.
4. The user can add collections, requests, and environments.

## UC-003: Send HTTP Request

### Goal

Execute a request and inspect its result.

### Actors

- User
- Request execution engine

### Preconditions

- The user has access to the project.

### Main Flow

1. The user defines request metadata.
2. The user executes the request.
3. The system returns status, body, and response metadata.
4. The user inspects the result.

## UC-004: Generate Payload Data

### Goal

Create synthetic values for a payload.

### Actors

- User
- Generation service

### Preconditions

- A JSON payload exists.

### Main Flow

1. The user chooses generation mode.
2. The system previews generated values.
3. The user applies or partially regenerates the data.

## UC-005: Generate Test Case Set

### Goal

Create candidate tests from a request definition.

### Actors

- User
- Test generation engine

### Preconditions

- The request has enough metadata for analysis.

### Main Flow

1. The user starts the test generation action.
2. The system generates categories and expected assertions.
3. The user reviews and executes selected tests.

## UC-006: Run Performance Scenario

### Goal

Evaluate API performance for a target request.

### Actors

- User
- Performance worker

### Preconditions

- The user has access to a project and a configurable request.

### Main Flow

1. The user configures concurrency and test duration.
2. The system enqueues the performance run.
3. The worker executes the run.
4. The system displays summary metrics.

## UC-007: Publish Documentation

### Goal

Create a documentation site from API assets.

### Actors

- Technical writer
- System

### Preconditions

- Requests and schemas exist.

### Main Flow

1. The user starts documentation generation.
2. The system forms the documentation sections.
3. The user edits selected sections.
4. The user publishes the documentation site.
