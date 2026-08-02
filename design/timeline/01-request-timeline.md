# Màn hình Request Timeline

## 1. Tổng quan

- **Mã màn hình:** TIMELINE-001
- **Tên màn hình:** Request Timeline
- **Loại:** Detail Panel
- **Vị trí:** Request → Response → Timeline tab
- **Yêu cầu:** Member của project

---

## 2. Mục đích

Hiển thị chi tiết thời gian của từng phase trong HTTP request lifecycle. Giúp identify bottlenecks.

---

## 3. Layout

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│  Timeline                                                                              │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                 │
│  Status: 200 OK · Total: 245ms                                                           │
│                                                                                                 │
│  ┌───────────────────────────────────────────────────────────────────────────────────┐ │
│  │                                                                                   │ │
│  │  Request Preparation  1ms  ████                                                   │ │
│  │       └─ DNS Lookup      12ms  ████████████████                                   │ │
│  │       └─ TCP Connection  18ms  ████████████████████████████                     │ │
│  │       └─ TLS Handshake   45ms  ████████████████████████████████████████████████ │ │
│  │       └─ Request Sent     1ms  ████                                                 │ │
│  │       └─ Waiting (TTFB)  89ms  ████████████████████████████████████████████████ │ │
│  │       └─ Content Download 79ms  ████████████████████████████████████████████     │ │
│  │       └─ Response Processing 0ms ██                                                    │ │
│  │                                                                                   │ │
│  └───────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                                 │
│  ┌───────────────────────────────────────────────────────────────────────────────────┐ │
│  │  Waterfall View                                                                  │ │
│  ├───────────────────────────────────────────────────────────────────────────────────┤ │
│  │                                                                                   │ │
│  │  0ms              100ms            200ms            300ms           400ms       │ │
│  │  ├─────────────────┼─────────────────┼─────────────────┼─────────────────┤       │ │
│  │                                                                                   │ │
│  │  [▓▓▓]░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░      │ │
│  │  └─ DNS    └─ TCP     └─ TLS      └─ TTFB    └─ Download                       │ │
│  │                                                                                   │ │
│  │  Total: 245ms                                                                      │ │
│  │                                                                                   │ │
│  └───────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                                 │
│  ┌───────────────────────────────────────────────────────────────────────────────────┐ │
│  │  Connection Details                                                                │ │
│  ├───────────────────────────────────────────────────────────────────────────────────┤ │
│  │                                                                                   │ │
│  │  Remote Address:    104.21.56.1                                                 │ │
│  │  Protocol:          HTTP/2                                                       │ │
│  │  Connection:        Reused (HTTP/2 multiplexing)                                  │ │
│  │  SSL/TLS Version:   TLS 1.3                                                     │ │
│  │                                                                                   │ │
│  │  Security:                                                                        │ │
│  │  • TLS 1.3 handshake completed                                                   │ │
│  │  • Certificate valid                                                              │ │
│  │  • SNI: api.example.com                                                          │ │
│  │                                                                                   │ │
│  └───────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                                 │
│  ┌───────────────────────────────────────────────────────────────────────────────────┐ │
│  │  Timing Breakdown                                                                 │ │
│  ├───────────────────────────────────────────────────────────────────────────────────┤ │
│  │                                                                                   │ │
│  │  ┌───────────────────────────────────────────────────────────────────────────┐ │ │
│  │  │ Phase              │ Duration │ % of Total │ Info                       │ │ │
│  │  ├────────────────────┼──────────┼─────────────┼────────────────────────────┤ │ │
│  │  │ DNS Lookup         │  12ms    │     4.9%    │ Resolved in 1 query      │ │ │
│  │  │ TCP Connection     │  18ms    │     7.3%    │ New connection           │ │ │
│  │  │ TLS Handshake      │  45ms    │    18.4%    │ TLS 1.3                  │ │ │
│  │  │ Request Sent       │   1ms    │     0.4%    │ 245 bytes                │ │ │
│  │  │ Waiting (TTFB)     │  89ms    │    36.3%    │ Server processing        │ │ │
│  │  │ Content Download   │  79ms    │    32.2%    │ 1.2 KB                   │ │ │
│  │  │ Processing        │   1ms    │     0.4%    │ Client-side              │ │ │
│  │  └────────────────────┴──────────┴─────────────┴────────────────────────────┘ │ │
│  │                                                                                   │ │
│  │  Total: 245ms                                                                      │ │
│  │                                                                                   │ │
│  └───────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                                 │
│  [Compare with Previous Run]  [Export Timeline Data]                                     │
│                                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Các thành phần UI

### 4.1 Summary Bar
- **Status code**
- **Total duration**

### 4.2 Bar Chart View
- **Phases as bars:** Relative to total
- **Duration labels:** In ms
- **Percentage:** Of total time

### 4.3 Waterfall View
- **Horizontal timeline:** ms scale
- **Phases stacked:** Show sequence
- **Total line:** Sum of all

### 4.4 Connection Details
- **Remote address:** IP shown
- **Protocol:** HTTP version
- **Connection:** Reused or new
- **TLS info:** Version, security details

### 4.5 Timing Table
- **Phase:** Name
- **Duration:** In ms
- **% of Total:** Percentage
- **Info:** Additional details

---

## 5. Timing Phases

| Phase | Description | Browser Observable |
|-------|-------------|-------------------|
| DNS Lookup | Domain resolution | ✓ |
| TCP Connection | TCP handshake | ✓ |
| TLS Handshake | SSL/TLS negotiation | ✓ |
| Request Sent | Time to send request | ✓ |
| Waiting (TTFB) | Time to first byte | ✓ |
| Content Download | Response body download | ✓ |
| Processing | Client-side processing | ✓ |

---

## 6. Comparison View

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Timeline Comparison                                    [× Close]             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Run 1 (Aug 2, 2:30 PM)    vs    Run 2 (Aug 2, 3:15 PM)                   │
│  245ms                           312ms                            +27.3%  │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────────┐ │
│  │ Phase              │ Run 1   │ Run 2   │ Difference                   │ │
│  ├────────────────────┼─────────┼─────────┼───────────────────────────────┤ │
│  │ DNS Lookup         │   12ms  │   15ms  │  ⚠️ +3ms (+25%)            │ │
│  │ TCP Connection     │   18ms  │   22ms  │  ⚠️ +4ms (+22%)            │ │
│  │ TLS Handshake      │   45ms  │   48ms  │  ⚠️ +3ms (+7%)             │ │
│  │ Waiting (TTFB)     │   89ms  │  112ms  │  ⚠️ +23ms (+26%)           │ │
│  │ Content Download   │   79ms  │  113ms  │  ⚠️ +34ms (+43%)           │ │
│  │ Total              │  245ms  │  312ms  │  ⚠️ +67ms (+27%)           │ │
│  └────────────────────┴─────────┴─────────┴───────────────────────────────┘ │
│                                                                              │
│  ⚠️ Slower overall - TTFB and Content Download are main contributors        │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 7. Metrics Legend

| Icon | Meaning |
|------|---------|
| ✓ | Normal range |
| ⚠️ | Slower than expected |
| ✗ | Significantly slower |
| 🔍 | Needs investigation |

---

## 8. Related Screens

- [../request-builder/01-request-editor.md](../request-builder/01-request-editor.md) - Request editor

---

## 9. Acceptance Criteria

- [ ] Hiển thị tất cả timing phases
- [ ] Hiển thị bar chart với relative durations
- [ ] Hiển thị waterfall view
- [ ] Hiển thị connection details
- [ ] Hiển thị timing table
- [ ] Có thể compare với previous run
- [ ] Có thể export timeline data
- [ ] Slow phases được highlight
- [ ] Percentage of total hiển thị
