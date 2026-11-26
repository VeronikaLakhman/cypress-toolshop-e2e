# Cypress E2E Testing - Toolshop

End-to-end test automation project built with Cypress and JavaScript.

## Tech Stack

- Cypress 16.4.0
- JavaScript
- Node.js 24
- Mocha and Chai (built into Cypress)
- Page Object Model (POM)
- dotenv

## Test Scenarios

The project automates four BDD scenarios:

1. **Product Sorting** - Verify that products are sorted by price from low to high.
2. **Favorites** - Verify that a signed-in user can add a product to favorites.
3. **Shopping Basket** - Verify that changing product quantity to two updates the total price.
4. **Localization** - Verify that German remains selected after navigating to the Contact page.

## Environment Setup

1. Install Node.js 24 (recommended) and the following browsers:
   - Google Chrome
   - Mozilla Firefox
   - Microsoft Edge

2. Install project dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root using `.env.example` as a template.

   Configure the following environment variables:

   ```dotenv
   REGULAR_USER_1_EMAIL=
   REGULAR_USER_1_PASSWORD=
   REGULAR_USER_1_NAME=
    ```

The `.env` file is excluded from version control.

## Running Tests

Open Cypress in interactive mode:

```bash
npx cypress open
```

Run all tests in Chrome Headless:

```bash
npx cypress run --browser chrome --headless
```

Run all tests in Firefox Headless:

```bash
npx cypress run --browser firefox --headless
```

Run all tests in Edge Headless:

```bash
npx cypress run --browser edge --headless
```