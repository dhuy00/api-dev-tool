# Màn hình Test Editor

## 1. Tổng quan

- **Mã màn hình:** TEST-001
- **Tên màn hình:** Test Editor
- **Loại:** Editor Screen
- **Vị trí:** Request → Tests tab hoặc Test Suite view
- **Yêu cầu:** Editor role trở lên

---

## 2. Mục đích

Viết và quản lý test scripts cho requests. Tests được chạy sau mỗi request execution và kiểm tra response.

---

## 3. Layout

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│  Test Editor                                              [Run Tests] [Save]           │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                 │
│  ┌───────────────────────────────────────────────────────────────────────────────────┐ │
│  │  Tests                                     [+ Add Test] [⚙️ Auto-generate]        │ │
│  ├───────────────────────────────────────────────────────────────────────────────────┤ │
│  │                                                                                   │ │
│  │  ┌─────────────────────────────────────────────────────────────────────────────┐ │ │
│  │  │ 📋 Test: Status code is 200                          [▶] [✏️] [🗑️]      │ │ │
│  │  │                                                                          │ │ │
│  │  │ pm.test("Status code is 200", () => {                                   │ │ │
│  │  │     pm.response.to.have.status(200);                                     │ │ │
│  │  │ });                                                                      │ │ │
│  │  │                                                                          │ │ │
│  │  │ Status: ● Pass · Last run: 2:30 PM                                      │ │ │
│  │  └─────────────────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                                   │ │
│  │  ┌─────────────────────────────────────────────────────────────────────────────┐ │ │
│  │  │ 📋 Test: Response has success field                [▶] [✏️] [🗑️]      │ │ │
│  │  │                                                                          │ │ │
│  │  │ pm.test("Response has success field", () => {                            │ │ │
│  │  │     const response = pm.response.json();                                  │ │ │
│  │  │     pm.expect(response).to.have.property('success');                      │ │ │
│  │  │     pm.expect(response.success).to.equal(true);                          │ │ │
│  │  │ });                                                                      │ │ │
│  │  │                                                                          │ │ │
│  │  │ Status: ● Pass · Last run: 2:30 PM                                      │ │ │
│  │  └─────────────────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                                   │ │
│  │  ┌─────────────────────────────────────────────────────────────────────────────┐ │ │
│  │  │ 📋 Test: Response time under 500ms                [▶] [✏️] [🗑️]      │ │ │
│  │  │                                                                          │ │ │
│  │  │ pm.test("Response time under 500ms", () => {                             │ │ │
│  │  │     pm.expect(pm.response.responseTime).to.be.below(500);                 │ │ │
│  │  │ });                                                                      │ │ │
│  │  │                                                                          │ │ │
│  │  │ Status: ● Pass · Last run: 2:30 PM                                      │ │ │
│  │  └─────────────────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                                   │ │
│  │  [+ Add Test]                                                                   │ │
│  │                                                                                   │ │
│  └───────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                                 │
│  ┌───────────────────────────────────────────────────────────────────────────────────┐ │
│  │  Snippets Library                                                               │ │
│  ├───────────────────────────────────────────────────────────────────────────────────┤ │
│  │                                                                                   │ │
│  │  Status Code     Response Body    Headers       Cookies       Variables          │ │
│  │                                                                                   │ │
│  │  ┌────────────────┐ ┌────────────────┐ ┌────────────────┐ ┌────────────────┐       │ │
│  │  │ Status equals │ │ JSON has key  │ │ Header exists │ │ Cookie exists │       │ │
│  │  └────────────────┘ └────────────────┘ └────────────────┘ └────────────────┘       │ │
│  │  ┌────────────────┐ ┌────────────────┐ ┌────────────────┐ ┌────────────────┐       │ │
│  │  │ Status in [ ] │ │ Array has len │ │ Header equals │ │ Set variable │       │ │
│  │  └────────────────┘ └────────────────┘ └────────────────┘ └────────────────┘       │ │
│  │                                                                                   │ │
│  └───────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                                 │
└───────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Các thành phần UI

### 4.1 Header
- **Title:** "Test Editor"
- **Run Tests button:** Run all tests
- **Save button:** Save tests

### 4.2 Test List
- **Add Test button:** Add new test
- **Auto-generate button:** Generate tests from schema/response

### 4.3 Test Card
- **Name:** Descriptive test name
- **Code editor:** Monaco/CodeMirror editor
- **Status badge:** Pass/Fail
- **Last run time:** Timestamp
- **Actions:** Run, Edit, Delete

### 4.4 Snippets Library
- **Category tabs:** Status Code, Response Body, Headers, Cookies, Variables
- **Snippet cards:** Click to insert

### 4.5 Code Editor
- Syntax highlighting for JavaScript
- Autocomplete for pm.* APIs
- Error indicators
- Line numbers

---

## 5. Test Card Expanded (Edit Mode)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Test Name                                                                   │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │ Status code is 200                                                   │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  Code                                                                         │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │ 1 │ pm.test("Status code is 200", () => {                           │ │
│  │ 2 │     pm.response.to.have.status(200);                             │ │
│  │ 3 │ });                                                              │ │
│  │ 4 │                                                                  │ │
│  │   │                                                                  │ │
│  │   │                                                                  │ │
│  │   │                                                                  │ │
│  │   │                                                                  │ │
│  │   │                                                                  │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  [Cancel]  [Save Test]                                                      │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. Luồng chức năng

### 6.1 Viết Test

```
[User clicks "+ Add Test"]
        ↓
[New test template appears]
        ↓
[User enters test name]
        ↓
[User writes test code]
        ↓
[Real-time syntax validation]
        ↓
[User clicks "Save"]
        ↓
    ┌───────────────────┐
    │ Save to test suite   │
    └───────────────────┘
```

### 6.2 Chạy Tests

```
[User clicks "Run Tests"]
        ↓
    ┌───────────────────┐
    │ Send request          │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Receive response      │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Execute each test    │
    │ in sequence          │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Collect results      │
    │ (pass/fail/error)   │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Update UI           │
    │ Show results        │
    └───────────────────┘
```

### 6.3 Auto-generate Tests

```
[User clicks "Auto-generate"]
        ↓
    ┌───────────────────┐
    │ Open generator       │
    │ panel/modal         │
    └───────────────────┘
        ↓
[System analyzes request + response]
        ↓
    ┌───────────────────┐
    │ Generate test       │
    │ candidates         │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Show preview         │
    │ with tests          │
    └───────────────────┘
        ↓
[User selects tests to add]
        ↓
[User clicks "Add Selected"]
        ↓
    ┌───────────────────┐
    │ Add tests to suite   │
    └───────────────────┘
```

---

## 7. Snippets

### Status Code Snippets
| Name | Code |
|------|------|
| Status equals | `pm.expect(pm.response).to.have.status(200);` |
| Status in range | `pm.expect(pm.response.code).to.be.within(200, 299);` |

### Response Body Snippets
| Name | Code |
|------|------|
| JSON has key | `pm.expect(response).to.have.property('key');` |
| JSON value equals | `pm.expect(response.value).to.equal(expected);` |
| Array has length | `pm.expect(response.items).to.have.lengthOf(10);` |

### Header Snippets
| Name | Code |
|------|------|
| Header exists | `pm.expect(pm.response.headers).to.have.property('Content-Type');` |
| Header equals | `pm.expect(pm.response.headers.get('Content-Type')).to.include('application/json');` |

---

## 8. Test Results

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Test Results                                              Total: 3 · 3 Passed │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ✓ Status code is 200                                          12ms         │
│     ● Pass                                                                  │
│                                                                              │
│  ✓ Response has success field                                8ms          │
│     ● Pass                                                                  │
│                                                                              │
│  ✓ Response time under 500ms                                  5ms          │
│     ● Pass                                                                  │
│                                                                              │
│  ──────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  Total Duration: 25ms                                                       │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 9. Error States

### Failed Test
```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ✗ Status code is 200                                             3ms          │
│     ● Fail                                                                   │
│                                                                              │
│  AssertionError: expected 404 to equal 200                                  │
│      at ...                                                                 │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Test Error
```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ⚠ Status code is 200                                             -          │
│     ● Error                                                                 │
│                                                                              │
│  ReferenceError: response is not defined                                   │
│      at line 2                                                            │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 10. Related Screens

- [02-test-results.md](02-test-results.md) - Full test results view
- [03-test-suite-manager.md](03-test-suite-manager.md) - Suite management

---

## 11. Acceptance Criteria

- [ ] Có thể viết test với syntax highlighting
- [ ] Có thể sử dụng snippets
- [ ] Tests chạy sau request execution
- [ ] Results hiển thị pass/fail/error
- [ ] Có thể auto-generate tests
- [ ] Có thể chạy individual test
- [ ] Có thể delete tests
- [ ] Tests được save
- [ ] Error messages hiển thị chi tiết
