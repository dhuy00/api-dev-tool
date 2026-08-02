# Màn hình Test Suite Manager

## 1. Tổng quan

- **Mã màn hình:** TEST-003
- **Tên màn hình:** Test Suite Manager
- **Loại:** Management Screen
- **Vị trí:** Project → Test Suites tab
- **Yêu cầu:** Editor role trở lên

---

## 2. Mục đích

Quản lý test suites - tổng hợp các tests liên quan, chạy nhiều tests cùng lúc, xem test reports.

---

## 3. Layout

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Test Suites                                              [+ New Test Suite] │
│  ───────────────────────────────────────────────────────────────────────── │
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │                                                                          │ │
│  │  📋 Authentication Tests                            [▶ Run] [⚙️] [🗑️] │ │
│  │  ─────────────────────────────────────────────────────────────────────  │ │
│  │                                                                          │ │
│  │  Test Suite for all authentication endpoints                            │ │
│  │                                                                          │ │
│  │  Tests: 8    Passed: 6    Failed: 2    Last Run: 2h ago              │ │
│  │                                                                          │ │
│  │  Requests:                                                               │ │
│  │  • POST /auth/login                                    ✓              │ │
│  │  • POST /auth/register                                 ✓              │ │
│  │  • POST /auth/logout                                   ✓              │ │
│  │  • GET /session                                       ✗              │ │
│  │  • PUT /session/refresh                                ✓              │ │
│  │  • DELETE /session                                    ✗              │ │
│  │  • POST /password/reset                                ○              │ │
│  │  • POST /password/forgot                               ○              │ │
│  │                                                                          │ │
│  │  Environment: Development                                               │ │
│  │                                                                          │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │                                                                          │ │
│  │  📋 User Management Tests                          [▶ Run] [⚙️] [🗑️]  │ │
│  │  ─────────────────────────────────────────────────────────────────────  │ │
│  │                                                                          │ │
│  │  Comprehensive tests for user management APIs                           │ │
│  │                                                                          │ │
│  │  Tests: 12    Passed: 10    Failed: 2    Last Run: 1d ago             │ │
│  │                                                                          │ │
│  │  Requests:                                                               │ │
│  │  • GET /users                                         ✓              │ │
│  │  • POST /users                                        ✓              │ │
│  │  • GET /users/:id                                     ✗              │ │
│  │  • PUT /users/:id                                     ✓              │ │
│  │                                                                          │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │                                                                          │ │
│  │  📋 Order Processing Tests                           [▶ Run] [⚙️] [🗑️] │ │
│  │  ─────────────────────────────────────────────────────────────────────  │ │
│  │                                                                          │ │
│  │  Tests for order creation and management                                │ │
│  │                                                                          │ │
│  │  Tests: 5    Passed: 5    Failed: 0    Last Run: 3d ago              │ │
│  │                                                                          │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Các thành phần UI

### 4.1 Header
- **Title:** "Test Suites"
- **Create button:** "+ New Test Suite"

### 4.2 Suite Card
- **Name:** Suite name
- **Description:** Brief description
- **Stats:** Tests count, Pass/Fail counts
- **Last run:** Timestamp
- **Request list:** With pass/fail icons
- **Environment badge:** Which env used
- **Actions:** Run, Settings, Delete

### 4.3 Create Suite Modal

```
┌─────────────────────────────────────────┐
│  Create Test Suite                  [X] │
│  ────────────────────────────────────── │
│                                          │
│  Suite Name *                             │
│  ┌─────────────────────────────────────┐│
│  │ Authentication Tests                  ││
│  └─────────────────────────────────────┘│
│                                          │
│  Description                             │
│  ┌─────────────────────────────────────┐│
│  │ Test suite for auth endpoints       ││
│  └─────────────────────────────────────┘│
│                                          │
│  Select Requests                          │
│  ┌─────────────────────────────────────┐│
│  │ ✓ POST /auth/login                  ││
│  │ ✓ POST /auth/register               ││
│  │ ☐ GET /users (not selected)         ││
│  │ ☐ POST /users                       ││
│  └─────────────────────────────────────┘│
│                                          │
│  Environment                             │
│  ┌─────────────────────────────────────┐│
│  │ Development ▼                        ││
│  └─────────────────────────────────────┘│
│                                          │
│  ┌─────────────────────────────────────┐│
│  │           CREATE SUITE                 ││
│  └─────────────────────────────────────┘│
│                                          │
│        [Cancel]                          │
│                                          │
└─────────────────────────────────────────┘
```

---

## 5. Test Suite Report

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Test Suite Report: Authentication Tests                                   │
│  ───────────────────────────────────────────────────────────────────────── │
│                                                                              │
│  Run: Aug 2, 2026 2:30 PM · Environment: Development · Duration: 1.2s       │
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │  Summary                                [Export Report] [Run Again]   │ │
│  │  ───────────────────────────────────────────────────────────────────  │ │
│  │                                                                              │ │
│  │       8            6            2            0            1.2s           │ │
│  │     Total        Passed       Failed       Skipped       Duration          │ │
│  │                                                                              │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │  Detailed Results                                                        │ │
│  │  ───────────────────────────────────────────────────────────────────  │ │
│  │                                                                              │ │
│  │  ✓ POST /auth/login                              245ms                  │ │
│  │     ✓ Status code is 200                                                 │ │
│  │     ✓ Response has token                                                 │ │
│  │     ✓ Response time under 500ms                                          │ │
│  │                                                                              │ │
│  │  ✓ POST /auth/register                           189ms                  │ │
│  │     ✓ Status code is 201                                                 │ │
│  │     ✓ Response has user data                                             │ │
│  │                                                                              │ │
│  │  ✗ GET /session                                  89ms                   │ │
│  │     ✓ Status code is 401                                                │ │
│  │     ✗ Response has session data           Expected: present, Got: null │ │
│  │                                                                              │ │
│  │  ...                                                                     │ │
│  │                                                                              │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. Luồng chức năng

### 6.1 Chạy Suite

```
[User clicks "Run" on suite]
        ↓
    ┌───────────────────┐
    │ Select environment  │
    │ (if not set)        │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Enqueue suite run   │
    │ job                │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Execute each        │
    │ request + tests    │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Collect results     │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Generate report     │
    │ Display results    │
    └───────────────────┘
```

### 6.2 Tạo Suite

```
[User clicks "+ New Test Suite"]
        ↓
    ┌───────────────────┐
    │ Open create modal   │
    └───────────────────┘
        ↓
[User enters name, description]
        ↓
[User selects requests]
        ↓
[User selects environment]
        ↓
[User clicks "Create"]
        ↓
    ┌───────────────────┐
    │ Create test suite  │
    └───────────────────┘
```

---

## 7. Related Screens

- [01-test-editor.md](01-test-editor.md) - Test editor
- [02-test-results.md](02-test-results.md) - Test results

---

## 8. Acceptance Criteria

- [ ] Hiển thị danh sách test suites
- [ ] Hiển thị stats cho mỗi suite
- [ ] Có thể tạo test suite mới
- [ ] Có thể chạy test suite
- [ ] Có thể xem detailed report
- [ ] Có thể export report
- [ ] Có thể edit suite settings
- [ ] Có thể delete suite
- [ ] Failed tests hiển thị chi tiết
