import HomePage from '../../src/po/pages/home.page.js';
import { catalogData } from '../../src/data-provider/catalog.data.js';

describe('Product Sorting', () => {
    it('should sort products by price from low to high', () => {
        cy.viewport(1440, 900);
        
        HomePage.open();

        HomePage.filterByCategory(
            catalogData.filters.categories.hammer
        );

        HomePage.productPrices.should('have.length', 7);

        HomePage.sort.select(
            catalogData.sorting.priceLowToHigh
        );

        HomePage.productPrices
            .should('have.length', 7)
            .should(($products) => {
                const actualPrices = [...$products].map((product) =>
                    Number(product.textContent.replace('$', '').trim())
                );

                const expectedPrices = [...actualPrices].sort(
                    (firstPrice, secondPrice) => firstPrice - secondPrice
                );

                expect(actualPrices).to.deep.equal(expectedPrices);
            });

        HomePage.sort.should(
            'have.value',
            catalogData.sorting.priceLowToHigh
        );
    });
});
