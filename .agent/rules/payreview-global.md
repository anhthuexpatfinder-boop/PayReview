# PayReview Global Rules

These global rules govern all engineering, testing, and automation tasks in the PayReview workspace.

## 1. Core Operating Principles

- **Zero-Tolerance for Financial Inaccuracy**: Compensation and salary calculations are mission-critical. Calculation logic, rounding, and budget integrity must be strictly validated.
- **Principle of Least Privilege**: Compensation data is strictly confidential. Every feature must enforce role-based access control (RBAC) at both the API and UI layers.
- **No Assumptions / Ambiguity Gate**: Never assume business formulas, rounding rules, or permission models. When requirements lack precision, halt and request clarification before proceeding.
- **Risk-Based Prioritization**: Testing and review must focus on high-risk domains (calculations, budgets, approvals, access control) before medium or low-risk areas.

## 2. Standard Review Cycle States

Review cycles follow a strict lifecycle that controls allowed actions:
1. **Draft**: HR Admin configures cycle guidelines and budgets. Line Managers cannot edit.
2. **Open / In Progress**: Line Managers enter recommendations and merit increases within allocated budgets.
3. **Submitted**: Line Managers submit recommendations to HR/Executive approvers. Read-only for managers.
4. **Approved**: Compensation adjustments are finalized by approvers.
5. **Closed / Published**: Finalized salaries are locked and visible to employees according to publish date.

## 3. Standard Roles & Hierarchy

- **HR Admin**: Full administrative, configuration, override, and finalization permissions across all departments.
- **Line Manager**: Scoped strictly to direct and indirect reports within their reporting tree. Cannot view peer managers or superiors.
- **Employee**: Read-only access restricted strictly to their own finalized compensation record once published.

## 4. Quality & Automation Mandates

- All automation must adhere to the Page Object Model (POM) architecture.
- Tests must be deterministic, isolated, and parallel-safe.
- Do not rely on cosmetic indicators (e.g., toast messages or HTTP 200) alone; verify persisted state and business outcomes.
