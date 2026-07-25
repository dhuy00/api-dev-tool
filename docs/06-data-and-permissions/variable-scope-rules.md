# Variable Scope Rules

## Purpose

This document defines the variable resolution precedence model for API Forge.

## Resolution Order

The default precedence for variable lookup shall be:

1. Request variables
2. Collection variables
3. Environment variables
4. Project variables
5. Workspace variables
6. Global variables
7. Runtime-generated variables

## Additional Rules

- Local variables override broader scope variables.
- Secret variables must be masked in the UI and omitted from shared documentation by default.
- Missing variable references shall be flagged clearly in the request editor and execution flow.
- The system must display the source of a resolved variable in the user interface when supported.
- Dynamic or generated variables must be marked as derived values, not static constants.

## Assumptions

The exact precedence order for runtime or generated variables may be refined during implementation based on the final execution engine model.
