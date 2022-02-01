/// <reference types="cypress" />

const contactUs = '.elementor-button-text'

describe('Test Case 07', () => {
    it('should visit https://www.eevree.com/ , find and click on Contact us button, then scroll down, fill the message field and click on Send Message button', () => {
        cy.visit('/')
        cy.get(`${contactUs}`)
            .contains('Contact us')
            .should('be.visible')
            .click({ force: true })
        
        cy.get('#form-field-message')
            .should('have.attr', 'placeholder', 'Message')
            .and('have.attr', 'required', 'required')
            .type(Cypress.env('message'))

        cy.get('.elementor-field-group > .elementor-button')
            .should('have.attr', 'type', 'submit')
            .and('be.visible')
                .find('.elementor-button-text')
                .should('have.text', 'Send Message')
            .click()
    })
})