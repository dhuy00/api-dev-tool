# Màn hình Request Editor

## 1. Tổng quan

- **Mã màn hình:** REQ-001
- **Tên màn hình:** Request Editor
- **Loại:** Main Editor Screen
- **Vị trí:** Project view → Click request hoặc tạo request mới
- **Yêu cầu:** Editor role trở lên

---

## 2. Mục đích

Soạn thảo và thực thi HTTP requests, xem response, và quản lý các thành phần của request (params, headers, body, auth).

---

## 3. Layout

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│  [←] POST /auth/login                                       [Save] [Send ▶]           │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                 │
│  ┌──────────┬────────────────────────────────────────────────────────────────────────┐ │
│  │          │                                                                         │ │
│  │ Params   │  METHOD  URL                                                             │ │
│  │ Auth     │  ┌──────┐ ┌──────────────────────────────────────────────────────┐    │ │
│  │ Headers  │  │ POST▼│ │ https://{{baseUrl}}/auth/login                         │    │ │
│  │ Body     │  └──────┘ └──────────────────────────────────────────────────────┘    │ │
│  │           │                                                                         │ │
│  │           │  ┌──────────────────────────────────────────────────────────────────┐│ │
│  │           │  │ Params │ Headers │ Body │ Auth │ Pre-request │ Tests │          ││ │
│  │           │  └──────────────────────────────────────────────────────────────────┘│ │
│  │           │                                                                         │ │
│  │           │  ┌──────────────────────────────────────────────────────────────────┐│ │
│  │           │  │                                                                      ││ │
│  │           │  │  Body tab content:                                                ││ │
│  │           │  │                                                                      ││ │
│  │           │  │  Content-Type: JSON ▼   [Beautify] [Format] [Clear]              ││ │
│  │           │  │                                                                      ││ │
│  │           │  │  ┌────────────────────────────────────────────────────────────┐  ││ │
│  │           │  │  │ {                                                           │  ││ │
│  │           │  │  │   "email": "user@example.com",                            │  ││ │
│  │           │  │  │   "password": "securePassword123",                        │  ││ │
│  │           │  │  │   "rememberMe": true                                      │  ││ │
│  │           │  │  │ }                                                           │  ││ │
│  │           │  │  └────────────────────────────────────────────────────────────┘  ││ │
│  │           │  │                                                                      ││ │
│  │           │  │  [Generate Data 💡]  [Bulk Edit]                               ││ │
│  │           │  │                                                                      ││ │
│  │           │  └──────────────────────────────────────────────────────────────────┘│ │
│  │           │                                                                         │ │
│  └──────────┴────────────────────────────────────────────────────────────────────────┘ │
│                                                                                                 │
│  ┌───────────────────────────────────────────────────────────────────────────────────┐ │
│  │ Response                                        Status: 200 OK  Time: 245ms      │ │
│  ├───────────────────────────────────────────────────────────────────────────────────┤ │
│  │                                                                                   │ │
│  │  [Body ▼] [Headers] [Timeline] [Cookies] [Test Results]                          │ │
│  │                                                                                   │ │
│  │  ┌─────────────────────────────────────────────────────────────────────────────┐ │ │
│  │  │                                                                             │ │ │
│  │  │  JSON ▼  [Beautify] [Raw] [Preview] [Copy]                                 │ │ │
│  │  │                                                                             │ │ │
│  │  │  ┌─────────────────────────────────────────────────────────────────────┐ │ │ │
│  │  │  │ {                                                                     │ │ │ │
│  │  │  │   "success": true,                                                   │ │ │ │
│  │  │  │   "data": {                                                          │ │ │ │
│  │  │  │     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",             │ │ │ │
│  │  │  │     "expiresIn": 3600,                                              │ │ │ │
│  │  │  │     "user": {                                                        │ │ │ │
│  │  │  │       "id": "usr_abc123",                                           │ │ │ │
│  │  │  │       "email": "user@example.com",                                   │ │ │ │
│  │  │  │       "role": "admin"                                                │ │ │ │
│  │  │  │     }                                                                │ │ │ │
│  │  │  │   }                                                                  │ │ │ │
│  │  │  │ }                                                                   │ │ │ │
│  │  │  └─────────────────────────────────────────────────────────────────────┘ │ │ │
│  │  │                                                                             │ │ │
│  │  │  [💾 Save as Example]  [📋 Copy Response]  [🔗 Copy Link]                 │ │ │
│  │  │                                                                             │ │ │
│  │  └─────────────────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                                   │ │
│  └───────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                                 │
└───────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Các thành phần UI

### 4.1 Header Bar
- **Back button:** Return to project view
- **Method selector:** Dropdown (GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS)
- **URL input:** Với variable highlighting
- **Save button:** Save current request
- **Send button:** Execute request

### 4.2 URL Bar Features
- **Variable interpolation:** `{{variableName}}` highlighted
- **Autocomplete:** For variables and recent URLs
- **URL validation:** Visual feedback

### 4.3 Method Selector

```
┌──────────┐
│ [GET ▼]  │
├──────────┤
│ GET      │ ← Green
│ POST     │ ← Blue
│ PUT      │ ← Orange
│ PATCH    │ ← Yellow
│ DELETE   │ ← Red
│ HEAD     │ ← Gray
│ OPTIONS  │ ← Gray
└──────────┘
```

### 4.4 Request Tabs

| Tab | Description |
|-----|-------------|
| Params | Query parameters (key-value table) |
| Headers | Request headers |
| Body | Request body (multiple modes) |
| Auth | Authentication configuration |
| Pre-request | Pre-request script |
| Tests | Test scripts |

### 4.5 Body Modes

| Mode | Icon | Description |
|------|------|-------------|
| None | - | No body |
| JSON | { } | JSON editor with syntax highlighting |
| XML | < > | XML editor |
| Form Data | ab | Key-value form data |
| URL Encoded | = | URL encoded form |
| Multipart | 📎 | File upload |
| Binary | 📄 | Binary file |
| GraphQL | ◉ | GraphQL query + variables |

### 4.6 Key-Value Editor (Params, Headers, Form Data)

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ Key                  │ Value                    │ Description │              │
├──────────────────────┼──────────────────────────┼─────────────┼───────────────┤
│ Content-Type        │ application/json         │            │  ×            │
│ Authorization       │ Bearer {{token}}          │            │  ×            │
│ X-Request-ID        │ {{$guid}}               │            │  ×            │
├─────────────────────┼──────────────────────────┼─────────────┼───────────────┤
│ [+ Add]                                                                [Bulk Edit] │
└──────────────────────────────────────────────────────────────────────────────┘
```

- Checkbox để enable/disable row
- Drag handle để reorder
- Description column
- Delete button

---

## 5. Auth Tab

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Auth Type                                                                   │
│  ┌────────────────────────────────────────────────────────────────────────┐ │
│  │ No Auth ▼                                                              │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌────────────────────────────────────────────────────────────────────────┐ │
│  │ No Auth                                                                │ │
│  │ Select an auth type to add credentials                                 │ │
│  │                                                                        │ │
│  │ ○ No Auth        ○ Bearer Token    ○ Basic Auth                       │ │
│  │ ○ API Key        ○ OAuth 2.0      ○ AWS Signature                    │ │
│  │ ○ OAuth 1.0      ○ Hawk Auth      ○ Digest Auth                      │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Auth Types Detail

#### Bearer Token
```
Token: {{authToken}}
Prefix: Bearer (default)
```

#### Basic Auth
```
Username: {{username}}
Password: {{password}}
```

#### API Key
```
Key: X-API-Key
Value: {{apiKey}}
Add to: Header / Query Param
```

#### OAuth 2.0
```
Grant Type: Authorization Code ▼
Callback URL: {{callbackUrl}}
Auth URL: https://...
Token URL: https://...
Client ID: {{clientId}}
Client Secret: {{clientSecret}}
Scope: read write
```

---

## 6. Response Panel

### 6.1 Response Tabs

| Tab | Content |
|-----|---------|
| Body | Response body với formatting |
| Headers | Response headers |
| Timeline | Request timing waterfall |
| Cookies | Response cookies |
| Test Results | Test execution results |

### 6.2 Body View Modes

| Mode | Description |
|------|-------------|
| Pretty | Formatted JSON/XML/HTML |
| Raw | Raw response text |
| Preview | HTML preview |

### 6.3 Response Status Badges

```
┌─────────────────────────────────────────────────────┐
│ Status: 200 OK     Time: 245ms     Size: 1.2 KB     │
│                                                     │
│  ● 2xx Success (Green)                              │
│  ● 3xx Redirect (Blue)                              │
│  ● 4xx Client Error (Orange)                        │
│  ● 5xx Server Error (Red)                          │
└─────────────────────────────────────────────────────┘
```

---

## 7. Luồng chức năng

### 7.1 Gửi Request

```
[User clicks "Send"]
        ↓
    ┌───────────────────┐
    │ Validate URL       │
    │ Resolve variables  │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Show loading        │
    │ indicator           │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Execute pre-        │
    │ request script     │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Send HTTP request   │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Receive response    │
    │ Capture timeline   │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Run test scripts   │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Save to history    │
    │ Display response    │
    └───────────────────┘
```

### 7.2 Variable Resolution

```
Raw URL:
https://{{baseUrl}}/{{version}}/users

With variables:
baseUrl = api.example.com
version = v2

Resolved:
https://api.example.com/v2/users
```

### 7.3 Generate Data Flow

```
[User clicks "Generate Data 💡"]
        ↓
    ┌───────────────────┐
    │ Open generator     │
    │ modal/panel       │
    └───────────────────┘
        ↓
[User selects fields to generate]
        ↓
[User clicks "Generate"]
        ↓
    ┌───────────────────┐
    │ Generate values     │
    │ based on schema     │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Preview results     │
    └───────────────────┘
        ↓
[User applies or cancels]
```

---

## 8. Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Ctrl/Cmd + Enter | Send request |
| Ctrl/Cmd + S | Save request |
| Ctrl/Cmd + B | Beautify body |
| Ctrl/Cmd + D | Duplicate request |
| Ctrl/Cmd + Shift + C | Copy as cURL |
| Tab | Navigate between fields |
| Ctrl/Cmd + Z | Undo |
| Ctrl/Cmd + Shift + Z | Redo |

---

## 9. Error States

### Network Error
```
┌─────────────────────────────────────────────────────┐
│ Status: ERR_NETWORK     Time: -                      │
│                                                     │
│ ⚠️ Network Error                                    │
│                                                     │
│ Could not connect to the server. Check your         │
│ network connection or the server URL.                │
│                                                     │
│ [Show Details]                                     │
│ [Retry]                                            │
└─────────────────────────────────────────────────────┘
```

### Timeout
```
┌─────────────────────────────────────────────────────┐
│ Status: TIMEOUT     Time: 30000ms                   │
│                                                     │
│ ⏱️ Request Timed Out                                 │
│                                                     │
│ The request took too long to complete.              │
│                                                     │
│ [Retry]  [Increase Timeout]                         │
└─────────────────────────────────────────────────────┘
```

### SSL Error
```
┌─────────────────────────────────────────────────────┐
│ Status: SSL_ERROR     Time: 123ms                    │
│                                                     │
│ 🔒 SSL Certificate Error                              │
│                                                     │
│ Unable to verify the server's SSL certificate.       │
│                                                     │
│ ☐ Disable SSL verification for this request          │
│                                                     │
│ [Retry]  [Cancel]                                   │
└─────────────────────────────────────────────────────┘
```

---

## 10. Related Screens

- [../project/02-project-view.md](../project/02-project-view.md) - Project view
- [02-request-history.md](02-request-history.md) - Request history
- [../../tests/01-test-editor.md](../../tests/01-test-editor.md) - Test editor

---

## 11. Acceptance Criteria

- [ ] Có thể chọn HTTP method
- [ ] Có thể nhập URL với variable interpolation
- [ ] URL validation hoạt động
- [ ] Params editor cho phép add/edit/delete/query params
- [ ] Headers editor cho phép add/edit/delete headers
- [ ] Body editor hỗ trợ tất cả modes
- [ ] Auth tab hỗ trợ tất cả auth types
- [ ] Variables được resolve trước khi gửi
- [ ] Response hiển thị với formatting
- [ ] Có thể copy response
- [ ] Có thể save response as example
- [ ] Request được save vào history
- [ ] Timeline tab hiển thị timing info
- [ ] Error states xử lý đúng
- [ ] Keyboard shortcuts hoạt động
