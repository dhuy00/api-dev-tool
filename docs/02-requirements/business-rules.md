# Business Rules

## Purpose

This document defines the governing rules for API Forge and clarifies what the platform must enforce at the product and workflow level.

## Business Rules

### BR-001

Title:
Role-based workspace visibility

Description:
Workspace resources shall be visible only to members who have an active role assignment in the workspace.

Priority:
Must Have

### BR-002

Title:
Owner transfer requirement

Description:
Workspace ownership transfer shall require confirmation from the current owner and an explicit assignment to the target member.

Priority:
Must Have

### BR-003

Title:
Secret masking

Description:
Secret variables and tokens shall be masked in UI, logs, exported documentation, and shared previews unless the user explicitly chooses a secure reveal action.

Priority:
Must Have

### BR-004

Title:
Immutable request execution history

Description:
Historical request execution snapshots shall be append-only and shall not be overwritten by subsequent edits to the request definition.

Priority:
Must Have

### BR-005

Title:
Generated data safety

Description:
Generated data shall default to privacy-safe synthetic values and must never populate secrets from the environment unless the user explicitly opts in.

Priority:
Must Have

### BR-006

Title:
Generated test labeling

Description:
Every generated test case shall retain metadata identifying whether it was produced by a rule-based generator or AI-assisted suggestion.

Priority:
Must Have

### BR-007

Title:
Documentation conflict handling

Description:
Manual edits to documentation sections shall be preserved as user-owned content, while generated sections shall be re-synchronized only when the source artifact changes and no user override exists.

Priority:
Must Have

### BR-008

Title:
Flow execution safety

Description:
A flow execution shall fail fast when a node references a variable that is not available in the current execution scope.

Priority:
Must Have

### BR-009

Title:
Performance-run constraints

Description:
Performance runs shall be constrained by workspace limits and safe defaults to avoid accidental abuse of target systems.

Priority:
Must Have

### BR-010

Title:
Import rollback

Description:
If an import operation fails after partial writes, the system shall either roll back the complete transaction or mark the import job as partially failed with recoverable artifacts.

Priority:
Must Have

### BR-011

Title:
Soft delete policy

Description:
Deleted workspaces, requests, collections, and performance resources shall be retained in a soft-delete state during the retention window before permanent purge.

Priority:
Must Have

### BR-012

Title:
Version traceability

Description:
Every documentation, request, flow, and performance run shall retain a version or timestamp trace so that change history can be audited.

Priority:
Must Have
