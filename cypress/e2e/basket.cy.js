import HomePage from '../../src/po/pages/home.page.js';
import ProductPage from '../../src/po/pages/product.page.js';
import BasketPage from '../../src/po/pages/basket.page.js';
import HeaderComponent from '../../src/po/components/common/header.component.js';
import { catalogData } from '../../src/data-provider/catalog.data.js';

describe('Basket', () => {
    it('should increase product quantity to two and update the total price', () => {
        const productName = catalogData.products.clawHammer;

        BasketPage.open();
        BasketPage.clearBasket();
        HeaderComponent.assertCartEmpty();

        HomePage.open();
        HomePage.searchProduct(productName);
        HomePage.openProduct(productName);

        ProductPage.addToCart();
        HeaderComponent.openCart();

        BasketPage.getQuantityInput(productName)
            .should('be.visible');

        BasketPage.getProductPrice(productName)
            .invoke('text')
            .then((priceText) => {
                const productPrice = Number(priceText.replace('$', '').trim());
                const expectedTotal = Number((productPrice * 2).toFixed(2));

                BasketPage.setQuantity(productName, 2);

                BasketPage.getQuantityInput(productName)
                    .should('have.value', '2');

                BasketPage.getLineTotal(productName)
                    .should(($total) => {
                        const actualTotal = Number(
                            $total.text().replace('$', '').trim()
                        );

                        expect(actualTotal).to.equal(expectedTotal);
                    });
            });
    });
});
