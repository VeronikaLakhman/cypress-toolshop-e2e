class HomePage {
    open() {
        cy.visit('/');
    }

    get sort() {
        return cy.get('[data-test="sort"]');
    }

    get productPrices() {
        return cy.get('[data-test="product-price"]');
    }

    getCategoryCheckbox(category) {
        return cy.getByRole('checkbox', { name: category });
    }

    filterByCategory(category) {
        this.getCategoryCheckbox(category).check();
    }
}

export default new HomePage();
