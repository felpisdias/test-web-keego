import * as fieldsLabel from '../utils/fields-labels'
import * as texts from '../utils/assertsText'
import {searchSuccess} from './search'

export function addProductCart() {
    searchSuccess();

    cy.get(fieldsLabel.searchResultCard).find(fieldsLabel.addToCart).click();
    cy.get(fieldsLabel.addedToCartDiv).should('be.visible');
    cy.get(fieldsLabel.addedToCart).invoke('text').then((text) => {
    expect(text.trim()).contains(texts.addedToCart)
    });
}

export function deleteProductCart() {
    addProductCart();
    cy.get(fieldsLabel.buttonGoCheckout).click();
    cy.get(fieldsLabel.cartSummary).invoke('text').then((text) => {
        expect(text.trim()).contains(texts.cartSummary)
    });
    cy.get(fieldsLabel.orderDetail).should('be.visible');
    cy.get(fieldsLabel.orderCartDelete).click();
    cy.get(fieldsLabel.cartEmpty).invoke('text').then((text) => {
        expect(text.trim()).contains(texts.cartEmpty)
    });
    cy.wait(100000);
}
