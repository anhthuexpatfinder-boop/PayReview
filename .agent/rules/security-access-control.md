# Security & Access Control Rules

These rules govern role-based access control (RBAC), data visibility, authorization, and tenant isolation in PayReview.

## 1. Role Permission Matrix Baseline

Actions must be evaluated against the standard matrix for each role:

| Action | HR Admin | Line Manager | Employee |
| :--- | :--- | :--- | :--- |
| **View All Cycles** | Yes | No (Assigned only) | No |
| **View Peer / Superiors Compensation** | Yes | No | No |
| **View Direct Reports Compensation** | Yes | Yes | No |
| **View Own Finalized Compensation** | Yes | Yes (if published) | Yes (if published) |
| **Create / Configure Cycles** | Yes | No | No |
| **Recommend Increases** | Yes (Override) | Yes (Team only) | No |
| **Submit Team Reviews** | Yes | Yes | No |
| **Approve / Finalize Reviews** | Yes | No (Unless designated Approver) | No |

## 2. Core Security Validation Mandates

### A. Authorized Access (Positive Tests)
- Verify authorized roles can perform permitted actions seamlessly.
- Verify data reflects proper tenant and reporting-tree scoping.

### B. Unauthorized Access (Negative Tests)
- Verify restricted roles are blocked from performing forbidden actions (returns HTTP 403 / Access Denied).
- Verify blocked actions cannot be performed via direct API requests or form manipulations.

### C. Visibility & Field Masking Rules
- Unauthorized users must not see sensitive compensation fields (salary, bonus, rating, budget numbers).
- Sensitive fields must be **omitted from the API response and DOM**, not merely hidden via CSS (`display: none` or opacity).

## 3. High-Risk Security Test Scenarios

- **Direct URL Access**: Attempting to navigate directly to `/admin/cycles`, `/review/manager/:id`, or specific employee detail URLs as an unauthorized role.
- **Session Expiration**: Attempting mutations after session token expiry must redirect cleanly to login without persisting changes.
- **Role Switching & Permission Changes**: When an admin revokes or alters a user's role while active, subsequent requests must immediately enforce the new permission tier.
- **Concurrent Access**: Multiple managers editing the same employee or budget pool must handle race conditions deterministically.
