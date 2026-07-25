# Smart API Documentation

## Overview

The smart documentation module transforms request and schema assets into a living documentation site.

## Documentation Content

- API overview
- Base URL
- Authentication
- Endpoint list
- Endpoint descriptions
- Request parameters
- Headers
- Request body
- Response schema
- Response examples
- Error responses
- Code samples
- Usage guide
- Common errors
- Related endpoints
- Change history

## Generation Model

### Deterministic Generation

This is the baseline mode. It creates static documentation sections from requests, schemas, examples, and saved metadata.

### Template-Based Generation

This provides richer documentation layout, section grouping, and reusable content patterns.

### AI-Assisted Description Generation

This is used to generate descriptive prose and suggestions, but the system must label those sections as AI-assisted rather than authoritative.

## Governance Requirements

- Generated content and manual edits must be clearly separated.
- Changing request or schema data must trigger synchronization rules.
- Manual sections must survive repeated regeneration unless explicitly overridden.
- Publishing state must be tracked.

## MVP Positioning

The MVP should support deterministic documentation generation with edit and publish controls, while AI-assisted prose generation is a later enhancement.
