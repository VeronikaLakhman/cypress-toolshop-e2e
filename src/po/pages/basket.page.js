class BasketPage {
  open() {
    cy.visit('/checkout');
  }

  getProductRow(name) {
    return cy.contains('app-cart tbody tr', name);
  }

  getQuantityInput(name) {
    return this.getProductRow(name)
      .find('[data-test="product-quantity"]');
  }

  getProductPrice(name) {
    return this.getProductRow(name)
      .find('[data-test="product-price"]');
  }

  getLineTotal(name) {
    return this.getProductRow(name)
      .find('[data-test="line-price"]');
  }

  setQuantity(name, quantity) {
    this.getQuantityInput(name)
      .clear()
      .type(String(quantity));
  }

  clearBasket() {
    cy.get('body').then(($body) => {
      const buttons = $body.find('app-cart tbody tr a.btn-danger');

      if (buttons.length === 0) return;

      cy.wrap(buttons.first()).click();

      cy.get('body').should(($body) => {
        const remainingButtons = $body.find('app-cart tbody tr a.btn-danger');
        expect(remainingButtons.length).to.be.lessThan(buttons.length);
      });

      this.clearBasket();
    });
  }
}

export default new BasketPage();
