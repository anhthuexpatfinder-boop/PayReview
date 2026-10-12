# Playwright Automation Standards

These rules establish the coding standards, locator strategies, and execution best practices for Playwright TypeScript automation.

## 1. Locator Strategy Priority

When locating elements, strictly follow this priority hierarchy:
1. **User-Facing Accessible Roles (`getByRole`)**:
   ```typescript
   page.getByRole('button', { name: 'Submit Review' })
   page.getByRole('heading', { name: 'Compensation Summary' })
   page.getByRole('table')
   ```
2. **Form Labels (`getByLabel`)**:
   ```typescript
   page.getByLabel('Merit Increase (%)')
   page.getByLabel('Lump Sum Bonus')
   ```
3. **Dedicated Test IDs (`getByTestId`)**:
   ```typescript
   page.getByTestId('budget-remaining-pill')
   ```

### Strictly Forbidden Locators
- ❌ **XPath**: Do not use XPath selectors (e.g., `//div[@class="..."]/span`).
- ❌ **Dynamic CSS Classes**: Do not match generated CSS hashes (e.g., `.css-12a8b9`, `.styled__Button-sc-1`).
- ❌ **Fragile DOM Traversals**: Avoid deep `nth-child` chains or brittle tag hierarchies (e.g., `div > table > tbody > tr:nth-child(3) > td:nth-child(2)`).

## 2. Waiting & Synchronization Rules

- ❌ **No Hardcoded Waits**: Never use `page.waitForTimeout()` or `setTimeout()`. Hardcoded sleeps cause flakiness and slow down test execution.
- ✅ **Use Auto-Waiting & Web-First Assertions**:
  ```typescript
  // Preferred: Auto-waits for condition with built-in retry
  await expect(page.getByTestId('budget-remaining')).toHaveText('$15,000.00');
  ```
- ✅ **Explicit State Waiters**: If awaiting async responses, wait for network responses or element states:
  ```typescript
  await page.waitForResponse(resp => resp.url().includes('/api/compensation/save') && resp.status() === 200);
  ```

## 3. Test Structure & Independence

- **AAA Pattern**: Structure tests clearly into Arrange, Act, and Assert blocks.
- **Complete Test Isolation**:
  - Each test must run independently without reliance on preceding tests.
  - Tests must clean up or use dedicated test accounts/isolated cycles.
  - Must run safely under `fullyParallel: true`.
- **Descriptive Test Naming**:
  ```typescript
  test('should recalculate new salary and budget remaining when merit increase is updated', async ({ page }) => {
    // Arrange
    // Act
    // Assert
  });
  ```

## 4. Test Data Management

- Avoid hardcoding shared mutable state across tests.
- Use parameterized fixtures or unique IDs (e.g., timestamps or UUIDs) when generating test employees, cycle names, or budgets.
