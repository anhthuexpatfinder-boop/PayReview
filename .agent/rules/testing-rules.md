# Testing & Quality Assurance Rules

These rules establish the test engineering taxonomy, coverage requirements, and defect-to-regression mandates for PayReview.

## 1. Test Coverage Taxonomy

For every feature or business requirement, the test suite must include coverage across four mandatory pillars:
1. **Happy Path (Positive)**: Standard successful business journey meeting acceptance criteria.
2. **Alternate Path**: Valid alternative paths (e.g., zero increase, approval delegate, re-submission).
3. **Negative / Exception**: Validation failures, out-of-range inputs, budget cap breeches, network failure handling.
4. **Boundary & Stress**: Boundary conditions (0%, max caps, rounding edges, large amounts).
5. **Authorization / Security**: RBAC enforcement, unauthorized route attempts, data masking.

## 2. Assertion Standards

- **Assert Observable Business Outcomes**: Do not rely exclusively on temporary notification banners, toast popups, or HTTP 200 response codes.
- **Verify Persisted State**: Verify that values in database/grid state, calculation summaries, and exported files reflect the intended change.
- **Verify UI Integrity**: Ensure disabled buttons, loading states, and error validation text match expectations.

## 3. Defect-to-Regression Mandate

Every defect, production bug, or automation failure must be converted into durable regression coverage:

### Step 1: Classify Root Cause
Categorize each bug into one of the following root causes:
- `Business Rule`: Missing requirement or misunderstood logic.
- `Calculation`: Precision, rounding, or formula calculation bug.
- `Authorization`: Broken access control, permission leakage, or missing route guard.
- `Data`: Incompatible seed data, null pointer, or missing schema field.
- `UI`: Rendering defect, synchronization glitch, or input masking failure.
- `Automation Gap`: Flaky test, invalid locator, or timing issue.

### Step 2: Mandatory Regression Triad
For every fixed defect, author at minimum:
1. **Direct Regression Test (Positive)**: Validates that the original scenario works correctly.
2. **Negative Test**: Validates that bad inputs or unauthorized attempts are rejected.
3. **Boundary / Neighboring Test**: Validates boundary cases around the defect to prevent adjacent regressions.

## 4. Test Review Criteria

When reviewing automated or manual test cases, evaluate:
- **Determinism**: Zero flakiness; tests must pass 100% of the time across test runs.
- **Independence**: Tests must not share mutable state or depend on run order.
- **Readability**: Follow Arrange-Act-Assert (AAA) pattern with descriptive test names.
