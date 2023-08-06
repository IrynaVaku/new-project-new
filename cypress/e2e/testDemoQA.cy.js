/// <reference types="cypress" />

describe('first test', () => {
  beforeEach(() => {
   cy.visit('https://demoqa.com/')
  })

  it('verify h5', () => {
    cy.get('div.category-cards .card-body  h5').contains('Elements').click()
    cy.get('#item-0 span').contains('Text Box').click()
    cy.get('#userName').type('Iryna')
   // cy.visit('/')
    //cy.contains('next').click()
    //cy.url().should('include', 'commands/traversal')

    
    //cy.get('.checked-list').first().should('have.length', 1)
   // cy.get('.todo-list li').last().should('have.text', 'Walk the dog')//
  })
  })
