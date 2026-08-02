# Màn hình Project List

## 1. Tổng quan

- **Mã màn hình:** PRJ-001
- **Tên màn hình:** Project List
- **Loại:** Content Screen
- **Vị trí:** Workspace → Projects tab
- **Yêu cầu:** Member của workspace

---

## 2. Mục đích

Hiển thị danh sách các project trong workspace, cho phép tạo mới, mở, quản lý project.

---

## 3. Layout

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  [Workspace: API Team ▼]                            👤 John Doe ▼       │
│  ─────────────────────────────────────────────────────────────────────── │
│                                                                         │
│  Projects (12)                                      [+ New Project]     │
│  ─────────────────────────────────────────────────────────────────────── │
│                                                                         │
│  🔍 Search projects...                    [All ▼] [Recent ▼] [🔄]        │
│                                                                         │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │ 📁 Authentication API                          Updated 2h ago     │ │
│  │    REST API for user authentication and session management        │ │
│  │    8 requests · 3 environments · Admin                           │ │
│  │    👤 John Doe                                                    │ │
│  ├────────────────────────────────────────────────────────────────────┤ │
│  │ 📁 User Management                              Updated 1d ago     │ │
│  │    User profiles, roles, and permissions API                       │ │
│  │    15 requests · 2 environments · Editor                          │ │
│  │    👤 Jane Smith                                                  │ │
│  ├────────────────────────────────────────────────────────────────────┤ │
│  │ 📁 Order Processing                             Updated 3d ago     │ │
│  │    Order creation, tracking, and fulfillment                       │ │
│  │    23 requests · 4 environments · Editor                          │ │
│  │    👤 Bob Wilson                                                  │ │
│  ├────────────────────────────────────────────────────────────────────┤ │
│  │ 📁 Payment Gateway                               Updated 1w ago    │ │
│  │    Payment processing and transaction APIs                        │ │
│  │    12 requests · 2 environments · Viewer                         │ │
│  │    👤 Alice Brown                                                 │ │
│  ├────────────────────────────────────────────────────────────────────┤ │
│  │ 📁 Analytics API                                  Updated 2w ago   │ │
│  │    Usage metrics and reporting endpoints                          │ │
│  │    6 requests · 1 environment · Admin                            │ │
│  │    👤 John Doe                                                    │ │
│  └────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Các thành phần UI

### 4.1 Header
- **Workspace selector:** Dropdown để switch workspace
- **User menu:** Avatar, name, dropdown

### 4.2 Toolbar
- **Title:** "Projects (X)"
- **New button:** "+ New Project" - Primary button
- **Search:** Text input để filter projects
- **Filter dropdown:** All, Recent, By owner
- **Sort:** Recent activity, Name, Created date

### 4.3 Project Cards
- **Icon:** Folder icon
- **Name:** Project name (clickable)
- **Description:** Brief description
- **Stats:** X requests, X environments
- **Role badge:** Admin/Editor/Viewer
- **Owner:** Avatar + name
- **Updated:** "Updated X time ago"
- **Actions (hover/overflow):** Settings, Duplicate, Archive, Delete

---

## 5. Luồng chức năng

### 5.1 Xem Projects

```
[User navigates to Projects]
        ↓
    ┌───────────────────┐
    │ API GET           │
    │ /workspaces/:id/  │
    │ projects          │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Load project list  │
    │ with metadata      │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Display cards      │
    │ sorted by recent   │
    └───────────────────┘
```

### 5.2 Tạo Project

```
[User clicks "+ New Project"]
        ↓
    ┌───────────────────┐
    │ Open create modal   │
    └───────────────────┘
        ↓
[User enters name, description]
        ↓
[User clicks "Create"]
        ↓
    ┌───────────────────┐
    │ API POST          │
    │ /projects         │
    │ { name, desc,     │
    │   workspaceId }   │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Create project     │
    │ with default       │
    │ collection         │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Open project       │
    └───────────────────┘
```

### 5.3 Mở Project

```
[User clicks project card]
        ↓
    ┌───────────────────┐
    │ Navigate to        │
    │ /projects/:id     │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Load project view  │
    │ with collections, │
    │ requests, envs    │
    └───────────────────┘
```

### 5.4 Search/Filter

```
[User types in search]
        ↓
    ┌───────────────────┐
    │ Filter projects     │
    │ by name/desc       │
    │ (client-side or    │
    │ server-side)       │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Update display     │
    └───────────────────┘
```

---

## 6. Project Card States

| State | Visual |
|-------|--------|
| Default | White background |
| Hover | Slight elevation, border highlight |
| Selected | Blue left border |
| Archived | Muted colors, "Archived" badge |

---

## 7. Create Project Modal

```
┌─────────────────────────────────────────┐
│                                          │
│  Create New Project                  [X] │
│  ────────────────────────────────────── │
│                                          │
│  Project Name *                           │
│  ┌─────────────────────────────────────┐│
│  │ My New API                          ││
│  └─────────────────────────────────────┘│
│                                          │
│  Description                             │
│  ┌─────────────────────────────────────┐│
│  │ API for managing...                 ││
│  │                                       ││
│  └─────────────────────────────────────┘│
│                                          │
│  ┌─────────────────────────────────────┐│
│  │           CREATE PROJECT             ││
│  └─────────────────────────────────────┘│
│                                          │
│        [Cancel]                          │
│                                          │
└─────────────────────────────────────────┘
```

---

## 8. Project Actions (Overflow Menu)

```
┌───────────────────────────────────────┐
│                                       │
│  ⚙️ Settings                          │
├───────────────────────────────────────┤
│  📋 Duplicate                         │
├───────────────────────────────────────┤
│  📁 Open in new tab                   │
├───────────────────────────────────────┤
│  ─────────────────────────────────────│
│  🗄️ Archive                           │
├───────────────────────────────────────┤
│  🗑️ Delete                           │
└───────────────────────────────────────┘
```

---

## 9. Validation Rules

| Field | Rules |
|-------|-------|
| Name | Required, 1-100 chars, unique in workspace |
| Description | Optional, max 500 chars |

---

## 10. Error Handling

| Error | Message | Action |
|-------|---------|--------|
| Name required | "Project name is required" | Inline error |
| Name exists | "A project with this name exists" | Inline error |
| Load failed | "Unable to load projects" | Retry button |
| Create failed | "Unable to create project" | Keep modal open |

---

## 11. Responsive Behavior

### Desktop
- 1-2 column grid
- Full sidebar visible

### Tablet
- Single column
- Collapsible sidebar

### Mobile
- List view
- Bottom navigation

---

## 12. Related Screens

- [02-project-view.md](02-project-view.md) - Main project view
- [03-project-settings.md](03-project-settings.md) - Project settings

---

## 13. Acceptance Criteria

- [ ] Hiển thị tất cả projects trong workspace
- [ ] Hiển thị stats (requests, environments)
- [ ] Hiển thị role badge của user
- [ ] Hiển thị owner avatar
- [ ] Có thể search projects
- [ ] Có thể filter/sort projects
- [ ] Có thể tạo project mới
- [ ] Có thể mở project
- [ ] Có thể duplicate, archive, delete (với role phù hợp)
- [ ] Responsive trên mobile/tablet/desktop
