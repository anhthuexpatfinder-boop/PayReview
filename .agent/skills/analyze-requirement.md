# Analyze Requirement

When given a feature, user story, requirement, design, or bug fix:

## Step 1: Identify Actors

For each actor determine:

- Who can view
- Who can create
- Who can edit
- Who can approve
- Who can finalize

Common PayReview roles:

- HR Admin
- Line Manager
- Employee

## Step 2: Identify Preconditions

Document:

- Authentication requirements
- Required permissions
- Review cycle state
- Existing employee data
- Budget requirements

## Step 3: Extract Business Rules

Identify:

- Validation rules
- Calculation rules
- Approval rules
- Workflow transitions
- Visibility rules

## Step 4: Identify Risks

Rank:

High
- Compensation calculations
- Access control
- Budget enforcement

Medium
- Workflow transitions
- Notifications

Low
- UI presentation

## Step 5: Define Scenarios

Generate:

- Happy paths
- Alternate paths
- Exception paths
- Boundary scenarios
- Negative scenarios

## Step 6: Surface Ambiguities

List missing information as questions.

Do not generate automation if critical business rules or permissions are unclear.

## Output Format

### Actors

### Permissions

### Preconditions

### Business Rules

### Risks

### Happy Path

### Alternate Paths

### Exception Paths

### Open Questions