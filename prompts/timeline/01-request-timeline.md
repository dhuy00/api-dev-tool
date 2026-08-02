# Figma Make Prompt: Request Timeline (TIMELINE-001)

---

## Design System Reference

### Core Principles
```
- Monochrome system: {colors.primary} (black) and {colors.canvas} (white)
- Pill is the only button shape: {rounded.pill}
- figmaSans variable typeface at weights 320, 330, 340, 480
- 8px base spacing unit
- Timeline/sequence diagram layout
```

### Colors to Use
| Token | Hex | Usage |
|-------|-----|-------|
| {colors.primary} | #000000 | Primary actions |
| {colors.canvas} | #FFFFFF | Background |
| {colors.ink} | #000000 | Text |
| {colors.hairline} | #E5E5E5 | Dividers |
| {colors.surface-soft} | #F5F5F5 | Event backgrounds |

### Typography Scale
```
{typography.body-sm} - 16px, 330 weight - Labels, times
{typography.caption} - 12px, 400 weight - Timestamps
```

---

## Screen Requirements

### Purpose
Visualize the complete timeline of a request including DNS, TCP, TLS, and response phases.

### Layout
```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│  Request Timeline: GET /api/users                                           [Copy] [Share]        │
├─────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                   │
│  ┌───────────────────────────────────────────────────────────────────────────────────────────┐ │
│  │  Total Time: 456ms                                                                          │ │
│  │  ──────────────────────────────────────────────────────────────────────────────────────│ │
│  │                                                                                           │ │
│  │  DNS Lookup        ████████████████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  45ms │ │
│  │  ──────────────────────────────────────────────────────────────────────────────────────│ │
│  │                                                                                           │ │
│  │  TCP Connection    ██████████████████████████████████████████████████████████░░░░░  89ms │ │
│  │  ──────────────────────────────────────────────────────────────────────────────────────│ │
│  │                                                                                           │ │
│  │  TLS Handshake     ████████████████████████████████████████████████████████████████  123ms │ │
│  │  ──────────────────────────────────────────────────────────────────────────────────────│ │
│  │                                                                                           │ │
│  │  Request Sent      ██                                                                      2ms │ │
│  │  ──────────────────────────────────────────────────────────────────────────────────────│ │
│  │                                                                                           │ │
│  │  Waiting (TTFB)    ██████████████████████████████████████████████████░░░░░░░░░░░░░░  145ms │ │
│  │  ──────────────────────────────────────────────────────────────────────────────────────│ │
│  │                                                                                           │ │
│  │  Content Download  ████████████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  52ms │ │
│  │                                                                                           │ │
│  └───────────────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                                   │
│  ┌───────────────────────────────────────────────────────────────────────────────────────────┐ │
│  │  Waterfall Diagram                                                                         │ │
│  │  ──────────────────────────────────────────────────────────────────────────────────────│ │
│  │                                                                                           │ │
│  │  Client ─────────────────────────────────────────────────────────────────────────────── │ │
│  │    │                                                                                     │ │
│  │    │ DNS (45ms)                                                                          │ │
│  │    │                                                                                     │ │
│  │    │ TCP (89ms)                                                                          │ │
│  │    │                                                                                     │ │
│  │    │ TLS (123ms)                                                                        │ │
│  │    │                                                                                     │ │
│  │    │ Req (2ms)                                                                          │ │
│  │    │                                                                                     │ │
│  │    │██ Waiting (145ms)                                                                  │ │
│  │    │                                                                                     │ │
│  │    │██████ Download (52ms)                                                              │ │
│  │    │                                                                                     │ │
│  │    └───────────────────────────────────────────────────────────────────────────────→ Server │ │
│  │                                                                                           │ │
│  └───────────────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                                   │
│  ┌───────────────────────────────────────────────────────────────────────────────────────────┐ │
│  │  Request Details                                                                         │ │
│  ├───────────────────────────────────────────────────────────────────────────────────────────┤ │
│  │                                                                                           │ │
│  │  URL: https://api.example.com/api/users?page=1&limit=10                                 │ │
│  │  Method: GET                                                                             │ │
│  │  Status: 200 OK                                                                          │ │
│  │  Size: 4.2 KB                                                                           │ │
│  │                                                                                           │ │
│  └───────────────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                                   │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### Components to Implement

#### 1. Page Header
- Title: "Request Timeline: [method] [path]"
- Copy button
- Share button

#### 2. Total Time Display
```
┌───────────────────────────────────────────────────────────────────────────────────────────┐
│  Total Time: 456ms                                                                          │
└───────────────────────────────────────────────────────────────────────────────────────────┘
```
- Large number display
- Unit label

#### 3. Timeline Bars
```
DNS Lookup        ████████████████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  45ms
```
- Event name
- Horizontal bar (proportional width)
- Time in ms
- Bar segments in different colors

#### 4. Phase Legend
```
DNS: Domain resolution time
TCP: TCP connection establishment
TLS: TLS/SSL handshake
Request: Time to send request
Waiting: Time to first byte (TTFB)
Download: Content download time
```

#### 5. Waterfall Diagram
```
Client ───────────────────────────────────────────────────────────────────────────────
  │
  │ DNS (45ms)
  │
  │ TCP (89ms)
  │
  │ TLS (123ms)
  │
  │ Req (2ms)
  │
  │██ Waiting (145ms)
  │
  │██████ Download (52ms)
  │
  └───────────────────────────────────────────────────────────────────────────────→ Server
```
- Vertical timeline
- Horizontal bars per phase
- Time labels
- Connection lines

#### 6. Color Coding
```
DNS:      Blue
TCP:      Green
TLS:      Purple
Request:  Gray
Waiting:  Yellow/amber
Download: Teal/cyan
```

#### 7. Request Details Panel
```
URL: https://api.example.com/api/users?page=1&limit=10
Method: GET
Status: 200 OK
Size: 4.2 KB
```

---

## Output Instructions

Create Figma frames for:
1. **Timeline overview** with all phases
2. **Waterfall diagram**
3. **Request details**
4. **Slow request** (highlighted bottlenecks)

Proper naming: "TIMELINE-001_RequestTimeline_Overview", "TIMELINE-001_RequestTimeline_Waterfall", etc.
