# Permission Matrix

## Role Definitions

- Owner: Full control of the workspace or resource, including transfer and permission management.
- Admin: Can manage members and settings, but cannot transfer ownership.
- Editor: Can create and modify shared resources, execute requests, and manage content.
- Viewer: Can inspect resources but cannot modify or execute sensitive operations.

## Resource Matrix

| Resource | Owner | Admin | Editor | Viewer |
| --- | --- | --- | --- | --- |
| Workspace | View, Create, Edit, Delete, Manage Permissions | View, Create, Edit, Delete, Manage Permissions | View, Create, Edit | View |
| Member | View, Edit, Delete, Manage Permissions | View, Edit, Delete, Manage Permissions | View | View |
| Collection | View, Create, Edit, Delete, Share, Export | View, Create, Edit, Delete, Share, Export | View, Create, Edit, Share, Export | View |
| Request | View, Create, Edit, Delete, Execute, Share | View, Create, Edit, Delete, Execute, Share | View, Create, Edit, Execute | View, Execute |
| Environment | View, Create, Edit, Delete, Export | View, Create, Edit, Delete, Export | View, Create, Edit | View |
| Secret | View, Create, Edit, Delete | View, Create, Edit, Delete | View, Edit | View |
| Test Suite | View, Create, Edit, Delete, Execute | View, Create, Edit, Delete, Execute | View, Create, Edit, Execute | View |
| Performance Run | View, Create, Execute, Delete | View, Create, Execute, Delete | View, Create, Execute | View |
| Documentation | View, Create, Edit, Delete, Publish, Share | View, Create, Edit, Delete, Publish, Share | View, Create, Edit | View |
| Request Flow | View, Create, Edit, Delete, Execute | View, Create, Edit, Delete, Execute | View, Create, Edit, Execute | View |
| Activity Log | View | View | View | View |

## Sensitive Actions Requiring Confirmation or Re-Authentication

The following actions should require an explicit confirmation step or re-authentication when dealing with secrets or destructive changes:

- Delete workspace.
- Transfer ownership.
- Remove member with active workspace access.
- View or edit secrets.
- Export documentation or workspace backup containing secrets.
- Publish documentation with sensitive examples.
- Run performance scenarios that exceed safe default limits.

## Policy Notes

The workspace-level owner remains the final authority for role assignments, ownership transfer, and high-sensitivity actions.
