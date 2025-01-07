Playwright Login Test Automation
This project contains automated tests for verifying the login functionality of a web application using Playwright.

Project Structure
magentoLogin.spec.js: Main test script to validate login functionality with valid and invalid credentials.
magento.js: Page Object Model (POM) to interact with the login page and perform actions such as login, logout, and verify success or failure.
cred/creds.json: Configuration file containing valid and invalid login credentials along with the application URL.
Prerequisites
Before running the tests, ensure you have the following installed:

Node.js (version 14 or higher)
Playwright package installed in your project
Playwright installation:
npm install
To Execute the test script, enter the below command in the terminal(in head mode)
npx playwright test Login.spec.js --project=chromium --headed

To install allure report enter the below command in terminal
npm i -D @playwright/test allure-playwright

To generate the allure report enter the below command in terminal
npx allure generate ./allure-results --clean
To get the detailed report enter the below command in terminal
npx allure open ./allure-report
