# Màn hình Request History

## 1. Tổng quan

- **Mã màn hình:** REQ-002
- **Tên màn hình:** Request History
- **Loại:** Sidebar Panel / Modal
- **Vị trí:** Sidebar → History icon hoặc Project view
- **Yêu cầu:** Member của project

---

## 2. Mục đích

Hiển thị lịch sử các request đã thực thi, cho phép xem lại, restore, và so sánh các execution.

---

## 3. Layout

### 3.1 History Panel (Sidebar)

```
┌─────────────────────────────────────────┐
│  REQUEST HISTORY                        │
│  ─────────────────────────────────────  │
│  🔍 Search history...                   │
│  [All ▼] [Today ▼] [🔄]                │
│  ─────────────────────────────────────  │
│                                          │
│  TODAY                                  │
│  ─────────────────────────────────────  │
│  ┌─────────────────────────────────────┐│
│  │ ● POST /auth/login                  ││
│  │   200 OK · 245ms · 2:30 PM         ││
│  │   Development                        ││
│  └─────────────────────────────────────┘│
│  ┌─────────────────────────────────────┐│
│  │ ● GET /users                        ││
│  │   200 OK · 156ms · 2:28 PM         ││
│  │   Development                        ││
│  └─────────────────────────────────────┘│
│  ┌─────────────────────────────────────┐│
│  │ ● POST /users                       ││
│  │   201 Created · 189ms · 2:25 PM    ││
│  │   Development                        ││
│  └─────────────────────────────────────┘│
│                                          │
│  YESTERDAY                              │
│  ─────────────────────────────────────  │
│  ┌─────────────────────────────────────┐│
│  │ ● GET /users/:id                    ││
│  │   404 Not Found · 89ms · 5:45 PM    ││
│  │   Staging                            ││
│  └─────────────────────────────────────┘│
│  ┌─────────────────────────────────────┐│
│  │ ● PUT /users/:id                    ││
│  │   200 OK · 234ms · 5:42 PM         ││
│  │   Staging                            ││
│  └─────────────────────────────────────┘│
│                                          │
│  ─────────────────────────────────────   │
│  [Clear All History]                    │
│                                          │
└─────────────────────────────────────────┘
```

### 3.2 History Item Details (Expanded)

```
┌─────────────────────────────────────────┐
│  ● POST /auth/login                     │
│    ─────────────────────────────────    │
│                                          │
│  Status: 200 OK · Time: 245ms          │
│  Size: 1.2 KB                          │
│  Environment: Development                │
│                                          │
│  ┌─ Request ──────────────────────────┐ │
│  │ POST https://api.example.com/auth  │ │
│  │ Headers: 2                        │ │
│  │ Body: { email, password }          │ │
│  └───────────────────────────────────┘ │
│                                          │
│  ┌─ Response ────────────────────────┐ │
│  │ { success, token, user }           │ │
│  └───────────────────────────────────┘ │
│                                          │
│  [View Details] [Restore] [Delete]     │
│                                          │
└─────────────────────────────────────────┘
```

### 3.3 History Comparison Modal

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Compare Requests                                                               │
│  ────────────────────────────────────────────────────────────────────────── │
│                                                                              │
│  ┌────────────────────────────┐  ┌────────────────────────────┐              │
│  │ Request A                  │  │ Request B                  │              │
│  ├────────────────────────────┤  ├────────────────────────────┤              │
│  │ POST /auth/login          │  │ POST /auth/login          │              │
│  │ 2:30 PM today             │  │ 3:15 PM today             │              │
│  │ 200 OK · 245ms            │  │ 200 OK · 456ms            │              │
│  │ Development               │  │ Staging                   │              │
│  │                            │  │                            │              │
│  │ [Select this]             │  │ [Select this]             │              │
│  └────────────────────────────┘  └────────────────────────────┘              │
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │ Comparison View                                                         │  │
│  ├───────────────────────────────────────────────────────────────────────┤  │
│  │                                                                        │  │
│  │  Status        200 OK          200 OK          ✓ Same                 │  │
│  │  Time          245ms           456ms          ⚠️ +86% slower         │  │
│  │  Size          1.2 KB          1.1 KB         ✓ Similar              │  │
│  │                                                                        │  │
│  │  Request Body                                                           │  │
│  │  ┌────────────────────┐  ┌────────────────────┐                      │  │
│  │  │ {                  │  │ {                  │                      │  │
│  │  │   "email": "...", │  │   "email": "...", │                      │  │
│  │  │   "password": "..."│  │   "password": "..."│                      │  │
│  │  │ }                  │  │ }                  │                      │  │
│  │  └────────────────────┘  └────────────────────┘  ✓ Same                │  │
│  │                                                                        │  │
│  │  Response Body                                                          │  │
│  │  ┌────────────────────┐  ┌────────────────────┐                      │  │
│  │  │ {                  │  │ {                  │                      │  │
│  │  │   "token": "..."  │  │   "token": "..."  │                      │  │
│  │  │   "expiresIn":    │  │   "expiresIn":    │  ⚠️ Different        │  │
│  │  │     3600          │  │     7200           │                      │  │
│  │  │ }                  │  │ }                  │                      │  │
│  │  └────────────────────┘  └────────────────────┘                      │  │
│  │                                                                        │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│                              [Close]                                         │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Các thành phần UI

### 4.1 Filter Bar
- **Search:** Text input
- **Time filter:** All, Today, Yesterday, Last 7 days, Custom range
- **Status filter:** All, Success, Client error, Server error
- **Sort:** Newest first, Oldest first

### 4.2 History Item
- **Status indicator:** Colored dot (green/yellow/red)
- **Method badge:** GET/POST/etc.
- **URL path:** Truncated
- **Status code:** 200, 404, etc.
- **Response time:** In ms
- **Timestamp:** Time of execution
- **Environment badge:** Which env was used

### 4.3 Actions
- **View Details:** Open detail modal
- **Restore:** Load into request editor
- **Delete:** Remove from history
- **Compare:** Select for comparison

---

## 5. Luồng chức năng

### 5.1 Xem History

```
[User opens history panel]
        ↓
    ┌───────────────────┐
    │ API GET            │
    │ /history          │
    │ ?project=...      │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Group by date      │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Display grouped     │
    │ history items       │
    └───────────────────┘
```

### 5.2 Restore Request

```
[User clicks "Restore"]
        ↓
    ┌───────────────────┐
    │ Load request        │
    │ configuration       │
    │ from history       │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Populate request    │
    │ editor with saved  │
    │ config              │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Switch to request    │
    │ editor tab          │
    └───────────────────┘
```

### 5.3 Compare Requests

```
[User selects "Compare"]
        ↓
    ┌───────────────────┐
    │ Enter comparison    │
    │ mode                │
    └───────────────────┘
        ↓
[User selects Request A]
        ↓
[User selects Request B]
        ↓
    ┌───────────────────┐
    │ Load both requests  │
    │ for comparison      │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Display side-by-    │
    │ side comparison     │
    └───────────────────┘
```

---

## 6. History Item Actions

```
┌───────────────────────────────────────────┐
│                                           │
│  ● POST /auth/login                       │
│    200 OK · 245ms · Development          │
│                                           │
│  ┌─────────────────────────────────────┐ │
│  │  [👁 View]  [↩ Restore]  [⚖ Compare] │ │
│  │  [🗑 Delete]                         │ │
│  └─────────────────────────────────────┘ │
│                                           │
└───────────────────────────────────────────┘
```

---

## 7. Time Grouping

### Today
### Yesterday
### This Week (grouped by day)
### This Month (grouped by week)
### Older

---

## 8. Retention Policy

| Type | Default Retention |
|------|-------------------|
| Local history | Until manually cleared |
| Synced history | 90 days |
| Team activity | 90 days |

---

## 9. Error Handling

| Error | Message | Action |
|-------|---------|--------|
| Load failed | "Unable to load history" | Retry button |
| Restore failed | "Unable to restore request" | Show error |
| Delete failed | "Unable to delete history item" | Toast error |

---

## 10. Related Screens

- [01-request-editor.md](01-request-editor.md) - Request editor

---

## 11. Acceptance Criteria

- [ ] Hiển thị tất cả request executions
- [ ] Group by date/time
- [ ] Hiển thị status code, response time, environment
- [ ] Có thể search history
- [ ] Có thể filter by status/time
- [ ] Có thể view request details
- [ ] Có thể restore request
- [ ] Có thể delete history items
- [ ] Có thể compare two requests
- [ ] Comparison hiển thị differences
- [ ] Có thể clear all history
- [ ] Infinite scroll hoặc pagination
