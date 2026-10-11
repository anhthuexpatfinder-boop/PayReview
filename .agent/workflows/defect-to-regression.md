---
description: Analyze defects, determine root causes, and create regression coverage that prevents recurrence of the issue. 
---

# Defect to Regression Workflow

## Goal

Convert every defect into meaningful regression coverage.

---

## Step 1: Analyze Defect

Document:

- Expected Behavior
- Actual Behavior
- Impact
- Affected Roles

---

## Step 2: Determine Root Cause

Classify:

- Business Rule
- Calculation
- Authorization
- Data
- UI
- Automation Gap

---

## Step 3: Assess Risk

High:

- Compensation Errors
- Unauthorized Access
- Incorrect Approvals

Medium:

- Workflow Failures
- Notification Issues

Low:

- Cosmetic Issues

---

## Step 4: Identify Missing Coverage

Determine why the issue was not detected earlier.

Examples:

- Missing test case
- Missing automation
- Missing boundary test
- Missing authorization test

---

## Step 5: Create Regression Coverage

Generate:

- Positive Scenario
- Negative Scenario
- Boundary Scenario

---

## Step 6: Automation Recommendation

Determine:

- Existing test update
- New automated test
- New monitoring requirement

---

## Deliverables

- Root Cause Analysis
- Risk Assessment
- Regression Test Coverage
- Automation Recommendations