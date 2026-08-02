# Shared Components - Navigation Layout

## 1. Tổng quan

Document này mô tả layout chung và navigation patterns cho toàn bộ ứng dụng.

---

## 2. Main Layout Structure

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              Top Bar                                          │
│  [Logo]  [Breadcrumb/Navigation]           [Env] [Search] [Notif] [User]  │
├──────────────┬──────────────────────────────────────────────────────────────┤
│              │                                                                     │
│   Sidebar    │                      Main Content                               │
│              │                                                                     │
│  (Collapsible│                                                                     │
│   200-280px) │                                                                     │
│              │                                                                     │
│  - Workspaces│                                                                     │
│  - Projects  │                                                                     │
│  - Collections│                                                                     │
│  - Flows     │                                                                     │
│              │                                                                     │
│              │                                                                     │
├──────────────┴──────────────────────────────────────────────────────────────┤
│                              Status Bar (optional)                            │
│  [Sync status]  [Connection]  [Version]                                      │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Sidebar Navigation

### 3.1 Sidebar Structure
```
┌──────────────────────────┐
│                          │
│  ≡ All Workspaces        │
│                          │
│  WORKSPACES              │
│  ──────────              │
│  📁 Personal             │
│    ├─ Project 1          │
│    └─ Project 2          │
│  👥 Team                 │
│    ├─ Project A          │
│    └─ Project B          │
│                          │
│  ────────────────────    │
│  [+ New Workspace]       │
│                          │
│  ────────────────────    │
│  ⚙️ Settings             │
│  📖 Documentation       │
│  ❓ Help                 │
│                          │
└──────────────────────────┘
```

### 3.2 Sidebar Item States
| State | Visual |
|-------|--------|
| Default | Normal text |
| Hover | Background highlight |
| Active/Selected | Left border + background |
| Expanded | Chevron down |
| Collapsed | Chevron right |
| Disabled | Muted text |

### 3.3 Sidebar Widths
- Collapsed: 48px (icons only)
- Expanded: 240px (default)
- Wide: 280px (optional)

---

## 4. Top Bar

### 4.1 Standard Top Bar
```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ≡  [API Forge Logo]                    [🌐 Dev ▼] [🔍] [🔔] [👤 John ▼] │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Contextual Top Bar (Inside Project)
```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ← API Team / Authentication API / POST /auth/login                        │
│  [Breadcrumb]           [🌐 Dev ▼] [Save] [Send ▶]  [👤]                  │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 5. User Menu Dropdown

```
┌─────────────────────────────────────┐
│                                     │
│  👤 John Doe                         │
│     john.doe@company.com             │
│  ────────────────────────────────── │
│  ⚙️ Settings                        │
│  🔑 API Keys                        │
│  ❓ Help & Support                  │
│  📖 Documentation                   │
│  ────────────────────────────────── │
│  🌙 Dark Mode                       │
│  ────────────────────────────────── │
│  🚪 Sign Out                        │
│                                     │
└─────────────────────────────────────┘
```

---

## 6. Keyboard Shortcuts Reference

| Category | Shortcut | Action |
|----------|---------|--------|
| **Global** | Cmd/Ctrl + K | Open search |
| **Global** | Cmd/Ctrl + , | Open settings |
| **Global** | Cmd/Ctrl + / | Show shortcuts |
| **Navigation** | Cmd/Ctrl + B | Toggle sidebar |
| **Navigation** | Cmd/Ctrl + P | Quick switch project |
| **Request** | Cmd/Ctrl + N | New request |
| **Request** | Cmd/Ctrl + Enter | Send request |
| **Request** | Cmd/Ctrl + S | Save request |
| **Tabs** | Cmd/Ctrl + W | Close tab |
| **Tabs** | Cmd/Ctrl + Tab | Next tab |
| **Edit** | Cmd/Ctrl + Z | Undo |
| **Edit** | Cmd/Ctrl + Shift + Z | Redo |
| **Edit** | Cmd/Ctrl + D | Duplicate |

---

## 7. Breadcrumb Pattern

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Workspace Name / Project Name / Collection Name / Request Name            │
│  ──────────────────────────────────────────────────────────────────────────  │
│  ↑ clickable          ↑ clickable      ↑ clickable      ↑ current (not clickable) │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 8. Tab Bar Pattern

### 8.1 Request Tabs
```
┌─────────────────────────────────────────────────────────────────────────────┐
│  [×] POST /auth/login  │  [×] GET /users  │  [×] PUT /users/:id  │ [+]  │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 8.2 Tab States
| State | Visual |
|-------|--------|
| Default | Normal text, underline when active |
| Active | Bold text, solid underline |
| Hover | Background highlight |
| Unsaved | Dot indicator before name |

---

## 9. Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Desktop | > 1024px | Full sidebar + content |
| Tablet | 768px - 1024px | Collapsible sidebar |
| Mobile | < 768px | Hamburger menu, bottom nav |

### Mobile Bottom Navigation
```
┌─────────────────────────────────────┐
│                                     │
│         Main Content Area           │
│                                     │
├─────────┬─────────┬─────────┬───────┤
│  Home   │ Requests│ Search │ Profile│
│   🏠    │    📁   │   🔍   │   👤   │
└─────────┴─────────┴─────────┴───────┘
```

---

## 10. Modal/Dialog Patterns

### 10.1 Standard Modal
```
┌─────────────────────────────────────────┐
│  Title                              [×] │
│  ────────────────────────────────────── │
│                                         │
│  Content                                │
│                                         │
│                                         │
│                                         │
│  ─────────────────────────────────────  │
│                    [Cancel]  [Primary] │
└─────────────────────────────────────────┘
```

### 10.2 Confirmation Dialog
```
┌─────────────────────────────────────────┐
│                                         │
│           ⚠️  Warning                   │
│                                         │
│  Are you sure you want to delete this?  │
│                                         │
│  This action cannot be undone.          │
│                                         │
│                                         │
│        [Cancel]  [Delete]              │
│                 (red)                   │
└─────────────────────────────────────────┘
```

### 10.3 Toast Notifications
```
┌─────────────────────────────────────────┐
│  ✓ Success! Request sent          [×]  │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  ✗ Error: Network timeout         [×]  │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  ℹ️ Request saved                 [×]  │
└─────────────────────────────────────────┘
```

---

## 11. Acceptance Criteria

- [ ] Consistent layout across all screens
- [ ] Sidebar collapsible and responsive
- [ ] Breadcrumbs work correctly
- [ ] Tab management works
- [ ] Modals centered and dismissable
- [ ] Toast notifications appear correctly
- [ ] Keyboard shortcuts work globally
- [ ] Mobile layout adapts properly
