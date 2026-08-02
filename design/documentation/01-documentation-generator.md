# Màn hình Documentation Generator

## 1. Tổng quan

- **Mã màn hình:** DOC-001
- **Tên màn hình:** Documentation Generator
- **Loại:** Editor Screen
- **Vị trí:** Project → Documentation tab
- **Yêu cầu:** Editor role trở lên

---

## 2. Mục đích

Tạo và chỉnh sửa tài liệu API từ các requests, schemas, và examples. Preview và publish documentation.

---

## 3. Layout

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│  Documentation                                                    [Preview] [Publish]   │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                 │
│  ┌────────────────┬────────────────────────────────────────────────────────────────┐ │
│  │                │                                                                │ │
│  │  DOCUMENTATION │   API Documentation                              [👁 Preview]  │ │
│  │  ───────────── │   ────────────────────────────────────────────────────────   │ │
│  │                │                                                                │ │
│  │  📄 Overview   │   ## Authentication API                                          │ │
│  │  📄 Endpoints  │                                                                │ │
│  │  📄 Schemas    │   This API provides authentication and session management       │ │
│  │  📄 Examples   │   services for the application.                               │ │
│  │  📄 Errors     │                                                                │ │
│  │  📄 Changelog  │   ### Base URL                                                 │ │
│  │                │   `https://api.example.com/v2`                                 │ │
│  │  ───────────── │                                                                │ │
│  │                │   ### Authentication                                            │ │
│  │  [⚙️ Settings]│   All endpoints require Bearer token authentication.             │ │
│  │                │   Include the token in the Authorization header:                │ │
│  │  PUBLISH       │   ```                                                          │ │
│  │  ───────────── │   Authorization: Bearer <your-token>                           │ │
│  │  ● Draft       │   ```                                                          │ │
│  │  ○ Published   │                                                                │ │
│  │  v1.2.3        │   ---                                                          │ │
│  │                │                                                                │ │
│  │  [Publish v1.2]│   ## Endpoints                                                 │ │
│  │                │                                                                │ │
│  │                │   ### POST /auth/login                                         │ │
│  │                │   Authenticate user and obtain access token.                   │ │
│  │                │                                                                │ │
│  │                │   **Request**                                                  │ │
│  │                │   ```json                                                      │ │
│  │                │   {                                                            │ │
│  │                │     "email": "user@example.com",                              │ │
│  │                │     "password": "string"                                       │ │
│  │                │   }                                                            │ │
│  │                │   ```                                                          │ │
│  │                │                                                                │ │
│  │                │   **Response (200 OK)**                                        │ │
│  │                │   ```json                                                      │ │
│  │                │   {                                                            │ │
│  │                │     "success": true,                                           │ │
│  │                │     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."       │ │
│  │                │   }                                                            │ │
│  │                │   ```                                                          │ │
│  │                │                                                                │ │
│  │                │   ...                                                          │ │
│  │                │                                                                │ │
│  └────────────────┴────────────────────────────────────────────────────────────────┘ │
│                                                                                                 │
└───────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Các thành phần UI

### 4.1 Sidebar
- **Sections:** Overview, Endpoints, Schemas, Examples, Errors, Changelog
- **Settings:** Generator settings
- **Publish info:** Draft/Published, Version
- **Publish button:** Publish current version

### 4.2 Editor Area
- **Markdown editor:** Edit documentation content
- **Section navigation:** Click to jump to section
- **Auto-generated content:** Clearly marked

### 4.3 Preview Mode
- **Rendered markdown:** How it will look
- **Toggle between edit/preview**

### 4.4 Publishing Controls
- **Draft indicator:** Current state
- **Version selector:** Select version to publish
- **Publish button:** Publish documentation

---

## 5. Documentation Sections

### Overview
- API description
- Base URL
- Authentication method
- Rate limiting info

### Endpoints
- Grouped by collection/folder
- Method + path
- Description
- Request parameters
- Request body
- Response schemas
- Example responses

### Schemas
- Data models
- Field definitions
- Type information

### Examples
- Sample requests
- Sample responses
- Common use cases

### Errors
- Error codes
- Error messages
- Troubleshooting

### Changelog
- Version history
- Changes by version

---

## 6. Generated vs Manual Content

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Generated Content                          Manual Edits (Protected)         │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  ## POST /auth/login                        ## Custom Section              │
│                                                                              │
│  [Auto-generated]                            [Manual]                       │
│  ```                                         This endpoint supports         │
│  POST /auth/login                           OAuth 2.0 authentication        │
│  ```                                        for enterprise users.           │
│                                              ────────────                    │
│  Status: 201 Created                                                        │
│  [Auto-generated]                           You can configure SSO in        │
│  ```json                                    the admin panel.                │
│  { "token": "..." }                                                      │
│  ```                                                                       │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Legend:**
- **Blue border:** Generated content (will be overwritten on regenerate)
- **Orange border:** Manual edits (protected from overwrite)

---

## 7. Generate Documentation Modal

```
┌─────────────────────────────────────────┐
│  Generate Documentation             [X] │
│  ────────────────────────────────────── │
│                                          │
│  Select what to include:                  │
│                                          │
│  ☑ Overview and base info               │
│  ☑ All endpoints                        │
│  ☑ Request schemas                       │
│  ☑ Response schemas                     │
│  ☑ Example requests/responses           │
│  ☑ Error codes                          │
│                                          │
│  Options:                                │
│  ☑ Include examples from saved responses │
│  ☑ Auto-generate descriptions (AI)        │
│  ☑ Protect manual edits                 │
│                                          │
│  ──────────────────────────────────────  │
│                                          │
│  ┌─────────────────────────────────────┐│
│  │         GENERATE DOCUMENTATION          ││
│  └─────────────────────────────────────┘│
│                                          │
└─────────────────────────────────────────┘
```

---

## 8. Publish Confirmation

```
┌─────────────────────────────────────────┐
│  Publish Documentation                  │
│  ────────────────────────────────────── │
│                                          │
│  You are about to publish version 1.2.3  │
│                                          │
│  This will:                             │
│  ✓ Update the public documentation     │
│  ✓ Create a versioned snapshot         │
│  ✓ Notify subscribers (if enabled)     │
│                                          │
│  ┌─────────────────────────────────────┐│
│  │              PUBLISH                   ││
│  └─────────────────────────────────────┘│
│                                          │
│        [Cancel]                          │
│                                          │
└─────────────────────────────────────────┘
```

---

## 9. Related Screens

- [../project/02-project-view.md](../project/02-project-view.md) - Project view

---

## 10. Acceptance Criteria

- [ ] Hiển thị documentation editor
- [ ] Hiển thị preview mode
- [ ] Có thể generate documentation
- [ ] Generated content distinguished từ manual edits
- [ ] Manual edits được preserve khi regenerate
- [ ] Có thể publish documentation
- [ ] Version tracking hoạt động
- [ ] Có thể view past versions
