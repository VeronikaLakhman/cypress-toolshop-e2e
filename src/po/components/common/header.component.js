class HeaderComponent {
  openCart() {
    cy.get('[data-test="nav-cart"]').click();
  }

  assertCartEmpty() {
    cy.get('body').should(($body) => {
      expect($body.find('[data-test="cart-quantity"]').length)
        .to.equal(0);
    });
  }
}

export default new HeaderComponent();
