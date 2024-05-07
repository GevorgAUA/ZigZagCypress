import BasePage from './BasePage';
import Locators from '../fixtures/Locators';


class HomePage extends BasePage{
openCatalog() {
cy.get(Locators.CATALOG).click();
}

hoverAccessories() {
cy.get(Locators.ACCESSORIES_BUTTON).trigger('mouseover');
}

chooseEarphones() {
cy.get(Locators.HEADPHONES_BUTTON).click();
}

openFavorites() {
cy.get(Locators.FAVORITE_LIST).click();
}

hoverOverPrice() {
cy.get(Locators.PRODUCT_PRICE).trigger('mouseover');
}

addToCartFromProductInfo() {
cy.get(Locators.ADD_TO_CART_FROM_PRODUCT).click();
}

addToCompareFromProductInfo() {
cy.get(Locators.ADD_TO_COMPARE_FROM_PRODUCT).click();
}
}

export default HomePage;