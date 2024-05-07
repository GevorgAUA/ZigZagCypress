import BasePage from './BasePage';
import Locators from '../fixtures/Locators';

class LoginPage extends BasePage{
login(username, password) {
cy.get(Locators.USERNAME_FIELD).type(username);
cy.get(Locators.PASSWORD_FIELD).type(password);
cy.get(Locators.LOGIN_BUTTON).click();
}

isInLoginPage() {
    const islogged = Cypress.$(Locators.USERNAME_FIELD).is(':visible');
    return !islogged;
}

    invalidErrorAppeared() {
        return cy.get(Locators.INVALID_LOGIN_ERROR).then($element => {
            return $element.length > 0 && $element.is(':visible');
        });
    }
}

export default LoginPage;