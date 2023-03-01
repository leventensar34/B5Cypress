/**
 * Examples of parent commands:
    cy.visit()
    cy.get()
    cy.request()
    cy.exec()
    cy.intercept()
 */

/**
 * Child Commands
    Child commands are always chained off of a parent command, or another child command.
    The previous subject will automatically be yielded to the callback function.

* Examples of child commands:
    .click()
    .trigger()
    .find()
    .should()
    .as()
 */

    /**
     * Examples of dual commands:
      cy.contains()
      cy.screenshot()
      cy.scrollTo()
      cy.wait()
     */

      // cypress reference types
      ///<reference types="cypress"/>

      //visit
      cy.visit('url')
      cy.visit('url',{timeout:10000})

      //scjould is a promise
      cy.url().should('include',path)

      //Finding the element (loc is the reference)
      cy.get(loc).click()
      cy.get(loc).should('be.visible')
      cy.get(loc).should('be.exist')

      //negative scenario
      cy.get(loc).should('not.be.visible')
      cy.get(loc).should('not.be.exist')

      cy.get('h1').should('have.text','Table of contents')
      cy.get('input').shadow('have.value','James')

      //parent  to child or child to parent
      cy.get(loc).first()
      cy.get(loc).last()
      cy.get(loc).eq(2).click()

      cy.get(loc).next().click()

      //if you dont use multiple true 
      cy.go('back') //come to provious page come after test
      cy.get('tbody tr').nextAll().click({multiple:true}) // web table like tbody click each of one by one

      cy.get(loc).prev().click() //previous one
      cy.get(loc).prevAll().click()

      //position handling
      cy.get(loc).click('top')
      cy.get(loc).click('buttom')
      cy.get(loc).click('topLeft')

      //hover handling
      cy.get(loc).trigger('mauseover').click()
      cy.get(loc).trigger('mauseup').click()
      cy.get(loc).trigger('mausedown').click()

      //login
      cy.get('#username').clear().type('username')














































