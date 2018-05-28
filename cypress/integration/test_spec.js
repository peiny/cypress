describe('test popup', function () {
    it('popup shoulde be true', function () {
        cy.visit('http://localhost:5000/test')
        cy.get('button[popupbutton="popup-button"]').click()

        cy.get('#myModal').should('have.class', 'in')
    })
})