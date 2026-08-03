# Tổng quan Màn hình & Luồng Ứng dụng

> **Project:** API Forge — Công cụ quản lý và kiểm thử API
> **Nguồn:** Design documentation (`design/`) và Functional Requirements
> **Tổng số màn hình:** 28 màn hình

---

## Mục lục

1. [Danh sách tất cả màn hình](#1-danh-sách-tất-cả-màn-hình)
2. [Phân nhóm theo module](#2-phân-nhóm-theo-module)
3. [Luồng tổng quan](#3-luồng-tổng-quan)
4. [Chi tiết luồng điều hướng](#4-chi-tiết-luồng-điều-hướng)
5. [Bảng tra cứu nhanh](#5-bảng-tra-cứu-nhanh)

---

## 1. Danh sách tất cả màn hình

| # | Mã | Tên màn hình | Module | Loại |
|---|-----|-------------|--------|------|
| 1 | AUTH-001 | Login | Authentication | Auth |
| 2 | AUTH-002 | Register | Authentication | Auth |
| 3 | AUTH-003 | Forgot Password | Authentication | Auth |
| 4 | AUTH-004 | Verify Email | Authentication | Auth |
| 5 | AUTH-005 | Change Password | Authentication | Auth |
| 6 | WS-001 | Workspace List | Workspace | Navigation |
| 7 | WS-002 | Workspace Settings | Workspace | Settings |
| 8 | WS-003 | Workspace Members | Workspace | Settings |
| 9 | WS-004 | Invite Member | Workspace | Modal |
| 10 | PRJ-001 | Project List | Project | Content |
| 11 | PRJ-002 | Project View | Project | Content |
| 12 | PRJ-003 | Project Settings | Project | Settings |
| 13 | REQ-001 | Request Editor | Request Builder | Editor |
| 14 | REQ-002 | Request History | Request Builder | History |
| 15 | COL-001 | Collection Manager | Collections | Settings |
| 16 | ENV-001 | Environment Manager | Environments | Settings |
| 17 | ENV-002 | Environment Quick Switch | Environments | Modal |
| 18 | TEST-001 | Test Editor | Tests | Editor |
| 19 | TEST-002 | Test Results | Tests | Results |
| 20 | TEST-003 | Test Suite Manager | Tests | Settings |
| 21 | PERF-001 | Performance Dashboard | Performance | Dashboard |
| 22 | TIMELINE-001 | Request Timeline | Timeline | Analysis |
| 23 | DOC-001 | Documentation Generator | Documentation | Generator |
| 24 | FLOW-001 | Flow Canvas | Flow Builder | Editor |
| 25 | FLOW-002 | Flow Results | Flow Builder | Results |
| 26 | IMP-001 | Import/Export | Import-Export | Tool |
| 27 | SEARCH-001 | Global Search | Search | Modal |
| 28 | SET-001 | Account Settings | Settings | Settings |

---

## 2. Phân nhóm theo module

### 2.1 Authentication (5 màn hình)

| Mã | Tên | Mô tả |
|----|-----|--------|
| AUTH-001 | Login | Đăng nhập bằng email/password hoặc OAuth (Google, GitHub) |
| AUTH-002 | Register | Đăng ký tài khoản mới |
| AUTH-003 | Forgot Password | Quên mật khẩu, yêu cầu reset |
| AUTH-004 | Verify Email | Xác thực email qua link |
| AUTH-005 | Change Password | Đổi mật khẩu khi đã đăng nhập |

### 2.2 Workspace (4 màn hình)

| Mã | Tên | Mô tả |
|----|-----|--------|
| WS-001 | Workspace List | Danh sách workspaces (cá nhân + nhóm) |
| WS-002 | Workspace Settings | Cài đặt workspace (tên, mô tả, xóa) |
| WS-003 | Workspace Members | Quản lý thành viên, phân quyền |
| WS-004 | Invite Member | Modal mời thành viên mới |

### 2.3 Project (3 màn hình)

| Mã | Tên | Mô tả |
|----|-----|--------|
| PRJ-001 | Project List | Danh sách project trong workspace |
| PRJ-002 | Project View | Giao diện chính của project (collections, requests...) |
| PRJ-003 | Project Settings | Cài đặt project (tên, mô tả, xóa) |

### 2.4 Request Builder (2 màn hình)

| Mã | Tên | Mô tả |
|----|-----|--------|
| REQ-001 | Request Editor | Soạn và thực thi HTTP request |
| REQ-002 | Request History | Lịch sử các request đã thực thi |

### 2.5 Collections (1 màn hình)

| Mã | Tên | Mô tả |
|----|-----|--------|
| COL-001 | Collection Manager | Quản lý collection (đổi tên, docs, chạy collection) |

### 2.6 Environments (2 màn hình)

| Mã | Tên | Mô tả |
|----|-----|--------|
| ENV-001 | Environment Manager | Tạo/sửa/xóa environments và variables |
| ENV-002 | Environment Quick Switch | Chuyển nhanh environment qua dropdown |

### 2.7 Tests (3 màn hình)

| Mã | Tên | Mô tả |
|----|-----|--------|
| TEST-001 | Test Editor | Viết test scripts cho request |
| TEST-002 | Test Results | Xem kết quả chạy tests |
| TEST-003 | Test Suite Manager | Quản lý test suites |

### 2.8 Performance (1 màn hình)

| Mã | Tên | Mô tả |
|----|-----|--------|
| PERF-001 | Performance Dashboard | Dashboard metrics về hiệu năng request |

### 2.9 Timeline (1 màn hình)

| Mã | Tên | Mô tả |
|----|-----|--------|
| TIMELINE-001 | Request Timeline | Waterfall timing của request execution |

### 2.10 Documentation (1 màn hình)

| Mã | Tên | Mô tả |
|----|-----|--------|
| DOC-001 | Documentation Generator | Tạo tài liệu API từ collections và requests |

### 2.11 Flow Builder (2 màn hình)

| Mã | Tên | Mô tả |
|----|-----|--------|
| FLOW-001 | Flow Canvas | Canvas vẽ sequential request flow |
| FLOW-002 | Flow Results | Kết quả thực thi flow |

### 2.12 Import/Export (1 màn hình)

| Mã | Tên | Mô tả |
|----|-----|--------|
| IMP-001 | Import/Export | Nhập/xuất collections, workspaces |

### 2.13 Search (1 màn hình)

| Mã | Tên | Mô tả |
|----|-----|--------|
| SEARCH-001 | Global Search | Tìm kiếm toàn ứng dụng (Cmd/Ctrl + K) |

### 2.14 Settings (1 màn hình)

| Mã | Tên | Mô tả |
|----|-----|--------|
| SET-001 | Account Settings | Cài đặt tài khoản cá nhân |

---

## 3. Luồng tổng quan

### 3.1 Luồng chính (Happy Path)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          LUỒNG CHÍNH                                       │
└─────────────────────────────────────────────────────────────────────────────┘

  ┌──────────┐
  │  Landing  │
  └────┬─────┘
       ↓
  ┌────────────────┐      ┌──────────────────┐
  │  AUTH-001       │      │  AUTH-002         │    (chưa có account)
  │  Login          │ ───▶ │  Register         │
  └────┬───────────┘      └──────────────────┘
       │                          │
       │ (đăng nhập thành công)  │ (đăng ký + xác thực)
       ▼                          ▼
  ┌──────────────────────────────────────────┐
  │       AUTH-004  Verify Email              │    (chỉ khi đăng ký mới)
  └──────────────────────────────────────────┘
       │ (xác thực thành công)
       ▼
  ┌──────────────────────────────────────────────────────────┐
  │              WS-001  Workspace List                      │
  │        (chọn workspace hoặc tạo workspace mới)         │
  └──────────────────────────────────────────────────────────┘
       │ (chọn workspace)
       ▼
  ┌──────────────────────────────────────────────────────────┐
  │              PRJ-001  Project List                       │
  │         (chọn project hoặc tạo project mới)            │
  └──────────────────────────────────────────────────────────┘
       │ (chọn project)
       ▼
  ┌──────────────────────────────────────────────────────────┐
  │              PRJ-002  Project View                       │
  │  Sidebar chứa: Collections | Environments | Flows        │
  └──────────────────────────────────────────────────────────┘
       │
       ├────────────────────────────────────────┐
       │                                        │
       ▼                                        ▼
  ┌─────────────────┐                  ┌─────────────────┐
  │ REQ-001          │                  │ COL-001          │
  │ Request Editor   │                  │ Collection Mgr   │
  └─────────────────┘                  └─────────────────┘
       │                                        │
       │ (gửi request)                         ▼
       ▼                                  ┌─────────────────┐
  ┌─────────────────┐                     │ REQ-001          │
  │ Xem Response    │                     │ (mở request)     │
  │ + Timeline      │                     └─────────────────┘
  │ + Tests         │
  └─────────────────┘
```

### 3.2 Luồng Workspace & Team

```
┌─────────────────────────────────────────────────────────────────┐
│                    LUỒNG WORKSPACE & TEAM                      │
└─────────────────────────────────────────────────────────────────┘

  WS-001 ──▶ WS-002 ──▶ WS-003 ──▶ WS-004
 (List)    (Settings)  (Members)  (Invite)

  WS-001 Workspace List
       │
       ├── Click Workspace Card
       │       │
       │       ▼
       │   WS-002 Workspace Settings
       │       │
       │       └──▶ WS-003 Workspace Members
       │                   │
       │                   └──▶ WS-004 Invite Member
       │
       └── Click "+ New Workspace"
               │
               └── Tạo workspace mới → quay lại WS-001
```

### 3.3 Luồng Project

```
┌─────────────────────────────────────────────────────────────────┐
│                     LUỒNG PROJECT                              │
└─────────────────────────────────────────────────────────────────┘

  PRJ-001 ──▶ PRJ-002 ──▶ (REQ-001, COL-001, ENV-001...)
 (List)    (View)       (các màn hình con)

  PRJ-001 Project List
       │
       ├── Click Project Card ──▶ PRJ-002 Project View
       │
       ├── Click "+ New Project" ──▶ Tạo project mới
       │
       └── Click Project Menu ──▶ PRJ-003 Project Settings
                                       │
                                       ├── Archive
                                       ├── Duplicate
                                       └── Delete
```

---

## 4. Chi tiết luồng điều hướng

### 4.1 Luồng Authentication

```
  ┌─────────────────────────────────────────────────────────────────┐
  │              AUTHENTICATION FLOW                                │
  └─────────────────────────────────────────────────────────────────┘

  ┌──────────┐      ┌──────────┐      ┌──────────┐
  │  AUTH-001│      │  AUTH-002│      │  AUTH-003│
  │  Login   │◀────▶│ Register │      │ Forgot   │
  └────┬─────┘      └────┬─────┘      │ Password │
       │                 │             └────┬────┘
       │ (OAuth Google/  │                │
       │  GitHub)        ▼                ▼
       │          ┌──────────┐    ┌──────────────┐
       │          │  AUTH-004 │    │ Reset Email  │
       │          │  Verify   │    │ Sent         │
       │          │  Email    │    └──────────────┘
       │          └────┬─────┘
       │               │ (click link in email)
       ▼               ▼
  ┌────────────────────────┐
  │   WS-001 Workspace     │
  │   List (authenticated) │
  └────────────────────────┘

  ────────────────────────────────────────────────────────────────
  Các màn hình authenticated (có thể truy cập sau khi đăng nhập):
  • WS-001 → WS-004 (Workspace)
  • PRJ-001 → PRJ-003 (Project)
  • REQ-001 → REQ-002 (Request Builder)
  • COL-001 (Collections)
  • ENV-001 → ENV-002 (Environments)
  • TEST-001 → TEST-003 (Tests)
  • PERF-001 (Performance)
  • TIMELINE-001 (Timeline)
  • DOC-001 (Documentation)
  • FLOW-001 → FLOW-002 (Flow Builder)
  • IMP-001 (Import/Export)
  • SEARCH-001 (Global Search) - Cmd/Ctrl + K từ bất kỳ đâu
  • SET-001 (Account Settings)
```

### 4.2 Luồng Request Lifecycle

```
┌─────────────────────────────────────────────────────────────────┐
│              REQUEST LIFECYCLE FLOW                             │
└─────────────────────────────────────────────────────────────────┘

  PRJ-002 Project View
       │
       ├── Click "New Request" ──▶ REQ-001 Request Editor (blank)
       │
       ├── Click Request ──▶ REQ-001 Request Editor (pre-filled)
       │
       ├── Send Request ──▶ Response Panel (inline)
       │                         │
       │                         ├── [Body Tab] ──▶ Response body
       │                         ├── [Headers Tab] ──▶ Response headers
       │                         ├── [Timeline Tab] ──▶ TIMELINE-001
       │                         ├── [Cookies Tab] ──▶ Cookie details
       │                         └── [Test Results Tab] ──▶ TEST-002
       │
       ├── Save to Collection ──▶ COL-001 Collection Manager
       │
       └── Run Tests ──▶ TEST-001 Test Editor
                              │
                              └──▶ TEST-002 Test Results

  REQ-002 Request History
       │
       └── Click History Item ──▶ REQ-001 (re-load request)

  ┌─────────────────────────────────────────────────────────────────┐
  │              REQUEST EDITOR (REQ-001) TABS                      │
  └─────────────────────────────────────────────────────────────────┘

  ┌───────────────────────────────────────────────────────────────┐
  │  URL Bar: [Method ▼] [https://{{baseUrl}}/users]             │
  ├───────────────────────────────────────────────────────────────┤
  │  Params │ Headers │ Body │ Auth │ Pre-request │ Tests │      │
  ├───────────────────────────────────────────────────────────────┤
  │                                                               │
  │  Params ─── Query parameters (key-value table)                │
  │  Headers ─── Request headers                                  │
  │  Body ─────── JSON/XML/Form/GraphQL/etc.                      │
  │  Auth ─────── Bearer/Basic/API Key/OAuth/etc.                 │
  │  Pre-req ──── Script chạy trước request                      │
  │  Tests ────── Test scripts (TEST-001 inline)                  │
  │                                                               │
  └───────────────────────────────────────────────────────────────┘
```

### 4.3 Luồng Environment

```
┌─────────────────────────────────────────────────────────────────┐
│              ENVIRONMENT FLOW                                   │
└─────────────────────────────────────────────────────────────────┘

  PRJ-002 ──▶ ENV-001 Environment Manager
  Project      │
  View         ├── Tạo Environment mới
               ├── Thêm/Sửa Variables
               ├── Toggle Secret
               ├── Delete Environment
               │
               └──▶ ENV-002 Environment Quick Switch
                       (truy cập từ Top Bar dropdown)

  Top Bar: [🌐 Development ▼]
           ├── Development
           ├── Staging
           ├── Production
           └── Manage Environments... ──▶ ENV-001
```

### 4.4 Luồng Collections & Flow

```
┌─────────────────────────────────────────────────────────────────┐
│              COLLECTION & FLOW FLOW                             │
└─────────────────────────────────────────────────────────────────┘

  PRJ-002 ──▶ COL-001 Collection Manager
  Project      │
  View         ├── Tạo Collection mới
               ├── Thêm requests vào collection
               ├── Chạy collection (Run Collection)
               ├── Viết documentation
               └── Delete collection

  COL-001 ──▶ FLOW-001 Flow Canvas
               │
               ├── Thêm nodes (Request, Delay, Condition...)
               ├── Kết nối nodes
               ├── Validate flow
               └── Run Flow ──▶ FLOW-002 Flow Results

  COL-001 ──▶ DOC-001 Documentation Generator
                     │
                     ├── Preview docs
                     ├── Edit manually
                     └── Publish
```

### 4.5 Luồng Tests & Performance

```
┌─────────────────────────────────────────────────────────────────┐
│              TEST & PERFORMANCE FLOW                             │
└─────────────────────────────────────────────────────────────────┘

  REQ-001 ──▶ TEST-001 Test Editor
  Request    │
  Editor     ├── Viết test scripts
               ├── Sử dụng snippets
               ├── Run Tests ──▶ TEST-002 Test Results
               │                    │
               │                    ├── Pass/Fail/Error status
               │                    └── Detailed error messages
               │
               ├── Auto-generate Tests
               └── Save tests

  PRJ-002 ──▶ TEST-003 Test Suite Manager
               │
               ├── Xem tất cả test suites
               ├── Run suite
               └── Manage suites

  PRJ-002 ──▶ PERF-001 Performance Dashboard
               │
               ├── Configure load test
               ├── Run performance test
               └── View metrics (response time, throughput...)
```

### 4.6 Luồng Search & Settings

```
┌─────────────────────────────────────────────────────────────────┐
│              SEARCH & SETTINGS FLOW                             │
└─────────────────────────────────────────────────────────────────┘

  ┌─────────────────┐         ┌─────────────────┐
  │ SEARCH-001      │         │ SET-001         │
  │ Global Search   │         │ Account Settings │
  │ (Cmd/Ctrl + K)  │         │                 │
  └─────────────────┘         └─────────────────┘
         │                            │
         ├── Search requests          ├── Profile
         ├── Search collections       ├── API Keys
         ├── Search environments      ├── Preferences
         ├── Search documentation     └── Security
         ├── Search flows
         └── Command palette (">")
                                     WS-002
                                     Workspace Settings
                                     │
                                     ├── WS-003 Members
                                     └── WS-004 Invite

                                     PRJ-003
                                     Project Settings
                                     │
                                     ├── Archive
                                     ├── Duplicate
                                     └── Delete
```

---

## 5. Bảng tra cứu nhanh

### 5.1 Màn hình theo vai trò người dùng

| Vai trò | Màn hình được phép truy cập |
|---------|---------------------------|
| **Unauthenticated** | AUTH-001, AUTH-002, AUTH-003, AUTH-004 |
| **Viewer** | WS-001, PRJ-001, PRJ-002, REQ-001 (read-only), REQ-002, SEARCH-001 |
| **Editor** | Tất cả của Viewer + REQ-001 (edit), COL-001, ENV-001, ENV-002, TEST-001, FLOW-001, IMP-001 |
| **Admin/Owner** | Tất cả + WS-002, WS-003, WS-004, PRJ-003, TEST-003, PERF-001, DOC-001, SET-001 |

### 5.2 Màn hình modal vs page

| Modal Dialogs | Pages (đầy đủ) |
|--------------|----------------|
| AUTH-003 (Forgot Password) | WS-001, PRJ-001, PRJ-002, PRJ-003 |
| AUTH-004 (Verify Email) | WS-002, WS-003 |
| WS-004 (Invite Member) | REQ-001, REQ-002 |
| ENV-002 (Quick Switch) | COL-001, ENV-001 |
| SEARCH-001 (Global Search) | TEST-001, TEST-002, TEST-003 |
| | PERF-001, TIMELINE-001, DOC-001 |
| | FLOW-001, FLOW-002, IMP-001, SET-001 |

### 5.3 Keyboard shortcuts chính

| Shortcut | Action | Màn hình |
|----------|--------|---------|
| `Cmd/Ctrl + K` | Global Search | Toàn ứng dụng |
| `Cmd/Ctrl + B` | Toggle Sidebar | Toàn ứng dụng |
| `Cmd/Ctrl + P` | Quick switch project | Toàn ứng dụng |
| `Cmd/Ctrl + N` | New Request | PRJ-002 |
| `Cmd/Ctrl + Enter` | Send Request | REQ-001 |
| `Cmd/Ctrl + S` | Save Request | REQ-001 |
| `Cmd/Ctrl + W` | Close Tab | REQ-001 |

### 5.4 Dependency giữa các màn hình

```
AUTH-001 ──▶ WS-001 ──▶ PRJ-001 ──▶ PRJ-002
(Login)      (List)      (List)      (View)
                            │
                            ├──▶ REQ-001 ──▶ TEST-001 ──▶ TEST-002
                            │      │          │
                            │      │          └──▶ TEST-003
                            │      │
                            │      ├──▶ ENV-001 ──▶ ENV-002
                            │      │
                            │      ├──▶ COL-001 ──▶ FLOW-001 ──▶ FLOW-002
                            │      │
                            │      └──▶ DOC-001
                            │
                            ├──▶ WS-002 ──▶ WS-003 ──▶ WS-004
                            │
                            ├──▶ PERF-001
                            │
                            ├──▶ IMP-001
                            │
                            └──▶ PRJ-003
```

---

## 6. Tổng kết thống kê

| Thống kê | Số lượng |
|-----------|---------|
| **Tổng màn hình** | 28 |
| **Màn hình Authentication** | 5 |
| **Màn hình Workspace** | 4 |
| **Màn hình Project** | 3 |
| **Màn hình Request Builder** | 2 |
| **Màn hình Collections** | 1 |
| **Màn hình Environments** | 2 |
| **Màn hình Tests** | 3 |
| **Màn hình Flow Builder** | 2 |
| **Màn hình khác (Perf, Timeline, Docs, Search, Import, Settings)** | 6 |
| **Modal dialogs** | 5 |
| **Pages (full-screen)** | 23 |

---

*Nguồn: `design/README.md`, `design/*/`, `docs/02-requirements/functional-requirements.md`*
