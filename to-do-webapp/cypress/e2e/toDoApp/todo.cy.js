/// <reference types="cypress" />

describe('to-do app', () => {
  // beforeEach(() => {
  //   cy.visit('https://example.cypress.io/todo')
  // })

  it('check the title of the app', () => {
    const name='Available todos'
    cy.get('.todo-header').should('have.text',name)
    
  });

  it('check the logo of the app', () => {

  });
});
