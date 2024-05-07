import BasePage from './BasePage';
import locators from '../fixtures/Locators';

class ComparePage extends BasePage {
    constructor() {
        super();
    }

    numberOfProducts(callback) {
        cy.get(locators.PRODUCT_PRICE).then(($prices) => {
            callback($prices.length);
        });
    }
}
export default ComparePage;