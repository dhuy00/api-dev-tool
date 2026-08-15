# Import and Export

## Overview

The import/export module helps teams bring existing API artifacts into the platform and move them out safely.

## Supported Import Sources

- OpenAPI 3.x
- Swagger 2.0
- Postman Collection
- Hoppscotch Collection
- cURL
- HAR
- Environment files
- Native workspace backup

## Import Requirements

- Import preview.
- Conflict detection.
- Duplicate detection.
- Mapping.
- Validation.
- Error reporting.
- Partial import.
- Rollback on failure.

## Export Requirements

- Export native workspace format.
- Export with or without secrets.
- Warn before exporting sensitive data.

## MVP Positioning

The MVP should support import of cURL and OpenAPI plus native export by default. Wider import compatibility and mapping refinement are staged later.
