import { type Locator, type Page } from '@playwright/test';

/**
 * Page Object for the PayReview Login page (/login).
 * Follows the approved POM design and Playwright standards:
 * - Atomic actions only (no composite workflow methods).
 * - Zero business assertions (expectations belong in spec files).
 * - Accessible locators prioritized (getByRole, getByPlaceholder, getByTestId).
 */
export class LoginPage {
  readonly page: Page;

  // Primary page identity anchor
  readonly heading: Locator;

  // Step 1: Email identification
  // Note: Defaulting to placeholder 'Email Address*'; verify with Playwright Inspector / MCP if accessible label exists.
  readonly emailInput: Locator;
  readonly continueButton: Locator;
  readonly emailError: Locator;

  // Step 2: Authentication options
  readonly displayedEmail: Locator;
  readonly passkeyButton: Locator;
  readonly magicLinkButton: Locator;
  readonly passkeyStatusAlert: Locator;

  constructor(page: Page) {
    this.page = page;

    // Page identity
    this.heading = page.getByRole('heading', { name: 'Welcome to PayReview' });

    // Step 1 Locators
    this.emailInput = page.getByPlaceholder('Email Address*');
    this.continueButton = page.getByRole('button', { name: 'Continue' });
    this.emailError = page.getByRole('alert');

    // Step 2 Locators
    this.displayedEmail = page.getByTestId('confirmed-email-display');
    this.passkeyButton = page.getByRole('button', { name: 'Sign in with Passkey' });
    this.magicLinkButton = page.getByRole('button', { name: 'Sign in with Magic Link' });
    this.passkeyStatusAlert = page.getByTestId('passkey-status-alert');
  }

  /**
   * Navigates to the login page, optionally preserving a deep link destination.
   * @param returnUrl - Optional relative path to return to after authentication.
   */
  async goto(returnUrl?: string): Promise<void> {
    const targetUrl = returnUrl ? `/login?returnUrl=${encodeURIComponent(returnUrl)}` : '/login';
    await this.page.goto(targetUrl);
  }

  /**
   * Enters an email into the email input field.
   * @param email - The email address to type.
   */
  async enterEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  /**
   * Clicks the Continue button in Step 1.
   */
  async clickContinue(): Promise<void> {
    await this.continueButton.click();
  }

  /**
   * Submits the email form using the Enter keyboard key while focused on email input.
   */
  async pressEnterKey(): Promise<void> {
    await this.emailInput.press('Enter');
  }

  /**
   * Initiates Passkey authentication by clicking the Passkey button.
   */
  async clickSignInWithPasskey(): Promise<void> {
    await this.passkeyButton.click();
  }

  /**
   * Initiates Magic Link flow by clicking the Magic Link button.
   */
  async clickSignInWithMagicLink(): Promise<void> {
    await this.magicLinkButton.click();
  }

  /**
   * Retrieves text from the validation error message banner.
   */
  async getEmailErrorMessage(): Promise<string> {
    return (await this.emailError.textContent())?.trim() ?? '';
  }

  /**
   * Retrieves text of the confirmed email displayed in Step 2.
   */
  async getDisplayedEmail(): Promise<string> {
    return (await this.displayedEmail.textContent())?.trim() ?? '';
  }

  /**
   * Retrieves text from the Passkey status / cancellation alert banner.
   */
  async getPasskeyStatusMessage(): Promise<string> {
    return (await this.passkeyStatusAlert.textContent())?.trim() ?? '';
  }
}
