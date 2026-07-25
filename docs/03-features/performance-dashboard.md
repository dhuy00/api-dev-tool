# API Performance Dashboard

## Overview

The performance dashboard gives the user visibility into API execution quality and trend comparison without replacing specialist load-testing systems.

## Run Configuration

- Target request
- Environment
- Number of requests
- Concurrency
- Ramp-up
- Test duration
- Requests per second
- Delay
- Timeout
- Stop conditions
- Authentication
- Dataset
- Warm-up requests

## Core Metrics

- Total requests
- Successful requests
- Failed requests
- Error rate
- Requests per second
- Throughput
- Minimum/maximum/average/median response time
- P90, P95, P99
- Response size
- Timeouts
- Status code distribution
- Error type distribution
- Latency trend over time
- Concurrent users over time

## Comparison Capabilities

- Compare two runs.
- Compare environments.
- Compare before and after deployment.
- Highlight regressions.
- Apply performance thresholds.

## Safety Constraints

The platform must enforce safe limits for concurrency, duration, volume, and target isolation to avoid accidental abuse or misuse of production systems.

## MVP Positioning

The MVP should support a controlled, isolated performance dashboard with constrained run settings and basic comparison reporting.
