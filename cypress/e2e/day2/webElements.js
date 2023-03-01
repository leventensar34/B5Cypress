///<reference types="cypress"/>

describe('Web Elements',()=>{
    it('First Test',()=>{
          //tag name
          cy.get('input')

          //by ID
          cy.get('#loginpage-input-email')
  
          //by className
          cy.get('.btn.btn-primary')
          cy.get('.form-group')
  
          //by attribute name
          cy.get('[placeholder]')
          //by attribute name & value
          cy.get('[placeholder="Email Address"]')
          
          //by class value
          cy.get('[class="btn btn-primary"]')
  
          //by tagName &attribute with value
          cy.get('input[class="btn btn-primary"]')
  
          //by two different attributes ve more
          cy.get('[placeholder="Email Address"][type="email"]')
  
          //contains
          cy.contains('warn-text').click()
  
      })

    
    })
