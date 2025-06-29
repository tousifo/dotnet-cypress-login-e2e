describe('User Registration Tests', () => {
  const baseUrl = 'http://localhost:5168/Identity/Account/Register'

  it('should register a user with valid data', () => {
    cy.visit(baseUrl)
    const uniqueEmail = `testuser_${Date.now()}@example.com`
    cy.get('input[name="Input.Email"]').type(uniqueEmail)
    cy.get('input[name="Input.Password"]').type('Test@1234')
    cy.get('input[name="Input.ConfirmPassword"]').type('Test@1234')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/RegisterConfirmation')
    cy.contains('confirmation').should('exist') // Adjust if your page uses a different message
  })

  it('should show validation error for invalid email format', () => {
    cy.visit(baseUrl)
    cy.get('input[name="Input.Email"]').type('invalidemail')
    cy.get('input[name="Input.Password"]').type('Test@1234')
    cy.get('input[name="Input.ConfirmPassword"]').type('Test@1234')
    cy.get('button[type="submit"]').click()
    cy.contains('The Email field is not a valid e-mail address').should('exist')
  })

  it('should show error for password mismatch', () => {
    cy.visit(baseUrl)
    cy.get('input[name="Input.Email"]').type('testuser2@example.com')
    cy.get('input[name="Input.Password"]').type('Test@1234')
    cy.get('input[name="Input.ConfirmPassword"]').type('WrongPassword')
    cy.get('button[type="submit"]').click()
    cy.contains('The password and confirmation password do not match').should('exist')
  })
})
