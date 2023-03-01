///<reference types="cypress"/>

describe("first test suit", function () {
    it("test case 1", function () {
        cy.visit("https://www.google.com/")
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('.gLFyf').should('be.visible').type('cypress{enter}')
        cy.get('[href="https://www.cypress.io/"] > .LC20lb').wait(1000).click()
    })
})

