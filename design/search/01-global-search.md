# Màn hình Global Search

## 1. Tổng quan

- **Mã màn hình:** SEARCH-001
- **Tên màn hình:** Global Search
- **Loại:** Modal / Command Palette
- **Vị trí:** Cmd/Ctrl + K anywhere in app
- **Yêu cầu:** Member của workspace

---

## 2. Mục đích

Tìm kiếm nhanh requests, collections, environments, documentation, và các assets khác trong workspace.

---

## 3. Layout

### 3.1 Search Modal

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  🔍 Search...                                                    [×] │  │
│  │  ───────────────────────────────────────────────────────────────────── │  │
│  │                                                                              │  │
│  │  Type to search requests, collections, environments, docs...             │  │
│  │                                                                              │  │
│  │  Recent searches:                                                        │  │
│  │  • POST /auth/login                                                     │  │
│  │  • GET /users/:id                                                       │  │
│  │  • Authentication API                                                   │  │
│  │                                                                              │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Search Results

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  🔍 auth                                                     [×] │  │
│  │  ───────────────────────────────────────────────────────────────────── │  │
│  │                                                                              │  │
│  │  Requests (8)                                                              │  │
│  │  ───────────────────────────────────────────────────────────────────── │  │
│  │  ● POST /auth/login                                  Authentication API   │  │
│  │  ● POST /auth/register                               Authentication API   │  │
│  │  ● POST /auth/logout                                Authentication API   │  │
│  │  ● GET /auth/session                                Authentication API   │  │
│  │                                                                              │  │
│  │  Collections (1)                                                           │  │
│  │  ───────────────────────────────────────────────────────────────────── │  │
│  │  📂 Authentication API                              Project: Auth API    │  │
│  │                                                                              │  │
│  │  Environments (1)                                                          │  │
│  │  ───────────────────────────────────────────────────────────────────── │  │
│  │  🌐 auth-dev                                         Project: Auth API    │  │
│  │                                                                              │  │
│  │  Documentation (2)                                                         │  │
│  │  ───────────────────────────────────────────────────────────────────── │  │
│  │  📄 Authentication - Overview                          Auth API Docs      │  │
│  │  📄 Auth Endpoints                                   Auth API Docs      │  │
│  │                                                                              │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│  ──────────────────────────────────────────────────────────────────────────  │
│  ↑↓ Navigate   Enter Select   Esc Close                                    │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Search Result Types

### 4.1 Request Result
```
● POST /auth/login
Authentication API · 200 OK · Last run: 2h ago
```

### 4.2 Collection Result
```
📂 Authentication API
Project: Auth API · 8 requests · Updated 2h ago
```

### 4.3 Environment Result
```
🌐 auth-dev
Project: Auth API · 5 variables
```

### 4.4 Documentation Result
```
📄 Authentication - Overview
Auth API Docs · Updated 1d ago
```

### 4.5 Flow Result
```
⚡ Login Flow
Project: Auth API · 4 nodes
```

---

## 5. Search Filters

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  🔍 auth                                          [Filter ▼] [Scope ▼]       │
│  ──────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  Filters:                                                                     │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  [Method: All ▼]  [Status: All ▼]  [Project: All ▼]                │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│  Scope:                                                                       │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  ○ Current project                                                     │  │
│  │  ○ Current workspace                                                   │  │
│  │  ● All workspaces (if permitted)                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. Command Palette Mode

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  🔍 >                                                 [×] │  │
│  │  ───────────────────────────────────────────────────────────────────── │  │
│  │                                                                              │  │
│  │  Commands:                                                                │  │
│  │  ───────────────────────────────────────────────────────────────────── │  │
│  │  ⚡ New Request                                    ⌘N                 │  │
│  │  📂 New Collection                               ⌘⇧N                 │  │
│  │  ⚙️ Open Settings                               ⌘,                 │  │
│  │  🔄 Sync Environments                                                    │  │
│  │  📤 Import                                                               │  │
│  │                                                                              │  │
│  │  Type ">" for commands, "/" for searches                                 │  │
│  │                                                                              │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Command Prefixes
- `>` - Commands
- `/` - Searches
- `@` - Filter by user
- `#` - Filter by tag

---

## 7. Keyboard Navigation

| Key | Action |
|-----|--------|
| Cmd/Ctrl + K | Open search |
| ↑ / ↓ | Navigate results |
| Enter | Select result |
| Tab | Open in new tab |
| Esc | Close |
| Cmd/Ctrl + Enter | Open in current tab |

---

## 8. Search Features

### 8.1 Fuzzy Matching
- Typos allowed: "autnetication" → "authentication"
- Partial matches: "login" matches "POST /auth/login"

### 8.2 Highlighting
- Matched text highlighted in results

### 8.3 Recent Searches
- Last 5 searches shown when empty
- Click to re-search

### 8.4 Search Suggestions
- Auto-complete as you type

---

## 9. Performance

- Search debounced (300ms)
- Results limited to 50 items initially
- "Load more" for additional results
- Cached index for fast searches

---

## 10. Related Screens

- [../project/02-project-view.md](../project/02-project-view.md) - Project view

---

## 11. Acceptance Criteria

- [ ] Opens with Cmd/Ctrl + K
- [ ] Real-time search results
- [ ] Results grouped by type
- [ ] Method/status badges shown
- [ ] Fuzzy matching works
- [ ] Match highlighting works
- [ ] Keyboard navigation works
- [ ] Recent searches shown
- [ ] Filters work (method, status, project)
- [ ] Scope selection works
- [ ] Command palette mode works
- [ ] Escape closes modal
