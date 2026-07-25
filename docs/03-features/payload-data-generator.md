# Payload Data Generator

## Overview

The payload data generator provides synthetic payload synthesis for request editor workflows.

## Inputs

- Current JSON payload
- JSON schema
- OpenAPI schema
- Field names and types
- Validation constraints
- Examples
- Enums
- Required flags
- User prompt
- Existing response
- Prior saved examples

## Output Modes

- Valid data
- Invalid data
- Boundary data
- Empty or null data
- Large payload
- Random data
- Deterministic seed-based data
- Locale-specific data
- Privacy-safe synthetic data
- Custom scenario data

## Important Functional Constraints

- Users may select specific fields for generation.
- Existing values should not be overwritten unless explicitly allowed.
- Partial regeneration should be supported.
- Undo and redo of generation actions should be available.
- Preview before apply is required.
- Locale and seed are configurable.
- Nested objects, arrays, and enums must be handled.

## Privacy and Safety Requirements

- No real personal data should be used by default.
- Secrets and sensitive values must not be sent to external AI providers without consent.
- Generated outputs should favor privacy-safe synthetic values.

## MVP Positioning

The MVP should implement deterministic and locally safe generation based on schema and examples, with AI-assisted enhancements and human confirmation for the later release.
