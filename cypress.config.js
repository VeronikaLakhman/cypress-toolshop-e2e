require('dotenv').config();
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  env: {
    REGULAR_USER_1_EMAIL: process.env.REGULAR_USER_1_EMAIL,
    REGULAR_USER_1_PASSWORD: process.env.REGULAR_USER_1_PASSWORD,
    REGULAR_USER_1_NAME: process.env.REGULAR_USER_1_NAME,
  },
  e2e: {
    baseUrl: 'https://practicesoftwaretesting.com/',
  },
});
