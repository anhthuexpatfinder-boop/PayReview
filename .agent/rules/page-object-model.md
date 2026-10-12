# Page Object Model (POM) Rules

These rules govern the architecture, organization, and design of Page Objects in the Playwright test automation framework.

## 1. Directory Structure & Naming Conventions

- **Page Objects Location**: `tests/pages/**/*.page.ts`
- **Spec / Test Files Location**: `tests/e2e/**/*.spec.ts`
- **Naming Convention**:
  - Class names must use PascalCase and end in `Page` (e.g., `SalaryReviewPage`, `CycleConfigurationPage`).
  - Filenames must use kebab-case and end in `.page.ts` (e.g., `salary-review.page.ts`).

## 2. Strict Separation of Concerns

- **Page Objects Hold Locators & Actions Only**:
  - Page objects encapsulate element locators (`readonly Locator`), navigation methods, and user interaction sequences (e.g., `enterMeritIncrease()`, `submitReview()`).
- **NO Business Assertions in Page Objects**:
  - Never call `expect(...)` inside a page object method (with the exception of optional internal readiness checks such as `await expect(this.rootLocator).toBeVisible()`).
  - All business logic assertions and test validations **MUST** reside exclusively in the test spec (`*.spec.ts`).

## 3. Method Design Standards

- **Atomic and Composable Actions**: Create small, focused action methods rather than giant end-to-end monolithic functions.
- **Fluent Return Types**:
  - Methods should return either `void`, primitive/extracted data, or the next Page Object instance when navigating to a new screen.
  - Expose getters or extraction methods for component state (e.g., `getRemainingBudgetText()`, `getEmployeeRow(id)`).
- **Encapsulate Component Widgets**:
  - Complex widgets (e.g., budget summary cards, compensation tables, modal dialogs) should be modeled as separate sub-components or nested Page Objects if reused across pages.

## 4. Locator Encapsulation

- Locators must be private or protected where internal to interaction methods, or exposed as readonly accessors.
- Locators inside page objects must follow the project's Playwright Locator Strategy (refer to `playwright-standards.md`).
