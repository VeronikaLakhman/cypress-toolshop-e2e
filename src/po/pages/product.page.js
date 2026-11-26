class ProductPage {
  get addToFavoritesButton() {
    return cy.get('[data-test="add-to-favorites"]');
  }

  get addToCartButton() {
    return cy.get('[data-test="add-to-cart"]');
  }

  addToCart() {
    this.addToCartButton.click();
  }

  addToFavorites() {
    this.addToFavoritesButton.click();
  }
}

export default new ProductPage();
