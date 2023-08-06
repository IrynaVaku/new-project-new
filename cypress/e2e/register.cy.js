/// <reference types="cypress" />
describe('The Home Page', () => {
  beforeEach(function () {
    cy.visit('/');
    cy.fixture('dataHome').then((dataHome) => {
      this.dataHome = dataHome;
    });
  });

  it('Check h1', function () {
    //cy.visit('/')
    cy.get('h1').should('exist');
    cy.get('h1').should('have.text', this.dataHome.mainName);

    cy.get('.checked-list').should('have.length', 3);
    cy.get('.col-lg-7 .checked-list ul li').should('have.length', 5);
    cy.get(
      ':nth-child(1) > .card > .card-body > .row > .col-md-8 ul li'
    ).should('have.length', 4);
    cy.get(
      ':nth-child(2) > .card > .card-body > .row > .col-md-8 ul li'
    ).should('have.length', 9);
    cy.get('.col-md-8 h3').contains(this.dataHome.title1);
  });
  it('Check btn1', function () {
    cy.get('.col-md-6:nth-child(1) button')
      .contains(this.dataHome.title)
      .should('have.text', this.dataHome.title)
      .click();
    cy.url().should('include', 'course/5ff2005cacc2d5003ae26bc7');
    cy.get('h1').should('contain', this.dataHome.title2);
  });
  it.skip('Check button', function () {
    cy.get('#root')
      .children('section')
      .children()
      .children()
      .eq(1)
      .children()
      .first()
      .children()
      .children()
      .children()
      .children()
      .first()
      .next()
      .children('button')
      .click();
  });
  it('Check button', function () {
    cy.contains('QA Manual')
      .parent('.col-md-8')
      .find('.checked-list ul li')
      .should('have.length', 4);
    cy.contains('QA Manual')
      .parent('.col-md-8')
      .find('button')
      .should('have.text', 'Перейти к курсу');
    cy.contains('JavaScript Syntax ')
      .parent('.col-md-8')
      .find('.checked-list ul li')
      .should('have.length', 9);
    cy.contains('JavaScript Syntax ')
      .parent('.col-md-8')
      .find('button')
      .should('have.text', 'Перейти к курсу');
  });
});
