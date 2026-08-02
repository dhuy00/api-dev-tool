# Figma Make Prompt: Project List (PRJ-001)

---

## Design System Reference

### Core Principles
```
- Monochrome system: {colors.primary} (black) and {colors.canvas} (white)
- Pill is the only button shape: {rounded.pill}
- figmaSans variable typeface at weights 320, 330, 340, 450, 480, 540
- 8px base spacing unit
- Cards: bg=canvas, border=hairline, rounded.lg, padding=spacing.lg
```

### Colors to Use
| Token | Hex | Usage |
|-------|-----|-------|
| {colors.primary} | #000000 | Primary actions, selected |
| {colors.canvas} | #FFFFFF | Page background, cards |
| {colors.ink} | #000000 | Text |
| {colors.hairline} | #E5E5E5 | Card borders, dividers |
| {colors.surface-soft} | #F5F5F5 | Hover states, backgrounds |

### Typography Scale
```
{typography.headline} - 26px, 540 weight - Page title
{typography.card-title} - 24px, 700 weight - Card titles
{typography.body} - 18px, 320 weight - Body text
{typography.body-sm} - 16px, 330 weight - Meta text
{typography.caption} - 12px, 400 weight - Timestamps
{typography.eyebrow} - 18px, 400 weight, uppercase - Section headers
```

---

## Screen Requirements

### Purpose
Display projects within a workspace, allow creating new projects, filtering, and quick access to recent projects.

### Layout
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ Top Bar                                                                                 │
├──────────┬─────────────────────────────────────────────────────────────────────────────┤
│          │                                                                              │
│ Projects │  ┌───────────────────────────────────────────────────────────────────────┐  │
│ ──────── │  │ My Workspace                          [Search] [+ New Project]       │  │
│ > My API │  └───────────────────────────────────────────────────────────────────────┘  │
│   Auth   │                                                                              │
│   Users ●│  ┌───────────────────────────────────────────────────────────────────────┐  │
│   Orders │  │ RECENT                                                        [Clear] │  │
│          │  └───────────────────────────────────────────────────────────────────────┘  │
│          │  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐             │
│          │  │ 📁 Auth         │ │ 📁 Users        │ │ 📁 Orders       │             │
│          │  │ GET /users/:id  │ │ GET /users      │ │ POST /orders    │             │
│          │  │ Last: 2m ago   │ │ Last: 5m ago   │ │ Last: 1h ago   │             │
│          │  └─────────────────┘ └─────────────────┘ └─────────────────┘             │
│          │                                                                              │
│          │  ┌───────────────────────────────────────────────────────────────────────┐  │
│          │  │ ALL PROJECTS                            [Grid] [List] [Sort ▼]     │  │
│          │  └───────────────────────────────────────────────────────────────────────┘  │
│          │                                                                              │
│          │  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐             │
│          │  │ 📁 Auth         │ │ 📁 Users        │ │ 📁 Orders       │             │
│          │  │ API authentication│ │ User management │ │ Order management│             │
│          │  │ 12 requests    │ │ 8 requests     │ │ 15 requests    │             │
│          │  │ 👤 John         │ │ 👤 Jane         │ │ 👤 John         │             │
│          │  └─────────────────┘ └─────────────────┘ └─────────────────┘             │
│          │                                                                              │
│          │  ┌─────────────────┐ ┌─────────────────┐                                 │
│          │  │ + New Project   │ │                 │                                 │
│          │  │                 │ │                 │                                 │
│          │  └─────────────────┘ └─────────────────┘                                 │
│          │                                                                              │
└──────────┴─────────────────────────────────────────────────────────────────────────────┘
```

### Components to Implement

#### 1. Page Header
- Title: Workspace name
- Search: global search input
- New Project button: button-primary
- Margin-bottom: spacing.lg (24px)

#### 2. Section Header
- Recent projects section
- "RECENT" (eyebrow) with "Clear" link
- Margin-bottom: spacing.md (16px)

#### 3. Recent Projects (Compact Cards)
```
┌─────────────────┐
│ 📁 Auth        │
│ GET /users/:id │
│ Last: 2m ago  │
└─────────────────┘
```
- Smaller cards
- 3-4 visible
- Last request info

#### 4. All Projects Section Header
- Title: "ALL PROJECTS" (eyebrow)
- View toggle: [Grid] [List]
- Sort dropdown: Name, Recent, Request count
- Flex layout

#### 5. Project Card (Grid View)
```
┌─────────────────────────────────┐
│ 📁                             │
│                                 │
│ Auth                           │
│ API authentication             │
│                                 │
│ 12 requests                    │
│ ────────────────────────────── │
│ 👤 John Doe         Last: 2m │
└─────────────────────────────────┘
```
- Card: bg=canvas, border=hairline, rounded.lg
- Icon: large folder or project icon
- Title: card-title typography
- Description: body-sm, muted
- Request count
- Owner avatar + last activity
- Hover: border=primary

#### 6. Project Card (List View)
```
┌────────────────────────────────────────────────────────────────────────────────┐
│ 📁 │ Auth             │ API authentication       │ 12 requests │ John │ 2m │
└────────────────────────────────────────────────────────────────────────────────┘
```
- Table-like list
- Columns: Icon, Name, Description, Requests, Owner, Last
- Row hover: bg=surface-soft
- Click to open

#### 7. Create Project Card
```
┌─────────────────────────────────┐
│                                 │
│         +                       │
│                                 │
│   New Project                  │
│                                 │
└─────────────────────────────────┘
```
- Dashed border
- Plus icon
- Centered text
- Hover: solid border

#### 8. Create Project Modal
```
┌─────────────────────────────────────────────────┐
│ Create New Project                               │
│ ────────────────────────────────────────────────│
│                                                 │
│ Project Name                                    │
│ ┌─────────────────────────────────────────────┐ │
│ │                                             │ │
│ └─────────────────────────────────────────────┘ │
│                                                 │
│ Description                                     │
│ ┌─────────────────────────────────────────────┐ │
│ │                                             │ │
│ └─────────────────────────────────────────────┘ │
│                                                 │
│ Icon                                           │
│ [📁] [📄] [🔐] [💻] [📊] [🚀]                 │
│                                                 │
│ ┌─────────────────────────────────────────────┐ │
│ │ Cancel                    [Create Project]   │ │
│ └─────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────┘
```

---

## Output Instructions

Create Figma frames for:
1. **Grid view** with all projects
2. **List view** with all projects
3. **Recent projects** section
4. **Create project modal**

Proper naming: "PRJ-001_ProjectList_Grid", "PRJ-001_ProjectList_List", etc.
