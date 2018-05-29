describe('test popup', function () {
    it('popup shoulde be true', function () {
        cy.visit('/test')
        cy.get('button[popupbutton="popup-button"]').click()

        cy.get('#myModal').should('have.class', 'in')
    })
})