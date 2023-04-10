
describe('Page Load', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Should load the page and display a title', () => {
        cy.contains('h1', 'Sick Trick Wish List')
    })

    it('Should be a form for new trick submission', () => {
        cy.get('.form').should('exist')
    })

    it('Should display trick data', () => {
        cy.get('.trickbox-area > :nth-child(1)').contains('treflip')
    })
})


describe('API Calls', () => {
    it('Should post to API', () => {
        cy.intercept({
            method: 'POST',
            url: 'http://localhost:3001/api/v1/tricks',
        }).as('new trick')
    })
    it('Should delete to API', () => {
        cy.intercept({
            method: 'DELETE',
            url: 'http://localhost:3001/api/v1/tricks',
        }).as('remove trick')
    })
})