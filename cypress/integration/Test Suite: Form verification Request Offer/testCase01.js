/// <reference types="cypress" />

const nextButton = '.elementor-field-group-field_2f6f24a > .e-form__buttons > .elementor-field-group > .elementor-button'
const secondButton = '.elementor-field-group-field_c39135b > .e-form__buttons > .elementor-field-type-next > .elementor-button'
const thirdButton = '.elementor-field-group-field_a0369f7 > .e-form__buttons > .elementor-field-type-next > .elementor-button'
const forthButton = '.elementor-field-group-field_19aa2cb > .e-form__buttons > .elementor-field-type-next > .elementor-button'
const fifthButton = '.elementor-field-group-field_d371062 > .e-form__buttons > .elementor-field-type-next > .elementor-button'
const check = '.elementor-field-group-field_71c77e1 > .elementor-field-type-checkbox > .elementor-field-subgroup > :nth-child(1)'
const sixButton = '.elementor-field-group-field_71c77e1 > .e-form__buttons > .elementor-field-type-next > .elementor-button'
const sevenButton = '.elementor-field-type-submit > .elementor-button'



describe('Test Case 01', () => {
    it('should successfully finish the process of requesting the offer form', () => {
        cy.visit('/request-offer/')
        
        cy.get('#form-field-name')
            .should('have.attr', 'type', 'text' )
            .and('have.attr', 'required', 'required')
            .type(Cypress.env('name'))

        cy.get('#form-field-email')
            .should('have.attr', 'type', 'email' )
            .and('have.attr', 'required', 'required')
            .type(Cypress.env('email'))

        cy.get('#form-field-field_0de192e')
            .should('have.attr', 'type', 'text' )
            .type('Krone')

        cy.get(nextButton)
            .should('have.attr', 'type', 'button')
            .and('have.text', 'Next')
            .click()

        cy.get(secondButton).click()
        cy.get('#form-field-field_ac92bb7-0').click({ force: true })

        cy.get(thirdButton).click()
        cy.get('#form-field-field_a336df0-1').click({ force: true })
        cy.get('#form-field-field_489bc3b-0').click({ force: true })

        cy.get(forthButton).click()
        cy.get('#form-field-field_6fd08e7-0').click({ force: true })

        cy.get('#form-field-field_ef26b43')
            .type('Bratislava')
        cy.get('#form-field-field_e16234d-0').click({ force: true })
        cy.get('#form-field-field_5a930d5-1').click({ force: true })

        cy.get(fifthButton).click()

        cy.get(check).click()
        cy.get(sixButton).click()

        cy.get('#form-field-field_f3dbde2')
            .type(Cypress.env('messageTwo'))

        cy.get(sevenButton).click()
    })
})