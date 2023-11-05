const SUCCESS_STATUS_CODE = 200;

export function validateLink(card, linkLocator, expectedLink) {
    return cy.wrap(card).find(linkLocator)
    .should('have.attr', 'href', expectedLink)
    .then(link => {
      cy
      .request(link.prop('href'))
      .its('status')
      .should('eq', SUCCESS_STATUS_CODE);
    })
}
