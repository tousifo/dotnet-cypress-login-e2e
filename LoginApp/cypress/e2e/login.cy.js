describe('User Login Tests', () => {
  // ...existing code...

  it('should show error for invalid credentials', () => {
    cy.visit(baseUrl)
    cy.get('input[name="Input.Email"]').type('wronguser@example.com')
    cy.get('input[name="Input.Password"]').type('WrongPassword')
    cy.get('button[type="submit"]').click()
    cy.contains('Invalid login attempt.').should('exist')
  })
})
