# API Request Timeline

## Overview

The request timeline module provides a per-request network timing waterfall, similar in principle to browser network tracing tools.

## Expected Phases

- Request preparation
- DNS lookup
- TCP connection
- TLS handshake
- Request upload
- Server waiting / time to first byte
- Response download
- Client processing

## Data Provided

- Total duration
- Per-phase timings
- Start and end timestamps
- Redirect duration
- Connection reuse or creation
- HTTP version
- Remote address when available
- TLS detail when available
- Request size
- Response size
- Compression and cache information
- Time to first byte

## UI Features

- Waterfall chart
- Hover details
- Highlight slowest phase
- Phase explanation
- Comparison between two requests
- Bottleneck warning
- Export timeline data

## Technical Limitation Note

Web browsers do not expose all network-level timing details in every environment. Where browser telemetry is incomplete, the product must distinguish between browser-observable, proxy-observable, and estimated metrics.

## MVP Positioning

The MVP should provide a basic timeline based on browser-available metadata and backend-proxy-enhanced data where supported.
