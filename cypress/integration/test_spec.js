describe('test popup', function () {
    it('popup shoulde be true', function () {
        cy.visit('cypress/index.html')
        cy.get('button[popupbutton="popup-button"]').click()

        cy.get('#myModal').should('have.class', 'in')
    })
})