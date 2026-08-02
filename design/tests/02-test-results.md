# Màn hình Test Results

## 1. Tổng quan

- **Mã màn hình:** TEST-002
- **Tên màn hình:** Test Results
- **Loại:** Results Screen
- **Vị trí:** Request → Response → Tests tab
- **Yêu cầu:** Member của project

---

## 2. Mục đích

Hiển thị kết quả chi tiết sau khi chạy tests. Giúp debug failed tests và xem test execution history.

---

## 3. Layout

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│  Test Results                                                              [↻ Re-run] │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                 │
│  ┌───────────────────────────────────────────────────────────────────────────────────┐ │
│  │  Summary                                           Run: Aug 2, 2026 2:30 PM     │ │
│  │  ──────────────────────────────────────────────────────────────────────────────  │ │
│  │                                                                                   │ │
│  │       3            3            0            0            25ms                   │ │
│  │     Total        Passed       Failed       Skipped       Duration                │ │
│  │                                                                                   │ │
│  │  ┌─────────────────────────────────────────────────────────────────────────────┐ │ │
│  │  │  ████████████████████████████████████████████████████████████████████ 100% │ │ │
│  │  └─────────────────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                                   │ │
│  └───────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                                 │
│  ┌───────────────────────────────────────────────────────────────────────────────────┐ │
│  │  Test Details                                                               [🔍] │ │
│  ├───────────────────────────────────────────────────────────────────────────────────┤ │
│  │                                                                                   │ │
│  │  Filter: [All ▼]  [✓ Pass]  [✗ Fail]  [⚠ Error]                                │ │
│  │                                                                                   │ │
│  │  ┌─────────────────────────────────────────────────────────────────────────────┐ │ │
│  │  │ ✓ Status code is 200                                          [12ms]     │ │ │
│  │  │                                                                          │ │ │
│  │  │ pm.test("Status code is 200", () => {                                   │ │ │
│  │  │     pm.response.to.have.status(200);                                     │ │ │
│  │  │ });                                                                      │ │ │
│  │  │                                                                          │ │ │
│  │  │ Result: ● Pass · Expected: 200 · Actual: 200                           │ │ │
│  │  └─────────────────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                                   │ │
│  │  ┌─────────────────────────────────────────────────────────────────────────────┐ │ │
│  │  │ ✓ Response has success field                                 [8ms]      │ │ │
│  │  │                                                                          │ │ │
│  │  │ pm.test("Response has success field", () => {                            │ │ │
│  │  │     const response = pm.response.json();                                  │ │ │
│  │  │     pm.expect(response).to.have.property('success');                      │ │ │
│  │  │     pm.expect(response.success).to.equal(true);                          │ │ │
│  │  │ });                                                                      │ │ │
│  │  │                                                                          │ │ │
│  │  │ Result: ● Pass · Expected: true · Actual: true                         │ │ │
│  │  └─────────────────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                                   │ │
│  │  ┌─────────────────────────────────────────────────────────────────────────────┐ │ │
│  │  │ ✓ Response time under 500ms                                 [5ms]      │ │ │
│  │  │                                                                          │ │ │
│  │  │ pm.test("Response time under 500ms", () => {                             │ │ │
│  │  │     pm.expect(pm.response.responseTime).to.be.below(500);                 │ │ │
│  │  │ });                                                                      │ │ │
│  │  │                                                                          │ │ │
│  │  │ Result: ● Pass · Threshold: 500ms · Actual: 245ms                       │ │ │
│  │  └─────────────────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                                   │ │
│  └───────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                                 │
│  ┌───────────────────────────────────────────────────────────────────────────────────┐ │
│  │  Test History                                                                [▼] │ │
│  ├───────────────────────────────────────────────────────────────────────────────────┤ │
│  │                                                                                   │ │
│  │  ┌───────────────────────────────────────────────────────────────────────────┐ │ │
│  │  │ Run #4    Aug 2, 2:30 PM    3/3 Pass    25ms                            │ │ │
│  │  │ Run #3    Aug 2, 2:15 PM    2/3 Pass   189ms                            │ │ │
│  │  │ Run #2    Aug 2, 1:45 PM    3/3 Pass    31ms                            │ │ │
│  │  │ Run #1    Aug 1, 5:30 PM    3/3 Pass    28ms                            │ │ │
│  │  └───────────────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                                   │ │
│  └───────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                                 │
└───────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Các thành phần UI

### 4.1 Summary Card
- **Total tests:** Number
- **Passed:** Number with green indicator
- **Failed:** Number with red indicator
- **Skipped:** Number with yellow indicator
- **Duration:** Total time
- **Progress bar:** Visual pass rate

### 4.2 Filter Bar
- **Status filter:** All, Pass, Fail, Error
- **Search:** Filter by test name

### 4.3 Test Item
- **Status icon:** ✓ (pass), ✗ (fail), ⚠ (error)
- **Name:** Test name
- **Duration:** Time taken
- **Code:** Test script
- **Result details:** Expected vs Actual

### 4.4 Test History
- **List of past runs:** With timestamps
- **Pass/fail count per run**
- **Duration per run**

---

## 5. Failed Test Detail

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ✗ Status code is 200                                           [3ms]     │
│                                                                              │
│  pm.test("Status code is 200", () => {                                   │
│      pm.response.to.have.status(200);                                     │
│  });                                                                      │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │ Result: ● Fail                                                      │ │
│  │ Expected: 200                                                      │ │
│  │ Actual: 404                                                        │ │
│  └─────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  Error Details                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │ AssertionError: expected 404 to equal 200                           │ │
│  │     at TestRunner.run (test-runner.js:123)                          │ │
│  │     at TestRunner.execute (test-runner.js:45)                       │ │
│  └─────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  Request Info                                                               │
│  POST https://api.example.com/auth/login                                   │
│                                                                              │
│  Response Info                                                              │
│  Status: 404 Not Found · Time: 156ms                                      │
│                                                                              │
│  [Debug Test]  [View Request]  [View Response]                            │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. Luồng chức năng

### 6.1 Xem Results

```
[Tests complete]
        ↓
    ┌───────────────────┐
    │ Display summary      │
    │ card                │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ List all tests      │
    │ with status        │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Filter/search        │
    │ available           │
    └───────────────────┘
```

### 6.2 Xem Test Detail

```
[User clicks on test]
        ↓
    ┌───────────────────┐
    │ Expand test item     │
    │ Show full code      │
    │ Show error details  │
    └───────────────────┘
```

### 6.3 Xem History

```
[User clicks test history]
        ↓
    ┌───────────────────┐
    │ Load past runs       │
    │ for this request    │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Display run list     │
    └───────────────────┘
```

---

## 7. Status Icons

| Icon | Status | Color |
|------|--------|-------|
| ✓ | Pass | Green |
| ✗ | Fail | Red |
| ⚠ | Error | Orange |
| ○ | Skipped | Gray |

---

## 8. Related Screens

- [01-test-editor.md](01-test-editor.md) - Test editor

---

## 9. Acceptance Criteria

- [ ] Summary hiển thị pass/fail counts
- [ ] Progress bar cho pass rate
- [ ] Từng test hiển thị status icon
- [ ] Có thể filter theo status
- [ ] Có thể search tests
- [ ] Failed tests hiển thị expected vs actual
- [ ] Error details hiển thị stack trace
- [ ] History hiển thị past runs
- [ ] Có thể re-run tests
- [ ] Có thể debug failed tests
