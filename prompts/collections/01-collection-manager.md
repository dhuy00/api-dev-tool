# Figma Make Prompt: Collection Manager (COL-001)

---

## Design System Reference

### Core Principles
```
- Monochrome system: {colors.primary} (black) and {colors.canvas} (white)
- Pill is the only button shape: {rounded.pill}
- figmaSans variable typeface at weights 320, 330, 340, 480
- 8px base spacing unit
- Tree view with drag-and-drop indicators
```

### Colors to Use
| Token | Hex | Usage |
|-------|-----|-------|
| {colors.primary} | #000000 | Primary actions |
| {colors.canvas} | #FFFFFF | Background |
| {colors.ink} | #000000 | Text |
| {colors.hairline} | #E5E5E5 | Dividers |
| {colors.surface-soft} | #F5F5F5 | Hover, backgrounds |

### Typography Scale
```
{typography.headline} - 26px, 540 weight - Page title
{typography.body} - 18px, 320 weight - Body text
{typography.body-sm} - 16px, 330 weight - List items
{typography.caption} - 12px, 400 weight - Timestamps
```

---

## Screen Requirements

### Purpose
Organize and manage collections of requests, folders, and documentation.

### Layout
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ Collections                                           [+ New Collection]              │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│  ┌─────────────────────────────────────────────────────────────────────────────────┐  │
│  │ 🔍 Search collections...                                                        │  │
│  └─────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                        │
│  ┌─────────────────────────────────────────────────────────────────────────────────┐  │
│  │ 📁 E-commerce API                       12 requests  3 folders   Updated 2h ago │  │
│  │    Complete API for online store                                              │  │
│  ├─────────────────────────────────────────────────────────────────────────────────┤  │
│  │    📁 Products                      📁 Orders                      📁 Users   │  │
│  │    │  GET /products                  │  GET /orders                │  GET /users │  │
│  │    │  GET /products/:id              │  POST /orders               │  GET /users/:id │  │
│  │    │  POST /products                 │  GET /orders/:id            │  POST /users │  │
│  │    │  PUT /products/:id              │  PUT /orders/:id           │            │  │
│  │    │                                 │  DELETE /orders/:id        │            │  │
│  │                                      │                              │            │  │
│  │    [+ Add Request]                  [+ Add Request]                [+ Add Request]│  │
│  └─────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                        │
│  ┌─────────────────────────────────────────────────────────────────────────────────┐  │
│  │ 📁 Authentication API                  4 requests   0 folders   Updated 1d ago │  │
│  │    Login, register, password reset                                          │  │
│  ├─────────────────────────────────────────────────────────────────────────────────┤  │
│  │                                                                                 │  │
│  │  📝 GET /auth/login                                                            │  │
│  │  📝 POST /auth/register                                                        │  │
│  │  📝 POST /auth/refresh                                                         │  │
│  │  📝 POST /auth/logout                                                          │  │
│  │                                                                                 │  │
│  └─────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                        │
│  ┌─────────────────────────────────────────────────────────────────────────────────┐  │
│  │ + New Collection                                                                │  │
│  └─────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Components to Implement

#### 1. Page Header
- Title: "Collections"
- New Collection button: button-primary

#### 2. Search Bar
```
┌─────────────────────────────────────────────────────────────┐
│ 🔍 Search collections...                                    │
└─────────────────────────────────────────────────────────────┘
```
- Search input with icon
- Filter results as typing

#### 3. Collection Card
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ 📁 E-commerce API                       12 requests  3 folders   Updated 2h ago │
│    Complete API for online store                                             │
├────────────────────────────────────────────────────────────────────────────────────────┤
│    📁 Products                      📁 Orders                      📁 Users           │
│    │                               │                              │                  │
│    │                               │                              │                  │
└────────────────────────────────────────────────────────────────────────────────────────┘
```
- Card: bg=canvas, border=hairline, rounded.lg
- Icon: folder emoji or icon
- Title: card-title typography
- Stats: request count, folder count, last updated
- Description: body-sm, muted
- Nested folders in columns

#### 4. Collection Card (List View)
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ 📁 │ E-commerce API   │ 12 requests │ John │ 2h ago │ [•••]                         │
└────────────────────────────────────────────────────────────────────────────────────────┘
```
- Table-like list
- Columns: Icon, Name, Requests, Owner, Last Updated, Actions

#### 5. Folder Item
```
┌──────────────────────────────────────────────────────────────┐
│ 📁 Products                                                  │
│                                                              │
│    📝 GET /products                                           │
│    📝 GET /products/:id                                       │
│    📝 POST /products                                          │
│    📝 PUT /products/:id                                      │
│                                                              │
│    [+ Add Request]                                           │
└──────────────────────────────────────────────────────────────┘
```
- Expandable/collapsible
- Nested requests with method badges

#### 6. Request Item in Folder
```
📝 GET /products
```
- Document icon
- Method badge
- Path
- Click to open

#### 7. Add Request Button
```
[+ Add Request]
```
- Small text button
- Or icon button with tooltip

#### 8. Create Collection Modal
```
┌─────────────────────────────────────────────────────────────┐
│ Create New Collection                                        │
│ ────────────────────────────────────────────────────────────│
│                                                              │
│ Collection Name                                              │
│ ┌─────────────────────────────────────────────────────────┐  │
│ │                                                             │  │
│ └─────────────────────────────────────────────────────────┘  │
│                                                              │
│ Description                                                  │
│ ┌─────────────────────────────────────────────────────────┐  │
│ │                                                             │  │
│ └─────────────────────────────────────────────────────────┘  │
│                                                              │
│ Initial Folder (optional)                                    │
│ ┌─────────────────────────────────────────────────────────┐  │
│ │                                                             │  │
│ └─────────────────────────────────────────────────────────┘  │
│                                                              │
│ ┌─────────────────────────────────────────────────────────┐  │
│ │ Cancel                           [Create Collection]     │  │
│ └─────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## Output Instructions

Create Figma frames for:
1. **Grid view** with collection cards
2. **List view** with collection rows
3. **Collection card** expanded with folders
4. **Create collection modal**

Proper naming: "COL-001_CollectionManager_Grid", "COL-001_CollectionManager_Create", etc.
