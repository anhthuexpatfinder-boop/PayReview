---
name: compensation-validation
description: Validate compensation, salary, merit increase, bonus, and budget-related features to ensure calculation accuracy, rounding compliance, and budget integrity.
---

# Compensation Validation Workflow

## Goal

Validate all monetary calculations and budget impacts.

Use whenever requirements contain:

- Salary
- Merit increase
- Compensation
- Bonus
- Budget
- Percentage adjustment

---

## Step 1: Identify Inputs

Document:

- Current Salary
- Increase Percentage
- Bonus Amount
- Budget Allocation
- Budget Remaining

---

## Step 2: Verify Business Formula

Confirm formula definitions.

Examples:

newSalary =
currentSalary * (1 + increasePercent / 100)

Do not assume formulas.

---

## Step 3: Verify Precision

Validate:

- Two decimal places
- Currency formatting
- Rounding behavior

---

## Step 4: Perform Boundary Analysis

Include:

- Zero values (zero increase)
- Minimum values (minimum increase)
- Maximum values (maximum increase)
- Decimal percentages
- Large values (large salary values)
- Budget limit reached
- Budget exceeded

---

## Step 5: Verify Budget Impact

Validate:

- Budget Consumed
- Budget Remaining
- Budget Exceeded

---

## Step 6: Validate Displayed Results

Verify:

- Calculated values
- Display values
- Exported values

---

## Deliverables

- Calculation Matrix
- Boundary Scenarios
- Expected Results
- Budget Validation Coverage
- Validation Rules

