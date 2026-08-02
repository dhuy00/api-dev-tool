# Figma Make Prompt: Performance Dashboard (PERF-001)

---

## Design System Reference

### Core Principles
```
- Monochrome system: {colors.primary} (black) and {colors.canvas} (white)
- Pill is the only button shape: {rounded.pill}
- figmaSans variable typeface at weights 320, 330, 340, 480
- 8px base spacing unit
- Charts/graphs use subtle colors
```

### Colors to Use
| Token | Hex | Usage |
|-------|-----|-------|
| {colors.primary} | #000000 | Primary, chart lines |
| {colors.canvas} | #FFFFFF | Background |
| {colors.ink} | #000000 | Text |
| {colors.hairline} | #E5E5E5 | Dividers, grid lines |
| {colors.surface-soft} | #F5F5F5 | Card backgrounds |
| Success | #34A853 | Good metrics |
| Warning | #F5A623 | Warning metrics |
| Error | #EF4444 | Poor metrics |

### Typography Scale
```
{typography.headline} - 26px, 540 weight - Page title
{typography.card-title} - 24px, 700 weight - Card titles
{typography.body} - 18px, 320 weight - Body text
{typography.body-sm} - 16px, 330 weight - Labels, values
{typography.caption} - 12px, 400 weight - Axis labels
```

---

## Screen Requirements

### Purpose
Monitor API performance metrics - response times, error rates, request volumes.

### Layout
```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│  Performance Dashboard                    [Time Range: Last 7 days ▼]  [Export] [Refresh]        │
├─────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                   │
│  ┌───────────────────────────────────────────────────────────────────────────────────────────┐ │
│  │  Key Metrics                                                                             │ │
│  ├───────────────────────────────────────────────────────────────────────────────────────────┤ │
│  │                                                                                           │ │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                │ │
│  │  │ Avg Response │  │ Error Rate   │  │ Requests/day │  │ P95 Latency │                │ │
│  │  │    234ms    │  │    2.3%      │  │   12,456     │  │    450ms    │                │ │
│  │  │    ↓ 12%    │  │    ↑ 0.5%   │  │    ↓ 5%     │  │    ↓ 8%     │                │ │
│  │  └──────────────┘  └──────────────┐  └──────────────┘  └──────────────┘                │ │
│  │                                                                                           │ │
│  └───────────────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                                   │
│  ┌───────────────────────────────────────────────────────────────────────────────────────────┐ │
│  │  Response Time Over Time                                                                 │ │
│  │  ──────────────────────────────────────────────────────────────────────────────────────│ │
│  │                                                                                           │ │
│  │       500ms ─┤                                                              ┃            │ │
│  │              │                                                         ███ ███            │ │
│  │       400ms ─┤                                                    ███ ███ ███ ███ ███      │ │
│  │              │                                               ███ ███ ███ ███ ███ ███ ███   │ │
│  │       300ms ─┤                                          ███ ███ ███ ███ ███ ███ ███ ███   │ │
│  │              │  ███ ███ ███ ███ ███ ███ ███ ███ ███ ███ ███ ███ ███ ███ ███ ███ ███   │ │
│  │       200ms ─┤──█──█──█──█──█──█──█──█──█──█──█──█──█──█──█──█──█──█──█──█──█──█──█──    │ │
│  │              │                                                              ┃            │ │
│  │       100ms ─┤                                                              ┃            │ │
│  │              └─────────────────────────────────────────────────────────────────────────── │ │
│  │                   Mon    Tue    Wed    Thu    Fri    Sat    Sun                                 │ │
│  │                                                                                           │ │
│  │  Avg: 234ms  P50: 189ms  P95: 450ms  P99: 890ms                                          │ │
│  │                                                                                           │ │
│  └───────────────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                                   │
│  ┌─────────────────────────────────┬─────────────────────────────────────────────────────┐ │
│  │  Slowest Endpoints              │  Error Breakdown                                    │ │
│  ├─────────────────────────────────┤─────────────────────────────────────────────────────┤ │
│  │                                   │                                                     │ │
│  │  1. POST /reports/generate  890ms │   404 Not Found                      ████  45%    │ │
│  │  2. GET /analytics       720ms │   500 Server Error           ██       25%            │ │
│  │  3. POST /export/csv     650ms │   401 Unauthorized          █         15%            │ │
│  │  4. PUT /users/bulk      580ms │   403 Forbidden             █         10%            │ │
│  │  5. DELETE /cache        520ms │   429 Rate Limited         █          5%            │ │
│  │                                   │                                                     │ │
│  └─────────────────────────────────┴─────────────────────────────────────────────────────┘ │
│                                                                                                   │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### Components to Implement

#### 1. Page Header
- Title: "Performance Dashboard"
- Time range selector: dropdown (Last 24h, 7 days, 30 days, 90 days)
- Export button: secondary
- Refresh button: secondary with icon

#### 2. Metric Cards (Row)
```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ Avg Response  │  │ Error Rate   │  │ Requests/day │  │ P95 Latency  │
│    234ms     │  │    2.3%      │  │   12,456     │  │    450ms     │
│    ↓ 12%     │  │    ↑ 0.5%   │  │    ↓ 5%     │  │    ↓ 8%      │
└──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘
```
- 4 cards in a row
- Large metric value
- Change indicator: ↓ green (improved), ↑ red (worsened)
- Hover: subtle shadow or border

#### 3. Chart Card
```
┌───────────────────────────────────────────────────────────────────────────────────────────┐
│  Response Time Over Time                                                                 │
│  ──────────────────────────────────────────────────────────────────────────────────────│ │
│                                                                                          │
│  Line chart or bar chart                                                                  │
│  X-axis: dates/times                                                                     │
│  Y-axis: response time in ms                                                              │
│                                                                                          │
│  Legend below chart                                                                       │
│                                                                                          │
└───────────────────────────────────────────────────────────────────────────────────────────┘
```
- Card with title
- Chart area
- Legend
- Metric summary below

#### 4. Two-Column Section
```
┌─────────────────────────────────┬─────────────────────────────────────────────────────┐
│  Slowest Endpoints              │  Error Breakdown                                    │
├─────────────────────────────────┤─────────────────────────────────────────────────────┤
│                                   │                                                     │
│  1. POST /reports/generate 890ms│   404 Not Found                      ████  45%    │
│  2. GET /analytics       720ms │   500 Server Error           ██       25%            │
│  3. POST /export/csv     650ms │   401 Unauthorized          █         15%            │
│  ...                            │   ...                                               │
└─────────────────────────────────┴─────────────────────────────────────────────────────┘
```

#### 5. Slowest Endpoints List
```
1. POST /reports/generate  890ms
2. GET /analytics          720ms
```
- Ranked list
- Method badge
- Path
- Response time
- Bar visualization optional

#### 6. Error Breakdown (Horizontal Bar)
```
404 Not Found                      ████  45%
500 Server Error           ██       25%
401 Unauthorized          █         15%
403 Forbidden             █         10%
429 Rate Limited         █          5%
```
- Status code label
- Horizontal bar
- Percentage
- Color-coded by status type

### Color Coding for Metrics
```
Good (green):   < 200ms, < 1% error rate
Warning (amber): 200-500ms, 1-5% error rate
Poor (red):     > 500ms, > 5% error rate
```

---

## Output Instructions

Create Figma frames for:
1. **Dashboard overview** with all widgets
2. **Individual metric card** variations
3. **Chart detail** (expanded)
4. **Time range selector**

Proper naming: "PERF-001_PerformanceDashboard_Overview", "PERF-001_PerformanceDashboard_MetricCard", etc.
