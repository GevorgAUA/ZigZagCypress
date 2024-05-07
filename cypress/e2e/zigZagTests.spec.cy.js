import HomePage from '../POMs/HomePage';
import ResultsPage from '../POMs/ResultsPage';
import CartPage from '../POMs/CartPage';
import LoginPage from '../POMs/LoginPage';
import ComparePage from '../POMs/ComparePage';
import { PRODUCT_ADDED_TO_CART_MESSAGE, CANNOT_FAVORITE_WITHOUT_ACCOUNT_MESSAGE, CANNOT_COMPARE_SAME_ITEM_MESSAGE, INVALID_LOGIN_FROM_HOME_MESSAGE } from '../fixtures/assertionMessages';
import { headphoneSearch } from '../fixtures/parameters';

describe('ZigZag Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.zigzag.am/');
  });

  // it('Adding Product Appears In Cart Page After Search', () => {
  //   const homePage = new HomePage();
  //   homePage.search(headphoneSearch);
  //
  //   const resultsPage = new ResultsPage();
  //   resultsPage.hoverOverFirstElement();
  //   resultsPage.addToCartFromProductInfo();
  //   resultsPage.openCart();
  //   resultsPage.goToCartPageFromCartBar();
  //
  //   const cartPage = new CartPage();
  //   cartPage.isCartFilled().should('be.true', PRODUCT_ADDED_TO_CART_MESSAGE);
  // });

  it('Cannot Favorite Without Account And Is Sent To Login', () => {
    const homePage = new HomePage();
    homePage.openFavorites();

    const loginPage = new LoginPage();
    const isInLoginPage = loginPage.isInLoginPage();
    expect(isInLoginPage).to.be.true;
  });

  // it('Cannot Compare Same Item', () => {
  //   const homePage = new HomePage();
  //   homePage.hoverOverPrice();
  //   homePage.addToCompareFromProductInfo();
  //   homePage.hoverOverPrice();
  //   homePage.addToCompareFromProductInfo();
  //   homePage.goToComparePage();
  //
  //   const comparePage = new ComparePage();
  //   comparePage.numberOfProducts().should('equal', 1, CANNOT_COMPARE_SAME_ITEM_MESSAGE);
  // });

  it('Invalid Login From Home', () => {
    const homePage = new HomePage();
    homePage.invalidLoginFromHeader();

    const loginPage = new LoginPage();
    const isInLoginPage = loginPage.isInLoginPage();
    expect(isInLoginPage).to.be.true;
    
  });
});