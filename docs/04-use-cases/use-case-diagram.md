# Use Case Diagram

## Summary

The following use cases define the primary interactions of the API Forge platform.

```mermaid
flowchart LR
    U[User] --> A[Register or Sign In]
    U --> B[Create Workspace]
    U --> C[Create Project]
    U --> D[Build Request]
    U --> E[Generate Payload]
    U --> F[Generate Tests]
    U --> G[Run Performance Scenario]
    U --> H[View Timeline]
    U --> I[Generate Documentation]
    U --> J[Build Flow]
    U --> K[Import or Export Assets]
    U --> L[Search Assets]

    B --> W[Workspace Management]
    C --> P[Project Management]
    D --> R[Request Execution]
    E --> G1[Payload Generator]
    F --> T[Test Suite]
    G --> PERF[Performance Dashboard]
    H --> TIMELINE[Request Timeline]
    I --> DOC[Documentation Site]
    J --> FLOW[Flow Builder]
    K --> IEX[Import Export]
    L --> SEARCH[Search]
```

## Notes

This diagram is intentionally high-level and does not define internal implementation structure.
