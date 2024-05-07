import BasePage from './BasePage';
import locators from '../fixtures/Locators';

class CartPage extends BasePage {
constructor() {
super();
}

    isCartFilled() {
        return cy.get(locators.CART_LIST).should('be.visible');
    }
}

export default CartPage;