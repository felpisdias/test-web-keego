import * as fieldsLabel from '../utils/fields-labels'
import * as inputs from '../utils/inputs'
import * as texts from '../utils/assertsText'

export function searchFail() {
    cy.visit('/');
    cy.get(fieldsLabel.fieldSearch).should('be.visible');
    cy.get(fieldsLabel.fieldSearch).type(inputs.failSearch);
    cy.get(fieldsLabel.buttonSearch).click();
    cy.get(fieldsLabel.searchFail).invoke('text').then((text) => {
        expect(text.trim()).contains(texts.searchFail)
    });
}

export function searchSuccess() {
    cy.visit('/');
    cy.get(fieldsLabel.fieldSearch).should('be.visible');
    cy.get(fieldsLabel.fieldSearch).type(inputs.clothingSearch);
    cy.get(fieldsLabel.buttonSearch).click();
    cy.get(fieldsLabel.searchResult).should('be.visible');
    cy.get(fieldsLabel.searchResult).invoke('text').then((text) => {
        expect(text.trim()).contains(texts.clothingSearch)
    });
}
