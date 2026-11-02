---
description: Convert approved test scenarios into maintainable Playwright TypeScript automation using Page Object Model architecture and project automation standards.
---

# Feature Automation Workflow

## Goal

Create resilient Playwright automation from approved test scenarios.

---

## Step 1: Review Inputs

Required:

- Approved Requirement
- Approved Test Scenarios

Verify:

- Permissions understood
- Business rules documented
- Calculations understood

---

## Step 2: Design Page Objects

Create:

- Page Object classes
- Reusable actions
- Stable locators

Follow:

- page-object-model.md
- playwright-standards.md

---

## Step 3: Select Locator Strategy

Priority:

1. getByRole()
2. getByLabel()
3. getByTestId()

Avoid:

- XPath
- brittle CSS selectors
- generated class names

---

## Step 4: Design Assertions

Verify:

- Business outcome
- UI state
- Permission behavior

Do not rely solely on success messages.

---

## Step 5: Implement Tests

Follow:

Arrange
Act
Assert

Structure:

tests/pages/*.page.ts

tests/e2e/*.spec.ts

---

## Step 6: Validate Reliability

Verify:

- No hardcoded waits
- Independent execution
- Parallel execution
- Deterministic behavior

---

## Deliverables

- Page Objects
- Playwright Tests
- Locator Strategy
- Assertion Plan