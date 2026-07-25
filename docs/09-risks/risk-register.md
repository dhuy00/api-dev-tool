# Risk Register

| Risk ID | Description | Category | Probability | Impact | Severity | Mitigation | Contingency | Owner | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| R-001 | Product scope grows beyond a feasible portfolio footprint. | Scope | Medium | High | High | Use MoSCoW prioritization and architecture pacing. | Defer non-core features to later releases. | Product Owner | Open |
| R-002 | The product overlaps with established API platforms in a crowded market. | Market | Medium | Medium | Medium | Focus on differentiation around AI assistance, request timelines, and flow orchestration. | Strengthen positioning and targeted use cases. | Product Owner | Open |
| R-003 | AI usage cost or reliability creates inconsistency. | AI | High | Medium | High | Use AI only for optional assistance and keep deterministic workflows as the baseline. | Fall back to rule-based generation and manual review. | Engineering Lead | Open |
| R-004 | AI outputs are inaccurate or misleading. | AI | High | High | High | Label outputs as suggestions and anchor them to schemas and examples. | Require user review and explicit apply action. | Engineering Lead | Open |
| R-005 | Secret leakage in logs, exports, or documentation. | Security | Medium | High | High | Apply masking, encryption, and safe export defaults. | Provide secret redaction and access rollback. | Security Lead | Open |
| R-006 | SSRF or unsafe internal network access via request execution. | Security | Medium | High | High | Enforce safe target policy and restrict localhost/private network access. | Disable insecure execution paths by policy. | Security Lead | Open |
| R-007 | Performance test abuse or accidental production load. | Operations | Medium | High | High | Enforce concurrency, rate, and target isolation limits. | Use isolated worker execution and deny unsafe scenarios. | Platform Lead | Open |
| R-008 | Browser network timing limitations make timeline data incomplete. | Technical | High | Medium | Medium | Distinguish browser-observable and backend-observable metrics. | Use backend proxy or desktop agent when available. | Architecture Lead | Open |
| R-009 | Real-time collaboration introduces event consistency and conflict complexity. | Engineering | Medium | Medium | Medium | Defer to Version 2. | Keep collaboration at shared artifact visibility and change history. | Engineering Lead | Open |
| R-010 | Import incompatibility across formats causes data loss or mapping drift. | Integration | Medium | Medium | Medium | Support preview and mapping validation. | Use partial import with rollback and log review. | Integration Lead | Open |
| R-011 | Large response handling degrades UX or storage cost. | Performance | Medium | Medium | Medium | Enforce preview and download-only limits. | Stream or partial response handling. | Platform Lead | Open |
| R-012 | Flow execution becomes too complex for MVP scope. | Engineering | Medium | Medium | Medium | Limit initial flow support to sequential flows. | Use later-stage feature expansion for branching and loops. | Product Owner | Open |
| R-013 | Vendor lock-in due to cloud provider or AI provider dependency. | Strategic | Medium | Medium | Medium | Keep abstraction boundaries for generation and execution services. | Build provider adapters and portability layers. | Architecture Lead | Open |
| R-014 | Multi-tenant data leakage across workspace boundaries. | Security | Low | High | High | Use tenant isolation and scoped access control. | Add data isolation validation and audit review. | Security Lead | Open |
