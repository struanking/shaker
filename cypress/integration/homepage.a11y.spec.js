// import 'axe-core';
// import axe from 'axe-core';
/// <reference types="Cypress" />

describe('Inject axe-core and run it', () => {
  // beforeEach(() => {
  //   // let axe = require('axe-core')
  //   // cy.visit('/')
  //   cy.visit('/', {
  //     onBeforeLoad: (win) => {
  //       win.axe = require('axe-core')
  //     }
  //   })
  // })

  // it('Has axe-core', () => {
  //   cy
  //     .window().should('have.property', 'axe')
  //     .window().then((win) => {
  //       const axe = win.axe;
  //       // console.log(win);
  //       expect(axe).to.be.a('object')
  //       expect(axe.run).to.be.a('function')
  //       // window.eval(axe.source);
  //       return axe.run(win.document);
  //     }).then((results) => {
  //       console.log(results);
  //       expect(results.violations).to.be.empty;
  //     })
  // })

  it('Runs axe-core', function() {
    cy.visit('https://ecstatic-stallman-0b2183.netlify.com')
      .window().then((win) => {
        var window = win;
        var axe = require('axe-core');
        window.eval(axe.source);
        return window.axe.run();
      }).then((results) => {
        console.log(results);
        expect(results.violations).to.be.empty;
      })
  })
})