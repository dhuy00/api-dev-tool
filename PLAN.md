# Plan: Design App Screens (HTML)

## Context

Dự án là một nền tảng API testing/management (API Forge). Tài liệu thiết kế đã hoàn chỉnh, giờ cần chuyển sang thiết kế màn hình bằng HTML. Mỗi màn hình được thiết kế độc lập dưới dạng HTML file có thể mở trên trình duyệt.

## Thiết kế

### Cấu trúc thư mục

```
design/
├── screens/
│   ├── auth/
│   │   ├── login.html
│   │   ├── register.html
│   │   └── forgot-password.html
│   ├── workspace/
│   │   ├── workspace-list.html
│   │   └── workspace-settings.html
│   ├── main/
│   │   ├── dashboard.html         # Trang chính sau login
│   │   └── collections.html       # Browser collections
│   ├── request/
│   │   ├── request-builder.html   # Request builder (màn hình trung tâm)
│   │   ├── request-history.html
│   │   └── response-viewer.html
│   ├── environment/
│   │   └── environments.html      # Quản lý environments & variables
│   ├── test/
│   │   ├── test-suite.html       # Test suites & test cases
│   │   └── test-execution.html   # Test run results
│   ├── performance/
│   │   └── performance-dashboard.html
│   ├── flow/
│   │   └── flow-builder.html     # Request flow builder (canvas)
│   ├── documentation/
│   │   └── smart-documentation.html
│   ├── search/
│   │   └── search.html
│   └── collaboration/
│       ├── members.html
│       └── activity-log.html
├── components/
│   ├── sidebar.html
│   ├── header.html
│   ├── request-method-badge.html
│   ├── variable-tag.html
│   ├── response-timeline.html
│   └── test-result-badge.html
└── shared/
    ├── styles.css
    ├── theme.css
    └── layout-shell.html
```

### Chi tiết từng màn hình

#### 1. `auth/login.html`
- Email + password form
- OAuth buttons (Google, GitHub)
- "Forgot password" link
- "Create account" link

#### 2. `auth/register.html`
- Email, display name, password
- Email verification notice

#### 3. `main/dashboard.html` — Trang chủ workspace
- Sidebar: logo, workspace switcher, navigation menu
- Header: search bar, notifications, user avatar
- Main: recent requests, recent collections, quick actions, activity summary

#### 4. `main/collections.html` — Browser collections trong workspace
- Tree view: Collections → Folders → Requests
- Create/edit/delete/duplicate actions
- Import button (OpenAPI, Postman, cURL)
- Drag-and-drop reorder

#### 5. `request/request-builder.html` — Màn hình trung tâm
- Left panel: collections tree (collapsible)
- Center: tabbed request editor (method, URL, params, headers, body, auth)
- Right panel: response viewer (status, headers, body, timeline)
- Bottom panel: collapsible (variables, test results, console)
- Toolbar: save, send, split/vertical/horizontal view

#### 6. `request/request-history.html`
- List of past executions: timestamp, method, URL, status, duration
- Filter by status, method, date range
- Click để xem lại response

#### 7. `environment/environments.html`
- List environments
- Variable editor: key-value, scope, secret toggle
- Import/export environment

#### 8. `test/test-suite.html`
- List test suites
- Test case list: name, status, last run
- Run button, schedule button

#### 9. `test/test-execution.html`
- Test run summary: passed, failed, skipped
- Individual test result: assertion, expected vs actual
- Retest button

#### 10. `performance/performance-dashboard.html`
- Run configuration: concurrency, duration, request count
- Chart: latency distribution, RPS, error rate
- Compare runs

#### 11. `flow/flow-builder.html`
- Canvas với nodes (Request, Delay, Condition, Variable Extract, Stop)
- Node palette sidebar
- Edge drawing giữa các nodes
- Run button, step debug

#### 12. `documentation/smart-documentation.html`
- Generated docs preview
- Side-by-side edit
- Publish/draft toggle
- Version history

#### 13. `search/search.html`
- Global search input
- Filter chips: type (request, collection, env, doc)
- Result list với highlighted matches

#### 14. `collaboration/members.html`
- Member list: name, email, role, last active
- Invite button, role dropdown, remove

#### 15. `collaboration/activity-log.html`
- Chronological activity list
- Filter by type, user, date

### Phong cách thiết kế

- Dark mode default (phù hợp dev tool)
- Accent color: xanh dương tím (#6366f1)
- Font: Inter / system-ui
- Sidebar navigation cố định
- Consistent spacing (8px grid)
- Responsive (min 1280px làm chuẩn, có thể co lại)

### Các file shared cần tạo

- `shared/styles.css` — base styles, reset, typography, utilities
- `shared/theme.css` — CSS variables cho dark/light mode
- `shared/layout-shell.html` — shell HTML structure để tái sử dụng

## Thứ tự thực hiện

1. `shared/styles.css` + `shared/theme.css` — nền tảng design system
2. `main/dashboard.html` — trang chủ
3. `request/request-builder.html` — màn hình quan trọng nhất, đầu tiên trong main features
4. `main/collections.html` — navigation và structure
5. `environment/environments.html`
6. `test/test-suite.html`
7. `flow/flow-builder.html`
8. `performance/performance-dashboard.html`
9. `documentation/smart-documentation.html`
10. `search/search.html`
11. `request/request-history.html`
12. `test/test-execution.html`
13. `collaboration/members.html` + `activity-log.html`
14. `auth/login.html` + `register.html`

## Verification

Mở từng file HTML trực tiếp trên trình duyệt (file://). Kiểm tra:
- Layout không bị vỡ ở 1280px+
- Tất cả interactive elements có hover state
- Dark mode hiển thị đúng
- Navigation links hoạt động giữa các màn hình
