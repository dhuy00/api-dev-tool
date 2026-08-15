# Domain Model

## Overview

This domain model identifies the main business objects that anchor the API Forge platform.

## Core Domain Entities

- User
- Session
- OAuthAccount
- Workspace
- WorkspaceMember
- Invitation
- Collection
- Folder
- Request
- RequestVersion
- RequestExample
- Environment
- Variable
- Secret
- RequestExecution
- ResponseSnapshot
- TestSuite
- TestCase
- TestExecution
- TestRun
- PerformanceScenario
- PerformanceRun
- PerformanceMetric
- DocumentationSite
- DocumentationVersion
- RequestFlow
- FlowVersion
- FlowNode
- FlowEdge
- FlowExecution
- FlowNodeExecution
- Comment
- Notification
- ActivityLog
- ImportJob
- ExportJob

## Relationships

- A User has many Sessions and OAuthAccounts.
- A Workspace has many WorkspaceMembers and owns Collections, Requests, Environments, TestSuites, Flows, and Documentation assets directly.
- A Request has many RequestVersions and RequestExamples.
- A RequestExecution belongs to a Request and references a ResponseSnapshot.
- A TestSuite owns TestCases and TestRuns.
- A PerformanceScenario produces PerformanceRuns and PerformanceMetrics.
- A DocumentationSite has many DocumentationVersions.
- A RequestFlow has many FlowNodes and FlowEdges and produces FlowExecutions.

## Ownership and Lifecycle

Each entity should support ownership by a workspace, soft-delete semantics, and activity audit metadata.

## Sensitive Field Notes

Secrets, tokens, passwords, session identifiers, OAuth tokens, and environment secrets must be masked or encrypted at rest and must never be exposed in plain logs.
