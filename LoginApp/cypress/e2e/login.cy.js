describe('User Login Tests', () => {
  const baseUrl = 'http://localhost:5168/Identity/Account/Login'
  let email;
  const password = 'Test@1234'

  before(() => {
    // Generate a unique email for each test run
    email = `testuser_${Date.now()}@example.com`
    // Register the user before running login tests
    cy.visit('http://localhost:5168/Identity/Account/Register')
    cy.get('input[name="Input.Email"]').type(email)
    cy.get('input[name="Input.Password"]').type(password)
    cy.get('input[name="Input.ConfirmPassword"]').type(password)
    cy.get('button[type="submit"]').click()
    // No need to log out, just proceed
  })

  it('should login successfully with valid credentials', () => {
    cy.visit(baseUrl)
    cy.get('input[name="Input.Email"]').type(email)
    cy.get('input[name="Input.Password"]').type(password)
    cy.get('button[type="submit"]').click()
    cy.contains('Logout').should('exist') // Check for 'Logout' after login
  })

  it('should show error for invalid credentials', () => {
    cy.visit(baseUrl)
    cy.get('input[name="Input.Email"]').type('wronguser@example.com')
    cy.get('input[name="Input.Password"]').type('WrongPassword')
    cy.get('button[type="submit"]').click()
    cy.contains('Invalid login attempt.').should('exist')
  })
})
