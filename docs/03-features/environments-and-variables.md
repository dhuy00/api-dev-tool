# Environments and Variables

## Overview

Environment and variables are a core abstraction for making requests portable, reusable, and context aware.

## Variable Scopes

- Global variables
- Workspace variables
- Environment variables
- Collection variables
- Request variables
- Runtime variables
- Secret variables

## Variable Resolution Rules

The precedence order shall be defined in the variable scope rules document. In general, the most local scope overrides broader scopes, but the final behavior must be explicit and auditable.

## Core Features

- Multiple named environments.
- Current environment switching.
- Secret masking.
- Variable resolution and autocomplete.
- Missing-variable detection.
- Import and export of environment assets.
- Dynamic and generated variables.

## MVP Positioning

The MVP should support a clear, deterministic variable resolution order and secret masking controls.
