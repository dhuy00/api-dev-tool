# Màn hình Flow Results

## 1. Tổng quan

- **Mã màn hình:** FLOW-002
- **Tên màn hình:** Flow Execution Results
- **Loại:** Results Screen
- **Vị trí:** Flow Builder → Run → Results panel
- **Yêu cầu:** Editor role trở lên

---

## 2. Mục đích

Hiển thị kết quả chi tiết sau khi chạy một flow. Giúp debug và verify flow execution.

---

## 3. Layout

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│  Flow Results: Login Flow                              [Re-run] [Export] [⋮]            │
│  ─────────────────────────────────────────────────────────────────────────────────────── │
│                                                                                          │
│  Run: Aug 2, 2026 2:30 PM · Duration: 2.3s · Status: ✓ Success                          │
│                                                                                          │
│  ┌────────────────────────────────────────────────────────────────────────────────────┐ │
│  │  Summary                                                               [▼]        │ │
│  ├────────────────────────────────────────────────────────────────────────────────────┤ │
│  │                                                                                    │ │
│  │  Nodes: 4/4 executed · Variables: 2 extracted · Status: Success                 │ │
│  │                                                                                    │ │
│  │  ✓ Start              → ✓ POST /auth/login          → ⏱ Delay                   │ │
│  │                           ↓ 245ms                                              │ │
│  │                           ↓ 200 OK                                              │ │
│  │                           ↓ Extracted: token, userId                           │ │
│  │                                                                                    │ │
│  │                    → ✓ GET /users/profile             → ✓ Stop                   │ │
│  │                        ↓ 189ms                                                 │ │
│  │                        ↓ 200 OK                                                 │ │
│  │                                                                                    │ │
│  └────────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                          │
│  ┌────────────────────────────────────────────────────────────────────────────────────┐ │
│  │  Node Details                                                               [🔍]   │ │
│  ├────────────────────────────────────────────────────────────────────────────────────┤ │
│  │                                                                                    │ │
│  │  ┌────────────────────────────────────────────────────────────────────────────┐  │ │
│  │  │ ✓ POST /auth/login                                          [245ms]     │  │ │
│  │  │                                                                          │  │ │
│  │  │ Request                                                                    │  │ │
│  │  │ POST https://api.example.com/auth/login                                   │  │ │
│  │  │ Headers: Content-Type: application/json                                  │  │ │
│  │  │ Body:                                                                      │  │ │
│  │  │ { "email": "user@example.com", "password": "••••••••" }                  │  │ │
│  │  │                                                                          │  │ │
│  │  │ Response                                                                   │  │ │
│  │  │ Status: 200 OK · Time: 245ms · Size: 1.2 KB                              │  │ │
│  │  │ {                                                                           │  │ │
│  │  │   "success": true,                                                         │  │ │
│  │  │   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",                     │  │ │
│  │  │   "userId": "usr_abc123"                                                   │  │ │
│  │  │ }                                                                           │  │ │
│  │  │                                                                          │  │ │
│  │  │ Variables Extracted                                                        │  │ │
│  │  │ • authToken = "eyJhbGciOiJIUzI1NiIs..."                                  │  │ │
│  │  │ • userId = "usr_abc123"                                                    │  │ │
│  │  │                                                                          │  │ │
│  │  └────────────────────────────────────────────────────────────────────────────┘  │ │
│  │                                                                                    │ │
│  │  ┌────────────────────────────────────────────────────────────────────────────┐  │ │
│  │  │ ✓ GET /users/profile                                          [189ms]     │  │ │
│  │  │                                                                          │  │ │
│  │  │ Request                                                                    │  │ │
│  │  │ GET https://api.example.com/users/profile                                 │  │ │
│  │  │ Headers: Authorization: Bearer {{authToken}}                              │  │ │
│  │  │                                                                            │  │ │
│  │  │ Response                                                                   │  │ │
│  │  │ Status: 200 OK · Time: 189ms · Size: 456 B                             │  │ │
│  │  │ { "id": "usr_abc123", "email": "user@example.com", "name": "John Doe" } │  │ │
│  │  │                                                                          │  │ │
│  │  └────────────────────────────────────────────────────────────────────────────┘  │ │
│  │                                                                                    │ │
│  └────────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                          │
│  ┌────────────────────────────────────────────────────────────────────────────────────┐ │
│  │  Flow Variables                                                                 │ │
│  ├────────────────────────────────────────────────────────────────────────────────────┤ │
│  │                                                                                    │ │
│  │  ┌────────────────────────────────────────────────────────────────────────────┐  │ │
│  │  │ Variable      │ Value                                       │ Scope        │  │ │
│  │  ├────────────────┼────────────────────────────────────────────┼──────────────┤  │ │
│  │  │ authToken     │ eyJhbGciOiJIUzI1NiIs...                     │ Extracted    │  │ │
│  │  │ userId        │ usr_abc123                                  │ Extracted    │  │ │
│  │  │ email         │ user@example.com                            │ Static       │  │ │
│  │  │ baseUrl       │ https://api.example.com                     │ Environment  │  │ │
│  │  └────────────────┴────────────────────────────────────────────┴──────────────┘  │ │
│  │                                                                                    │ │
│  └────────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                          │
│  ┌────────────────────────────────────────────────────────────────────────────────────┐ │
│  │  Execution History                                              [Compare]        │ │
│  ├────────────────────────────────────────────────────────────────────────────────────┤ │
│  │                                                                                    │ │
│  │  Run #4    Aug 2, 2:30 PM    2.3s    ✓ Success                                 │  │ │
│  │  Run #3    Aug 2, 1:00 PM    2.1s    ✓ Success                                 │  │ │
│  │  Run #2    Aug 1, 5:00 PM    3.2s    ✗ Failed (step 3)                       │  │ │
│  │  Run #1    Jul 31, 3:00 PM   2.4s    ✓ Success                                 │  │ │
│  │                                                                                    │ │
│  └────────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                          │
└───────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Các thành phần UI

### 4.1 Summary Header
- **Flow name**
- **Timestamp:** When run
- **Duration:** Total time
- **Status:** Pass/Fail

### 4.2 Flow Visualization
- **Mini map:** Shows flow with highlights
- **Node results:** Pass/fail status on each node

### 4.3 Node Details
- **Node name + status**
- **Duration**
- **Request details**
- **Response details**
- **Variables extracted**

### 4.4 Variables Panel
- **All variables:** Name, value, scope
- **Sensitive values:** Masked

### 4.5 Execution History
- **Past runs:** List
- **Compare button:** Compare two runs

---

## 5. Failed Flow Result

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Flow Results: Login Flow                              [Re-run] [Export]    │
│  ────────────────────────────────────────────────────────────────────────── │
│                                                                              │
│  Run: Aug 2, 2026 2:45 PM · Duration: 1.2s · Status: ✗ Failed              │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────────┐ │
│  │  Error Summary                                                          │ │
│  │  ─────────────────────────────────────────────────────────────────────  │ │
│  │                                                                              │ │
│  │  ✗ Node 3: GET /users/profile                                            │ │
│  │  Error: Request failed with status 401 Unauthorized                     │ │
│  │  Reason: Invalid or expired token                                        │ │
│  │                                                                              │ │
│  │  Possible causes:                                                         │ │
│  │  • Token expired during flow execution                                    │ │
│  │  • Token not properly extracted from login response                      │ │
│  │  • Token not passed to subsequent request                                │ │
│  │                                                                              │ │
│  │  [Debug]  [Retry from Failed Node]  [View Node Details]                 │ │
│  │                                                                              │ │
│  └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. Comparison View

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Compare Runs                               Run #4 vs Run #2        [× Close] │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Run #4 (Aug 2)     vs     Run #2 (Aug 1)    Difference                     │
│  2.3s ✓ Success            3.2s ✗ Failed                                    │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────────┐ │
│  │ Node              │ Run #4     │ Run #2     │ Status                    │ │
│  ├────────────────────┼────────────┼────────────┼───────────────────────────┤ │
│  │ Start             │ ✓          │ ✓          │ ✓ Same                    │ │
│  │ POST /auth/login  │ ✓ 245ms   │ ✓ 312ms   │ ✓ -67ms (faster)        │ │
│  │ Delay             │ ✓ 1000ms  │ ✓ 1005ms  │ ✓ Same                   │ │
│  │ GET /profile      │ ✓ 189ms   │ ✗ 401     │ ⚠️ Failed in Run #2    │ │
│  │ Stop              │ ✓          │ ✗          │ ⚠️ Not reached          │ │
│  └────────────────────┴────────────┴────────────┴───────────────────────────┘ │
│                                                                              │
│  Summary: Run #4 completed successfully. Run #2 failed at GET /profile     │
│          due to 401 Unauthorized error. The token may have been            │
│          expired during the flow execution.                                  │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 7. Related Screens

- [01-flow-canvas.md](01-flow-canvas.md) - Flow builder

---

## 8. Acceptance Criteria

- [ ] Hiển thị flow visualization với results
- [ ] Mỗi node hiển thị pass/fail status
- [ ] Duration cho mỗi node
- [ ] Request/response details hiển thị
- [ ] Variables extracted hiển thị
- [ ] Failed node hiển thị error chi tiết
- [ ] Có thể retry từ failed node
- [ ] Có thể compare runs
- [ ] Có thể export results
- [ ] Execution history hiển thị past runs
