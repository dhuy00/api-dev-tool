# Security Design

## Security Goals

- Protect workspace boundaries.
- Mask secrets and sensitive values.
- Prevent unsafe network usage.
- Control permissions with RBAC.
- Maintain audit evidence.

## Security Controls

- Encryption in transit using TLS.
- Encryption at rest for persisted secrets and sensitive data.
- Password hashing with a strong adaptive scheme.
- Secure session management and token rotation.
- CSRF and XSS mitigation.
- Input validation and rate limiting.
- Tenant-aware data isolation.
- Audit logs for sensitive changes.

## Product-Specific Risk Considerations

- SSRF from user-provided URLs or internal endpoints.
- Unsafe redirect handling.
- Request to localhost or private network addresses.
- Malicious file import or upload.
- Sensitive token leakage in history, documentation, or flows.
- Large-scale performance testing abuse.

## Design Principle

The platform must treat the request execution environment as a privileged boundary and protect it with explicit policy and safe defaults.
