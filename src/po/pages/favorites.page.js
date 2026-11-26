class FavoritesPage {
  open() {
    cy.visit('/account/favorites');
  }

  removeProduct(name) {
    cy.get('body').then(($body) => {
      const product = $body.find(
        `div[data-test^="favorite-"]:contains("${name}")`
      );

      if (product.length === 0) return;

      cy.wrap(product.first())
        .find('[data-test="delete"]')
        .click();
    });
  }

  assertProductCount(name, expectedCount) {
    cy.get('body').should(($body) => {
      const products = $body.find(
        `div[data-test^="favorite-"]:contains("${name}")`
      );

      expect(products.length).to.equal(expectedCount);
    });
  }
}

export default new FavoritesPage();
