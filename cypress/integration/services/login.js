import * as fieldsLabel from '../utils/fields-labels'
import * as inputs from '../utils/inputs'
import * as texts from '../utils/assertsText'

export function loginFail() {
    cy.visit('/');
    cy.get(fieldsLabel.signInButton).click();
    cy.get(fieldsLabel.fieldEmail).type(inputs.failEmail);
    cy.get(fieldsLabel.fieldPasswd).type(inputs.failPasswd);
    cy.get(fieldsLabel.submitLogin).click();
    cy.get(fieldsLabel.loginFail).invoke('text').then((text) => {
        expect(text.trim()).equal(texts.loginFail)
    });
}

export function loginSuccess() {
    cy.visit('/');
    cy.get(fieldsLabel.signInButton).click();
    fillFormLogin();
    cy.get(fieldsLabel.loginSuccess).invoke('text').then((text) => {
        expect(text.trim()).equal(texts.loginSuccess)
    });
}

export function fillFormLogin() {
    cy.get(fieldsLabel.fieldEmail).type(inputs.sucessEmail);
    cy.get(fieldsLabel.fieldPasswd).type(inputs.sucessPasswd);
    cy.get(fieldsLabel.submitLogin).click();
}