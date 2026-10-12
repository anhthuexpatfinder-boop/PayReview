# Requirements Analysis Rules

These rules govern the intake and evaluation of user stories, feature specs, change requests, and bug reports.

## 1. Mandatory Analysis Checklist

Whenever analyzing requirements, extract and document each of the following components:
1. **Actors & Roles**: Define who interacts with the feature (HR Admin, Line Manager, Employee, Approver).
2. **Preconditions**: Required authentication, permissions, review cycle state, and prerequisite data.
3. **Business Rules**: Formula specifications, validation thresholds, budget caps, approval workflows.
4. **Visibility & Data Masking**: Fields that must be hidden or masked per role.
5. **Edge & Boundary Conditions**: Zero values, upper/lower bounds, extreme inputs, concurrent submissions.
6. **Risk Assessment**: Categorize risks into High, Medium, or Low.

## 2. Risk Classification Framework

- **High Risk**:
  - Salary, merit increase, bonus, or proration calculations.
  - Budget allocation, consumption, or overdraft handling.
  - Access control, authorization bypass, and permission boundaries.
  - Approval state transitions and final sign-offs.
- **Medium Risk**:
  - Workflow transitions (Draft → Open → Submitted).
  - Notifications, alerts, and reminder triggers.
  - Export and import data mappings (CSV, Excel).
- **Low Risk**:
  - Cosmetic UI layout, typography, and styling.
  - Sorting and filtering in tables without data mutation.

## 3. Ambiguity Gate & Stop Criteria

- **Rule**: If a requirement is missing mathematical formulas, rounding behavior, permission definitions, or state transition constraints, **do not make assumptions**.
- **Action**: Stop and list all ambiguities under `### Open Questions`. Prompt the stakeholder or user for resolution prior to test generation or test automation.

## 4. Required Scenario Deliverables

Every requirement analysis must produce:
- **Happy Path Scenarios**: Standard expected user journeys.
- **Alternate Path Scenarios**: Optional paths, secondary approvals, zero increases.
- **Negative Scenarios**: Validation errors, budget overruns, out-of-range inputs.
- **Boundary Scenarios**: Min/max ranges, 0%, 100% budget, precision boundaries.
- **Authorization Scenarios**: Role-based access validation and unauthorized attempt denials.
