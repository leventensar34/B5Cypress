///<reference types="cypress"/>
describe("second test suit",()=>{
    it("test wikipedia",()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.title().should("eq","Wikipedia")
        cy.get('#searchInput').clear().type("cypress{enter}")
        cy.url().should("include","/wiki/Cypress")
        cy.get("h1").should("have.text","Cypress")
    })
})