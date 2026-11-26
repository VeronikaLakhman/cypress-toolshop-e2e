class HeaderComponent {
    get languageSelector() {
        return cy.get('[data-test="language-select"]');
    }

    get germanLanguageOption() {
        return cy.get('[data-test="lang-de"]');
    }

    get homeLink() {
        return cy.get('[data-test="nav-home"]');
    }

    selectGermanLanguage() {
        this.languageSelector.click();
        this.germanLanguageOption.click();
    }

    openContactPage() {
        cy.get('[data-test="nav-contact"]').click();
    }

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
