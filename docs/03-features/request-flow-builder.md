# Request Flow Builder

## Overview

The request flow builder provides a drag-and-drop canvas for composing request sequences and reusable automation logic.

## Node Types

- Start
- HTTP Request
- Delay
- Condition
- Variable
- Data Generator
- Extract Value
- Assertion
- Loop
- Transform Data
- Parallel Branch
- Merge
- Log
- Stop
- Subflow

## Flow Capabilities

- Drag and drop
- Node connectivity
- Node configuration
- Validation
- Run, pause, stop
- Retry failed node
- Run from selected node
- Skip selected node
- Debug mode
- Step-by-step execution
- Execution logs
- Duplicate and import/export
- Versioning
- Reusable subflow

## Data Passing

The flow system shall allow data references such as:

- {{nodes.login.response.body.accessToken}}
- {{nodes.createUser.response.body.id}}
- {{flow.variables.email}}

## Control Flow

- If/else
- Loop over array
- Retry
- Timeout
- Error branch
- Continue on failure
- Stop on failure

## Differentiation from Other Concepts

### Request Flow Builder vs Collection Runner

A collection runner executes a static list of requests in sequence. A request flow builder models data dependencies, branching, transformation, and execution control across a visual canvas.

### Request Flow Builder vs Test Suite

A test suite validates expected outcomes for one or more API requests. A request flow builder focuses on end-to-end execution and state propagation across linked requests.

### Request Flow Builder vs General Workflow Automation Platform

The flow builder is API-centric and intentionally scoped to request orchestration, variable extraction, and workflow validation rather than general business automation.

## MVP Positioning

The MVP should support a sequential flow builder with node mapping and basic execution logs. Conditional and parallel execution are later-stage features.
