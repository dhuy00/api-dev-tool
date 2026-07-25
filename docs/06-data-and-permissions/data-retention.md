# Data Retention

## Purpose

This document defines retention guidance for user-generated, execution, and derived assets.

## Retention Categories

### User Content

- Projects, collections, requests, environments, and flows: retained until deleted or archived.
- Comments and activity history: retained according to workspace governance settings.

### Execution History

- Request history and response snapshots: retained for a configurable period, with a default retention window of 90 days for local and team activity history.
- Performance runs: retained for 30 to 90 days depending on the workspace or enterprise policy.

### Documentation

- Draft documentation: retained during the project lifecycle.
- Published documentation: retained until superseded or removed by administrative action.

### Secrets and Tokens

- Secret storage must follow a minimum-retention approach, with automatic rotation or revocation recommendations.
- Secret values must never be stored in plain logs or exported documentation unless the user has explicitly approved that output.

## Deletion and Recovery

- Delete actions should use soft-delete initially.
- Recovery should be available during the retention window.
- Permanent purge should be scheduled via background administrative processes.
