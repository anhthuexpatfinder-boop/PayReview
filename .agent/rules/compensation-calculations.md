# Compensation Calculation Rules

These rules govern all numerical, monetary, and budget-related calculations across PayReview.

## 1. Mathematical Formulas & Precision

- **Standard Salary Increase Formula**:
  ```text
  newSalary = currentSalary * (1 + increasePercent / 100)
  ```
  *Note: Always verify formula definitions against project requirements before implementing or testing.*
- **Adjustment Amount Formula**:
  ```text
  adjustmentAmount = newSalary - currentSalary
  ```
- **Budget Metrics**:
  ```text
  budgetConsumed = sum(all adjustmentAmounts for team)
  budgetRemaining = allocatedBudget - budgetConsumed
  budgetUtilizationPercent = (budgetConsumed / allocatedBudget) * 100
  ```

## 2. Rounding & Floating-Point Precision Rules

- **Decimal Precision**: All currency values must be calculated and displayed to exactly **two decimal places** (e.g., `1,250.00`).
- **Rounding Strategy**: Use standard half-up rounding (`ROUND_HALF_UP`) unless explicit banker's rounding is defined.
- **Floating-Point Hazard Prevention**: Never perform monetary calculations using naive IEEE 754 floating-point arithmetic without proper decimal handling (e.g., convert to cents/integers or use precision libraries to prevent errors like `0.1 + 0.2 = 0.30000000000000004`).
- **Percentage Precision**: Percentages must support decimal inputs (e.g., `3.25%`, `0.05%`) and be rounded consistently.

## 3. Boundary & Edge Case Testing Requirements

Test cases must validate the following edge conditions:
- **Zero Values**: `0%` increase, `0` bonus amount, `0` current salary.
- **Minimum Values**: Smallest valid positive increase (e.g., `0.01%` or `$0.01`).
- **Maximum Values / Caps**: Maximum salary band caps, maximum allowable percentage increases.
- **High-Precision Decimals**: Inputs with recurring decimals (e.g., `3.333%`, `1/3` ratios).
- **Extreme Numbers**: Very large compensation values (e.g., `$1,000,000.00+`) to ensure no UI truncation or integer overflow.

## 4. Budget Integrity & Enforcement

- **Budget Limit Exact Match**: Validate state when `budgetConsumed === allocatedBudget` (0 remaining).
- **Budget Overrun Prevention**: If policy enforces a hard budget cap, entering an increase that causes `budgetConsumed > allocatedBudget` must block submission or trigger mandatory justification/over-budget flags.
- **Cross-Layer Validation**:
  - Test input fields in editable grids.
  - Test summary KPI cards/budget widgets.
  - Test exported CSV/Excel files to ensure numbers match displayed values exactly.
