/// <reference types="cypress" />

const contactUs = '.elementor-button-text'

describe('Test Case 06', () => {
    it('should visit https://www.eevree.com/ , find and click on Contact us button, then scroll down, fill the mail field and click on Send Message button', () => {
        cy.visit('/')
        cy.get(`${contactUs}`)
            .contains('Contact us')
            .should('be.visible')
            .click({ force: true })
        
        cy.get('#form-field-email')
            .should('have.attr', 'type', 'email' )
            .and('have.attr', 'placeholder', 'Email')
            .and('have.attr', 'required', 'required')
            .type(Cypress.env('email'))

        cy.get('.elementor-field-group > .elementor-button')
            .should('have.attr', 'type', 'submit')
            .and('be.visible')
                .find('.elementor-button-text')
                .should('have.text', 'Send Message')
            .click()
    })
})