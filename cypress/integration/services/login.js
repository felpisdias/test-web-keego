import * as fieldsLabel from '../utils/fields-labels'
import * as credentials from '../utils/credentials'
import * as texts from '../utils/texts'

export function loginFail() {
    cy.visit('/');
    cy.get(fieldsLabel.signInButton).click();
    cy.get(fieldsLabel.fieldEmail).type(credentials.failEmail);
    cy.get(fieldsLabel.fieldPasswd).type(credentials.failPasswd);
    cy.get(fieldsLabel.submitLogin).click();
    cy.get(fieldsLabel.loginFail).invoke('text').then((text) => {
        expect(text.trim()).equal(texts.loginFail)
    });
    cy.wait(10000);
}

export function loginSuccess() {
    cy.visit('/');
    cy.get(fieldsLabel.signInButton).click();
    cy.get(fieldsLabel.fieldEmail).type(credentials.sucessEmail);
    cy.get(fieldsLabel.fieldPasswd).type(credentials.sucessPasswd);
    cy.get(fieldsLabel.submitLogin).click();
    cy.get(fieldsLabel.loginSuccess).invoke('text').then((text) => {
        expect(text.trim()).equal(texts.loginSuccess)
    });

    cy.wait(100000);
}