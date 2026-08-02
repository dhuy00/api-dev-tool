# Màn hình Workspace List

## 1. Tổng quan

- **Mã màn hình:** WS-001
- **Tên màn hình:** Workspace List / Workspaces
- **Loại:** Navigation Screen
- **Vị trí:** Sidebar → Workspaces section
- **Yêu cầu:** User phải đăng nhập

---

## 2. Mục đích

Hiển thị danh sách tất cả workspaces mà user có quyền truy cập (personal + team workspaces), cho phép tạo mới, chọn, quản lý workspace.

---

## 3. Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│ ≡  [Logo] API Forge                    🔔  👤 John Doe ▼            │
├─────────────┬───────────────────────────────────────────────────────┤
│             │                                                       │
│ ≡ All       │   ┌───────────────────────────────────────────────┐  │
│             │   │  WORKSPACES                    [+ New Workspace] │  │
│ WORKSPACES  │   └───────────────────────────────────────────────┘  │
│ ─────────── │                                                       │
│ > Personal  │   ┌───────────────────────────────────────────────┐  │
│   ○ My API  │   │  PERSONAL WORKSPACES                           │  │
│   ○ Test    │   └───────────────────────────────────────────────┘  │
│             │                                                       │
│ > Team      │   ┌───────────────────────────────────────────────┐  │
│   ○ Acme    │   │  + Create Personal Workspace                  │  │
│   ○ Startup │   │  Icon: 📁  Name: [____________]              │  │
│             │   │  Description: [__________________________]     │  │
│ PROJECTS    │   │                    [Cancel] [Create]         │  │
│ ─────────── │   └───────────────────────────────────────────────┘  │
│ > My API    │                                                       │
│   📁 Auth   │   ┌─────────────────┐ ┌─────────────────┐          │
│   📁 Users  │   │ 📁 My API       │ │ 📁 Test API     │          │
│   📁 Orders │   │ 12 projects    │ │ 5 projects     │          │
│             │   │ 👤 Owner        │ │ 👤 Owner        │          │
│ COLLECTIONS│   │ Last: 2h ago   │ │ Last: 1d ago   │          │
│ ─────────── │   └─────────────────┘ └─────────────────┘          │
│ > My API    │                                                       │
│   📂 Auth  │   ┌───────────────────────────────────────────────┐  │
│   📂 Users │   │  TEAM WORKSPACES                               │  │
│             │   └───────────────────────────────────────────────┘  │
│             │                                                       │
│             │   ┌─────────────────┐ ┌─────────────────┐          │
│             │   │ 👥 Acme Corp   │ │ 👥 Startup Inc │          │
│             │   │ 23 projects   │ │ 8 projects     │          │
│             │   │ 👑 Owner       │ │ ⚙️ Admin       │          │
│             │   │ Last: 5m ago  │ │ Last: 3h ago  │          │
│             │   └─────────────────┘ └─────────────────┘          │
│             │                                                       │
│             │   ┌───────────────────────────────────────────────┐  │
│             │   │  + Create Team Workspace                      │  │
│             │   │  Icon: 👥  Name: [____________]              │  │
│             │   │  [Cancel] [Create]                            │  │
│             │   └───────────────────────────────────────────────┘  │
└─────────────┴───────────────────────────────────────────────────────┘
```

---

## 4. Các thành phần UI

### 4.1 Header Bar
- **Logo:** API Forge
- **User menu:** Avatar, name, dropdown (Settings, Log out)

### 4.2 Sidebar
- **All:** View all projects
- **Workspaces section:** Expandable/collapsible
  - Personal workspaces
  - Team workspaces
- **Projects section:** Projects trong workspace hiện tại
- **Collections section:** Quick access to collections

### 4.3 Main Content Area

#### Section Headers
- "PERSONAL WORKSPACES"
- "TEAM WORKSPACES"

#### Workspace Cards
- **Icon:** Folder icon hoặc team icon
- **Name:** Tên workspace
- **Project count:** "X projects"
- **Role badge:** Owner/Admin/Editor/Viewer
- **Last activity:** "Last: X time ago"
- **Actions (hover):** Settings, Delete

#### Create Workspace Modal
- Modal form để tạo workspace mới

---

## 5. Luồng chức năng

### 5.1 Xem Workspaces

```
[User opens app]
        ↓
    ┌───────────────────┐
    │ Load workspaces     │
    │ for current user    │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Display workspace   │
    │ list (personal +   │
    │ team)              │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Show last activity │
    │ for each workspace │
    └───────────────────┘
```

### 5.2 Tạo Workspace

```
[User clicks "+ New Workspace"]
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
    │ /workspaces       │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Create workspace   │
    │ Set user as owner  │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Refresh list       │
    │ Select new WS      │
    └───────────────────┘
```

### 5.3 Mở Workspace

```
[User clicks workspace card]
        ↓
    ┌───────────────────┐
    │ Set as active       │
    │ workspace           │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Load projects       │
    │ for this workspace  │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Update sidebar     │
    │ Show projects      │
    └───────────────────┘
```

### 5.4 Xóa Workspace

```
[User clicks delete on workspace]
        ↓
    ┌───────────────────┐
    │ Show confirmation  │
    │ dialog              │
    └───────────────────┘
        ↓
[User confirms]
        ↓
    ┌───────────────────┐
    │ API DELETE        │
    │ /workspaces/:id   │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Soft delete        │
    │ (30-day retention) │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Remove from list   │
    └───────────────────┘
```

---

## 6. Workspace Card States

| State | Visual |
|-------|--------|
| Default | White background, subtle border |
| Hover | Slight shadow, border highlight |
| Selected/Active | Blue left border, light blue background |
| Loading | Skeleton placeholder |

---

## 7. Role Badges

| Role | Badge Color | Text |
|------|-------------|------|
| Owner | Purple | 👑 Owner |
| Admin | Blue | ⚙️ Admin |
| Editor | Green | ✏️ Editor |
| Viewer | Gray | 👁️ Viewer |

---

## 8. Error Handling

| Error | Message | Action |
|-------|---------|--------|
| Load failed | "Unable to load workspaces" | Retry button |
| Create failed | "Unable to create workspace" | Show error, keep modal open |
| Delete failed | "Unable to delete workspace" | Toast error |
| Name conflict | "A workspace with this name already exists" | Show error in form |

---

## 9. Responsive Behavior

### Desktop
- Full sidebar + main content
- Grid layout for workspace cards (2-3 columns)

### Tablet
- Collapsible sidebar
- 2-column grid

### Mobile
- Hamburger menu
- Single column
- Bottom navigation

---

## 10. Related Screens

- [02-workspace-settings.md](02-workspace-settings.md) - Workspace settings
- [03-workspace-members.md](03-workspace-members.md) - Member management
- [04-invite-member.md](04-invite-member.md) - Invite modal

---

## 11. Acceptance Criteria

- [ ] Hiển thị tất cả workspaces của user
- [ ] Phân biệt personal vs team workspaces
- [ ] Hiển thị role badge cho mỗi workspace
- [ ] Hiển thị last activity time
- [ ] Có thể tạo workspace mới
- [ ] Có thể mở workspace để xem projects
- [ ] Có thể xóa workspace (soft delete)
- [ ] Hover state hiển thị actions
- [ ] Responsive trên mobile/tablet/desktop
