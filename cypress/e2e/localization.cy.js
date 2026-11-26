import HomePage from '../../src/po/pages/home.page.js';
import HeaderComponent from '../../src/po/components/common/header.component.js';

describe('Localization', () => {
  it('should preserve German language after navigating to the Contact page', () => {
    HomePage.open();

    HeaderComponent.languageSelector.should(($element) => {
      expect($element.text().trim()).to.equal('EN');
    });

    HeaderComponent.selectGermanLanguage();

    HeaderComponent.openContactPage();
    cy.location('pathname').should('include', '/contact');

    HeaderComponent.homeLink.should(($element) => {
      expect($element.text().trim()).to.equal('Start');
    });

    HeaderComponent.languageSelector.should(($element) => {
      expect($element.text().trim()).to.equal('DE');
    });
  });
});
