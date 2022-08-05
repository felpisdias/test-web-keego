import * as fieldsLabel from '../utils/fields-labels'
import * as texts from '../utils/assertsText'

import {addProductCart} from './cart'
import {fillFormLogin} from './login'

export function makeOder() {
    addProductCart();

    cy.get(fieldsLabel.buttonGoCheckout).click();
    cy.get(fieldsLabel.cartSummary).invoke('text').then((text) => {
        expect(text.trim()).contains(texts.cartSummary)
    });
    cy.get(fieldsLabel.orderDetails).should('be.visible');
    cy.get(fieldsLabel.buttonProceedCheckout).click();

    fillFormLogin();
    cy.get(fieldsLabel.buttonProgressCheckout).click();

    cy.get('#cgv').check();
    cy.get(fieldsLabel.buttonProgressCheckout).click();

    cy.get(fieldsLabel.orderDetails).should('be.visible');
    cy.get(fieldsLabel.orderDetailsProdName).invoke('text').then((text) => {
        expect(text.trim()).contains(texts.clothingSearch)
    });
    cy.get(fieldsLabel.totalProductsPrice).invoke('text').then((text) => {
        expect(text.trim()).contains(texts.productsPrice)
    });
    cy.get(fieldsLabel.totalDeliveryPrice).invoke('text').then((text) => {
        expect(text.trim()).contains(texts.deliveryPrice)
    });

    cy.get(fieldsLabel.methodPayment).click();
    cy.get(fieldsLabel.buttonProgressCheckout).click();

    cy.get(fieldsLabel.confirmOrderComplete).invoke('text').then((text) => {
        expect(text.trim()).contains(texts.confirmOrderComplete)
    });
}