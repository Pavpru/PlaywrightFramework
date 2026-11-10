// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },

  reporter: [['html'], ['allure-playwright']],
  use: {
    browserName: 'chromium',
    headless: !!process.env.CI,
    actionTimeout: 10 * 1000,
    screenshot: 'on',
    // trace: 'only-on-failure',
  }
});
