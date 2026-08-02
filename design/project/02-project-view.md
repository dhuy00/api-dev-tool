# Màn hình Project View

## 1. Tổng quan

- **Mã màn hình:** PRJ-002
- **Tên màn hình:** Project View / Main Workspace
- **Loại:** Main Application Screen
- **Vị trí:** Click vào project name
- **Yêu cầu:** Member của project

---

## 2. Mục đích

Là màn hình chính để làm việc với API - nơi hiển thị collections, requests, environments và cung cấp quick access đến tất cả chức năng.

---

## 3. Layout

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  ← API Team  │  Authentication API  ▼     [Environment: Development ▼]  👤   │
├──────────────┴──────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  ┌─────────────────┬────────────────────────────────────────────────────────┐  │
│  │                 │                                                        │  │
│  │  AUTHENTICATION │   No request selected                                  │  │
│  │  ─────────────  │   ────────────────────────────────────────────         │  │
│  │  📂 Login       │                                                        │  │
│  │    POST /auth   │   Select a request from the sidebar or create a       │  │
│  │    GET /session│   new one to get started.                              │  │
│  │  📂 Register    │                                                        │  │
│  │    POST /users  │   ┌──────────────────────────────────────────────┐     │  │
│  │                 │   │  + New Request                                 │     │  │
│  │  USER MGMT      │   └──────────────────────────────────────────────┘     │  │
│  │  ─────────────  │                                                        │  │
│  │  📂 Profiles    │                                                        │  │
│  │    GET /users   │                                                        │  │
│  │    PUT /users/: │                                                        │  │
│  │  📂 Roles       │                                                        │  │
│  │    GET /roles   │                                                        │  │
│  │                 │                                                        │  │
│  │  ENVIRONMENTS   │                                                        │  │
│  │  ─────────────  │                                                        │  │
│  │  🌐 Development │                                                        │  │
│  │  🌐 Staging     │                                                        │  │
│  │  🌐 Production  │                                                        │  │
│  │                 │                                                        │  │
│  │  [+ New Folder] │                                                        │  │
│  │  [+ New Request]│                                                        │  │
│  │                 │                                                        │  │
│  └─────────────────┴────────────────────────────────────────────────────────┘  │
│                                                                                  │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Các thành phần UI

### 4.1 Top Bar
- **Breadcrumb:** Workspace → Project name
- **Project dropdown:** Quick switch projects
- **Environment selector:** Development / Staging / Production
- **User menu:** Avatar, settings, logout

### 4.2 Left Sidebar (Collection Explorer)

#### Sections
- **Collections/Folders:** Tree structure của requests
- **Environments:** List của environments

#### Folder Item
- Expandable/collapsible
- Request count badge
- Folder icon

#### Request Item
- Method badge (GET, POST, etc.)
- Request name
- URL preview (truncated)

#### Environment Item
- Icon
- Name
- Active indicator

### 4.3 Action Buttons
- "+ New Folder"
- "+ New Request"

### 4.4 Main Content Area (Empty State)
- Illustration/icon
- "Select a request" message
- "New Request" button

### 4.5 Main Content Area (Request Editor) - Khi chọn request

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  [←] POST /auth/login                                         [Save] [Send ▶]  │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  ┌──────────┬────────────────────────────────────────────────────────────────┐  │
│  │          │                                                                │  │
│  │ Params   │  URL                          Environment: Development ▼       │  │
│  │ Auth     │  ┌──────────────────────────────────────────────────────┐   │  │
│  │ Headers  │  │ https://api.example.com/auth/login                   │   │  │
│  │ Body     │  └──────────────────────────────────────────────────────┘   │  │
│  │          │                                                                │  │
│  │          │  ┌────────────────────────────────────────────────────┐   │  │
│  │          │  │ Key               │ Value              │ Description │   │  │
│  │          │  ├───────────────────┼───────────────────┼────────────┤   │  │
│  │          │  │ Content-Type      │ application/json  │            │   │  │
│  │          │  │ Authorization     │ Bearer {{token}}   │            │   │  │
│  │          │  └───────────────────┴───────────────────┴────────────┘   │  │
│  │          │                                                                │  │
│  │          │  Body (JSON)                                    [Beautify]  │  │
│  │          │  ┌────────────────────────────────────────────────────┐   │  │
│  │          │  │ {                                                   │   │  │
│  │          │  │   "email": "user@example.com",                    │   │  │
│  │          │  │   "password": "•••••••••"                         │   │  │
│  │          │  │ }                                                   │   │  │
│  │          │  └────────────────────────────────────────────────────┘   │  │
│  │          │                                                                │  │
│  │          │  [Generate Data 💡]                                        │  │
│  │          │                                                                │  │
│  └──────────┴────────────────────────────────────────────────────────────────┘  │
│                                                                                  │
│  Response                                                                        │
│  ┌──────────────────────────────────────────────────────────────────────────┐   │
│  │ Status: 200 OK        Time: 245ms        Size: 1.2 KB                   │   │
│  ├──────────────────────────────────────────────────────────────────────────┤   │
│  │ [Body] [Headers] [Timeline] [Tests]                                      │   │
│  │ ┌────────────────────────────────────────────────────────────────────┐ │   │
│  │ │ {                                                                 │ │   │
│  │ │   "success": true,                                               │ │   │
│  │ │   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",             │ │   │
│  │ │   "expiresIn": 3600                                               │ │   │
│  │ │ }                                                                 │ │   │
│  │ └────────────────────────────────────────────────────────────────────┘ │   │
│  └──────────────────────────────────────────────────────────────────────────┘   │
│                                                                                  │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Sidebar Sections

### 5.1 Collections
```
┌─────────────────────────────────────────┐
│  📂 Folder Name                  [⋮]   │
│     ├ 📄 GET /users              [⋮]   │
│     ├ 📄 POST /users             [⋮]   │
│     └ 📂 Nested Folder           [⋮]   │
│         ├ 📄 GET /users/:id      [⋮]   │
│         └ 📄 PUT /users/:id     [⋮]   │
└─────────────────────────────────────────┘
```

### 5.2 Environments
```
┌─────────────────────────────────────────┐
│  🌐 Development                    [⚙️] │ ← Active
│  🌐 Staging                         [⚙️] │
│  🌐 Production                       [⚙️] │
└─────────────────────────────────────────┘
```

### 5.3 Request Item Details
```
┌─────────────────────────────────────────┐
│  [GET] Get Users List                   │
│       https://api.example.com/users      │
│       ─────────────────────────────────  │
│       Updated 2h ago · Editor           │
└─────────────────────────────────────────┘
```

---

## 6. Request Tab Bar

```
┌─────────────────────────────────────────────────────────────────────────┐
│  [×] POST /auth/login  │  [×] GET /users/:id  │  [+]                    │
└─────────────────────────────────────────────────────────────────────────┘
```

- Multiple requests có thể mở như tabs
- Close button (×) trên mỗi tab
- "+" để tạo request mới

---

## 7. Quick Actions

### Right-click / Context Menu
```
┌───────────────────────────┐
│  📝 Rename                │
│  📋 Duplicate            │
│  ➕ Add to collection    │
│  ─────────────────────── │
│  🔗 Copy as cURL         │
│  📋 Copy link            │
│  ─────────────────────── │
│  🗑️ Delete               │
└───────────────────────────┘
```

### Drag & Drop
- Reorder requests trong folder
- Move requests giữa folders
- Drag requests vào collections

---

## 8. Empty States

### No Collections
```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│                     📁                                      │
│                                                              │
│              No collections yet                             │
│                                                              │
│     Create a collection to organize your API requests.      │
│                                                              │
│         [+ New Collection]  [+ New Folder]                   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### No Requests in Folder
```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│              This folder is empty                           │
│                                                              │
│         [+ New Request]                                      │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 9. Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Ctrl/Cmd + N | New request |
| Ctrl/Cmd + S | Save request |
| Ctrl/Cmd + Enter | Send request |
| Ctrl/Cmd + K | Quick switcher |
| Ctrl/Cmd + Shift + N | New folder |
| Ctrl/Cmd + B | Toggle sidebar |

---

## 10. Related Screens

- [01-project-list.md](01-project-list.md) - Project list
- [03-project-settings.md](03-project-settings.md) - Project settings
- [../request-builder/01-request-editor.md](../request-builder/01-request-editor.md) - Request editor chi tiết

---

## 11. Acceptance Criteria

- [ ] Hiển thị collections và folders trong sidebar
- [ ] Hiển thị requests với method badges
- [ ] Hiển thị environments
- [ ] Có thể expand/collapse folders
- [ ] Có thể switch environments
- [ ] Có thể mở request trong main pane
- [ ] Multiple requests có thể mở như tabs
- [ ] Empty state hiển thị khi chưa chọn request
- [ ] Right-click context menu hoạt động
- [ ] Keyboard shortcuts hoạt động
- [ ] Environment variables được resolve trong URL/headers
