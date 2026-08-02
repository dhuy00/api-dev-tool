# Figma Make Prompt: Request History (REQ-002)

---

## Design System Reference

### Core Principles
```
- Monochrome system: {colors.primary} (black) and {colors.canvas} (white)
- Pill is the only button shape: {rounded.pill}
- figmaSans variable typeface at weights 320, 330, 340, 480
- 8px base spacing unit
- Timeline/list view with timestamps
```

### Colors to Use
| Token | Hex | Usage |
|-------|-----|-------|
| {colors.primary} | #000000 | Primary actions |
| {colors.canvas} | #FFFFFF | Background |
| {colors.ink} | #000000 | Text |
| {colors.hairline} | #E5E5E5 | Dividers |
| {colors.surface-soft} | #F5F5F5 | Hover, backgrounds |
| HTTP Status | 2xx=#34A853, 3xx=#3B82F6, 4xx=#F5A623, 5xx=#EF4444 | Status badges |

### Typography Scale
```
{typography.body} - 18px, 320 weight - Body text
{typography.body-sm} - 16px, 330 weight - List items, labels
{typography.caption} - 12px, 400 weight - Timestamps
```

### Components
```
method-badge: small pill, color-coded
status-badge: small pill, status color
icon-button: 32px circular
```

---

## Screen Requirements

### Purpose
View history of executed requests within a project or globally.

### Layout
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ Top Bar                                                                                 │
├──────────┬─────────────────────────────────────────────────────────────────────────────┤
│          │  ┌─────────────────────────────────────────────────────────────────────────┐│
│          │  │ Request History            [Clear All]  [Filter ▼]  [Search...]        ││
│ Project  │  └─────────────────────────────────────────────────────────────────────────┘│
│ ──────── │                                                                              │
│ > Auth ● │  ┌─────────────────────────────────────────────────────────────────────────┐│
│           │  │ Today                                                                        ││
│ History   │  ├─────────────────────────────────────────────────────────────────────────┤│
│ ──────── │  │ GET /auth/login                              200 OK     245ms     2:30 PM ││
│           │  │ Headers, Params, Body • user@example.com                     [•••] [▶] ││
│           │  ├─────────────────────────────────────────────────────────────────────────┤│
│           │  │ POST /auth/register                           201 Created  189ms     2:28 PM ││
│           │  │ Body • john@company.com                                    [•••] [▶] ││
│           │  ├─────────────────────────────────────────────────────────────────────────┤│
│           │  │ GET /users/:id                              401 Unauthorized  45ms     2:25 PM ││
│           │  │ Headers • Missing auth token                          [•••] [▶] ││
│           │  └─────────────────────────────────────────────────────────────────────────┘│
│           │                                                                              │
│           │  ┌─────────────────────────────────────────────────────────────────────────┐│
│           │  │ Yesterday                                                                   ││
│           │  ├─────────────────────────────────────────────────────────────────────────┤│
│           │  │ GET /orders                                   200 OK     312ms    Yesterday ││
│           │  │ Headers, Params • Project: Orders                            [•••] [▶] ││
│           │  ├─────────────────────────────────────────────────────────────────────────┤│
│           │  │ POST /orders                                   200 OK     298ms    Yesterday ││
│           │  │ Body • New order placed                                    [•••] [▶] ││
│           │  └─────────────────────────────────────────────────────────────────────────┘│
│           │                                                                              │
└──────────┴─────────────────────────────────────────────────────────────────────────────┘
```

### Components to Implement

#### 1. Page Header
- Title: "Request History"
- Clear All button
- Filter dropdown
- Search input

#### 2. Date Groups
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Today                                                                        │
├─────────────────────────────────────────────────────────────────────────┤
```
- Eyebrow typography
- Date or relative time (Today, Yesterday, Mon Aug 10)
- Sticky positioning

#### 3. History Item
```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│ GET /auth/login                              200 OK     245ms     2:30 PM          │
│ Headers, Params, Body • user@example.com                              [•••] [▶]   │
└──────────────────────────────────────────────────────────────────────────────────────┘
```
- Method badge: colored pill
- URL/path: body-sm, truncated if long
- Status badge: colored by response code
- Response time: body-sm
- Timestamp: caption, right-aligned
- Tags: Body, Headers, etc.
- Owner/project: body-sm, muted
- Actions: dropdown (•••), replay (▶)

#### 4. History Item States
```
Default: normal text
Success: green status badge
Client Error: orange/yellow status badge
Server Error: red status badge
Pending: gray, loading spinner
Failed: red status, error icon
```

#### 5. Status Badges
```
2xx: 200 OK         - green bg, white text
3xx: 301 Redirect   - blue bg, white text
4xx: 401 Unauthorized - orange bg, white text
4xx: 404 Not Found  - orange bg, white text
5xx: 500 Server Error - red bg, white text
```

#### 6. Actions Dropdown
```
┌───────────────────────┐
│ Replay Request       │
│ View Full Details    │
│ Copy as cURL         │
│ Copy URL             │
│ ─────────────────────│
│ Delete               │
└───────────────────────┘
```

#### 7. Filters
- By method: GET, POST, etc.
- By status: 2xx, 4xx, 5xx
- By project
- By date range
- By user

#### 8. Search
- Search by URL
- Search by response body
- Autocomplete

---

## Output Instructions

Create Figma frames for:
1. **History list** with grouped dates
2. **Filtered history** (by method/status)
3. **Empty state** (no history)
4. **History item expanded** (showing request details)

Proper naming: "REQ-002_RequestHistory_List", "REQ-002_RequestHistory_Filtered", etc.
