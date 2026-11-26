class LoginPage {
  open() {
    cy.visit('/auth/login');
  }

  get emailInput() {
    return cy.get('[data-test="email"]');
  }

  get passwordInput() {
    return cy.get('[data-test="password"]');
  }

  get loginButton() {
    return cy.get('[data-test="login-submit"]');
  }

  login(email, password) {
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.loginButton.click();
  }
}

export default new LoginPage();
