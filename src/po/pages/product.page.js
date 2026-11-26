class ProductPage {
  get addToFavoritesButton() {
    return cy.get('[data-test="add-to-favorites"]');
  }

  addToFavorites() {
    this.addToFavoritesButton.click();
  }
}

export default new ProductPage();
