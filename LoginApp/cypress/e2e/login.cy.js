describe('User Login Tests', () => {
  it('should display the login page', () => {
    cy.visit('http://localhost:5168/Identity/Account/Login')
    cy.contains('Login').should('exist')
    cy.get('input[name="Input.Email"]').should('exist')
    cy.get('input[name="Input.Password"]').should('exist')
    cy.get('button[type="submit"]').should('exist')
  })

  it('should show validation errors for empty fields', () => {
    cy.visit('http://localhost:5168/Identity/Account/Login')
    cy.get('button[type="submit"]').click()
    cy.contains('The Email field is required').should('exist')
    cy.contains('The Password field is required').should('exist')
  })
})
