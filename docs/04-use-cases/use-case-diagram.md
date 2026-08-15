# Use Case Diagram

## Summary

The following use cases define the primary interactions of the API Forge platform.

```mermaid
flowchart LR
    U[User] --> A[Register or Sign In]
    U --> B[Create Workspace]
    U --> C[Build Request]
    U --> D[Generate Payload]
    U --> E[Generate Tests]
    U --> F[Run Performance Scenario]
    U --> G[View Timeline]
    U --> H[Generate Documentation]
    U --> I[Build Flow]
    U --> J[Import or Export Assets]
    U --> K[Search Assets]

    B --> W[Workspace Management]
    C --> R[Request Execution]
    D --> G1[Payload Generator]
    E --> T[Test Suite]
    F --> PERF[Performance Dashboard]
    G --> TIMELINE[Request Timeline]
    H --> DOC[Documentation Site]
    I --> FLOW[Flow Builder]
    J --> IEX[Import Export]
    K --> SEARCH[Search]
```

## Notes

This diagram is intentionally high-level and does not define internal implementation structure.
