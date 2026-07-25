# Assumptions and Constraints

## Assumptions

### A-001

A single cloud-hosted SaaS deployment is the baseline business model for the MVP.

### A-002

The MVP will prioritize REST/HTTP support and treat GraphQL, WebSocket, SSE, and gRPC as roadmap items.

### A-003

The product will support both personal and team workspaces, but full real-time collaboration is deferred to Version 2.

### A-004

AI-assisted features will be implemented with explicit consent and clear labeling, not with silent background data sharing.

### A-005

A self-hosted deployment will be considered after the cloud MVP is validated.

## Constraints

### C-001

The MVP must remain implementable by a small team with a focused domain footprint.

### C-002

The system shall not assume that the browser can expose every network timing metric without backend or extension support.

### C-003

The product shall not claim to replace specialist security or enterprise load testing tools.

### C-004

The product shall avoid storing or revealing secrets in logs, exports, or generated documentation without explicit user action.

### C-005

The initial platform shall support a safe subset of performance execution that can be isolated from user-facing interactive requests.
