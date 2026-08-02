# Figma Make Prompt: Project View (PRJ-002)

---

## Design System Reference

### Core Principles
```
- Monochrome system: {colors.primary} (black) and {colors.canvas} (white)
- Pill is the only button shape: {rounded.pill}
- figmaSans variable typeface at weights 320, 330, 340, 480
- 8px base spacing unit
- Tree views: indent levels with connecting lines
```

### Colors to Use
| Token | Hex | Usage |
|-------|-----|-------|
| {colors.primary} | #000000 | Selected, active |
| {colors.canvas} | #FFFFFF | Background |
| {colors.ink} | #000000 | Text |
| {colors.hairline} | #E5E5E5 | Dividers |
| {colors.surface-soft} | #F5F5F5 | Tree background |

### Typography Scale
```
{typography.headline} - 26px, 540 weight - Project name
{typography.body} - 18px, 320 weight - Body text
{typography.body-sm} - 16px, 330 weight - Tree items, labels
{typography.caption} - 12px, 400 weight - Timestamps
```

---

## Screen Requirements

### Purpose
Display all requests within a project in a hierarchical folder structure.

### Layout
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ Top Bar                                                                                 │
├──────────┬─────────────────────────────────────────────────────────────────────────────┤
│          │  ┌─────────────────────────────────────────────────────────────────────────┐│
│          │  │ Auth Project                    [Settings] [+ New Request ▼]             ││
│ Projects │  │ API authentication and user management                                   ││
│ ──────── │  └─────────────────────────────────────────────────────────────────────────┘│
│ > Auth ● │                                                                              │
│   📁 GET │  ┌─────────────────────────────────────┬───────────────────────────────┐  │
│   📁 POST│  │ PROJECT                              │                               │  │
│   📁 PUT │  │                                      │   [Select a request to view]  │  │
│          │  │ 📁 Authentication                    │                               │  │
│ > Users  │  │   📝 GET /auth/login                │                               │  │
│ > Orders │  │   📝 POST /auth/register             │                               │  │
│          │  │   📝 POST /auth/refresh               │                               │  │
│          │  │   📝 POST /auth/logout               │                               │  │
│          │  │                                      │                               │  │
│          │  │ 📁 User Management                   │                               │  │
│          │  │   📝 GET /users                      │                               │  │
│          │  │   📝 GET /users/:id                  │                               │  │
│          │  │   📝 POST /users                     │                               │  │
│          │  │   📝 PUT /users/:id                  │                               │  │
│          │  │   📝 DELETE /users/:id               │                               │  │
│          │  │                                      │                               │  │
│          │  │ [+ New Folder]                      │                               │  │
│          │  │                                      │                               │  │
│          │  └─────────────────────────────────────┴───────────────────────────────┘  │
│          │                                                                              │
│          │  ┌───────────────────────────────────────────────────────────────────────┐  │
│          │  │ Collections  │  Flow  │  History  │  Tests  │                        │  │
│          │  └───────────────────────────────────────────────────────────────────────┘  │
│          │                                                                              │
└──────────┴─────────────────────────────────────────────────────────────────────────────┘
```

### Components to Implement

#### 1. Project Header
- Project name: headline typography
- Project description: body-sm, muted
- Settings gear icon (button)
- New Request dropdown
- Margin-bottom: spacing.md (16px)

#### 2. Main Content Layout
- Two-column layout
- Left: Project tree (240-280px)
- Right: Request detail or placeholder

#### 3. Request Tree (Left Panel)
```
┌─────────────────────────────────────┐
│ PROJECT                             │
│                                     │
│ 📁 Authentication                   │
│   📝 GET /auth/login               │
│   📝 POST /auth/register            │
│   📝 POST /auth/refresh             │
│                                     │
│ 📁 User Management                  │
│   📝 GET /users                     │
│   📝 GET /users/:id                 │
│   📝 POST /users                    │
│                                     │
│ [+ New Folder]                     │
└─────────────────────────────────────┘
```
- Background: surface-soft
- Tree structure with indentation
- Folder icon + name
- Request icon + method badge + path
- Selected: bg=primary/10%, left border

#### 4. HTTP Method Badges
```
┌──────┐
│ GET  │  - green/blue tint
├──────┤
│ POST │  - yellow/amber tint
├──────┤
│ PUT  │  - blue tint
├──────┤
│ DEL  │  - red tint
├──────┤
│ PATCH│  - purple tint
└──────┘
```
- Small pill badges
- Color-coded by method
- 40-50px width

#### 5. Request Item
```
📝 [GET] /auth/login
```
- Icon: document/memo icon
- Method badge
- Path/URL
- Hover: bg highlight
- Selected: left border, bold

#### 6. Folder Item
```
📁 Authentication
```
- Folder icon
- Folder name
- Expand/collapse chevron
- Hover: bg highlight
- Selected: left border, bold

#### 7. Empty State (Right Panel)
```
┌─────────────────────────────────────────────────┐
│                                                 │
│                                                 │
│                                                 │
│           Select a request to view              │
│                                                 │
│                                                 │
└─────────────────────────────────────────────────┘
```
- Centered placeholder text
- Optional icon

#### 8. Bottom Tabs
```
[Collections] [Flow] [History] [Tests]
```
- Tab bar below main content
- Active tab: border-bottom primary
- Count badges optional

#### 9. New Request Dropdown
```
┌───────────────────────────┐
│ New Request              │
│ ──────────────────────── │
│ [GET] New GET Request   │
│ [POST] New POST Request │
│ [PUT] New PUT Request   │
│ [DEL] New DELETE Request│
│ ──────────────────────── │
│ [📁] New Folder         │
└───────────────────────────┘
```

---

## Output Instructions

Create Figma frames for:
1. **Project view** with tree and empty detail
2. **Project view** with request selected
3. **Tree item states** (default, hover, selected)
4. **New request dropdown**

Proper naming: "PRJ-002_ProjectView_Default", "PRJ-002_ProjectView_RequestSelected", etc.
