import LoginPage from '../../src/po/pages/login.page.js';
import HomePage from '../../src/po/pages/home.page.js';
import ProductPage from '../../src/po/pages/product.page.js';
import FavoritesPage from '../../src/po/pages/favorites.page.js';
import { catalogData } from '../../src/data-provider/catalog.data.js';

describe('Favorites', () => {
  it('should add a product to favorites only once', () => {
    const productName = catalogData.products.slipJointPliers;

    cy.env([
      'REGULAR_USER_1_EMAIL',
      'REGULAR_USER_1_PASSWORD',
    ]).then(({ REGULAR_USER_1_EMAIL, REGULAR_USER_1_PASSWORD }) => {
      LoginPage.open();
      LoginPage.login(REGULAR_USER_1_EMAIL, REGULAR_USER_1_PASSWORD);
    });

    cy.location('pathname').should('include', '/account');

    // Make sure the product is not in favorites
    FavoritesPage.open();
    FavoritesPage.removeProduct(productName);
    FavoritesPage.assertProductCount(productName, 0);

    HomePage.open();
    HomePage.searchProduct(productName);
    HomePage.openProduct(productName);

    ProductPage.addToFavorites();

    FavoritesPage.open();
    FavoritesPage.assertProductCount(productName, 1);
  });
});
