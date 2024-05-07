import locators from '../fixtures/Locators';
import parameters from '../fixtures/parameters';

class BasePage {
constructor() {
this.driver = cy;
}

goToHomePage() {
cy.get(locators.HOME_BUTTON).click();
}

openCart() {
cy.get(locators.CART_BAR).click();
}

goToCartPageFromCartBar() {
cy.get(locators.GO_TO_CART_BUTTON).click();
}

goToComparePage() {
cy.get(locators.COMPARE_PAGE).click();
}

    search(query) {
        cy.get(locators.SEARCH_BOX)
            .clear()
            .type(query)
            .type('{enter}');
    }


isLoggedIn() {
return cy.get(locators.SING_IN_BUTTON).should('not.be.visible');
}

invalidLoginFromHeader() {
cy.get(locators.SING_IN_BUTTON).click();
cy.get(locators.USERNAME_FIELD).type(parameters.invalidEmail);
cy.get(locators.PASSWORD_FIELD).type(parameters.invalidPassword);
cy.get(locators.LOGIN_BUTTON).click();
}
}

export default BasePage;