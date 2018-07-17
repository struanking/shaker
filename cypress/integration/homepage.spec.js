/// <reference types="Cypress" />

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('successfully loads', function() {
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/')
    })
  })

  it('h1 text = "Shaker"', function() {
    cy.get('h1').contains('Shakerx')
  })
})
