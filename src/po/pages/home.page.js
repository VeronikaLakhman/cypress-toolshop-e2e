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

    get searchInput() {
        return cy.get('[data-test="search-query"]');
    }

    get searchButton() {
        return cy.get('[data-test="search-submit"]');
    }

    searchProduct(name) {
        this.searchInput.type(name);
        this.searchButton.click();
    }

    getCategoryCheckbox(category) {
        return cy.getByRole('checkbox', { name: category });
    }

    filterByCategory(category) {
        this.getCategoryCheckbox(category).check();
    }

    openProduct(name) {
        cy.contains('[data-test="product-name"]', name)
            .click();
    }
}

export default new HomePage();
