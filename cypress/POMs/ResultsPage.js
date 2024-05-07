import BasePage from './BasePage';
import locators from '../fixtures/Locators';

class ResultsPage extends BasePage {
constructor() {
super();
}


clickOnFirstElement(){

}

    addToCartFromProductInfo() {
        cy.get(locators.ADD_TO_CART_FROM_PRODUCT).first().click();
    }

addToCompareFromProductInfo() {
cy.get(locators.ADD_TO_COMPARE_FROM_PRODUCT).click();
}

checkForAtLeastFiveHeadphoneResults() {
cy.get(locators.ALL_CATEGORIES).filter(':contains("Headphones")').its('length').then((count) => {
return count > 4;
});
}
}

export default ResultsPage;
