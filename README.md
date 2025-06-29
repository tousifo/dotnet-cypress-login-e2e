# Automated End-to-End Testing of a .NET User Login and Registration System using Cypress

## Overview
This project is a complete example of how to build and test a user authentication system using ASP.NET Core MVC (with Identity) and Cypress for end-to-end (E2E) testing. It covers user registration, login, and validation, and demonstrates how to automate UI testing for these flows.

---

## What’s Inside?
- **ASP.NET Core MVC Web App**: Handles user registration, login, and authentication using Microsoft Identity.
- **SQLite Database**: Stores user credentials and authentication data locally.
- **Cypress E2E Tests**: Automated browser tests for registration and login flows.
- **CI/CD Ready**: Easily connect to GitHub Actions for automated test runs on every push.

---

## How to Run the Project

### 1. Prerequisites
- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js (LTS)](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### 2. Setup & Start the App
Open a terminal in the project root and run:

```powershell
cd LoginApp
# Restore .NET dependencies
 dotnet restore
# Run the app (by default on http://localhost:5168 or similar)
dotnet run
```

Visit the URL shown in the terminal (e.g., http://localhost:5168) in your browser.

### 3. Install Cypress & Run Tests
In a new terminal, run:

```powershell
cd LoginApp
npm install
npx cypress open
```

- Use the Cypress GUI to run `register.cy.js` and `login.cy.js` in `cypress/e2e/`.
- Or run all tests headless:

```powershell
npx cypress run --spec "cypress/e2e/*.cy.js"
```

---

## How It Works
- **Registration & Login**: The app uses ASP.NET Core Identity, so all user management (register, login, logout, password validation) is handled securely and out-of-the-box.
- **Database**: User data is stored in a local SQLite database (`app.db`).
- **Cypress Tests**: The tests simulate a real user registering and logging in, checking for success and error messages. Each test run uses a unique email, so you never get duplicate user errors.

---

## Project Structure
```
LoginApp/
  Controllers/           # MVC controllers
  Areas/Identity/Pages/  # Identity (auth) pages
  Views/                 # Razor views
  Data/                  # EF Core context & migrations
  wwwroot/               # Static files (CSS, JS)
  cypress/               # Cypress E2E tests
    e2e/
      register.cy.js     # Registration tests
      login.cy.js        # Login tests
```

---

## Why This Project?
- **Realistic**: Uses Microsoft’s recommended authentication stack.
- **Automated**: Cypress tests run like a real user, clicking and typing in the browser.
- **CI/CD Ready**: Add a GitHub Actions workflow to run tests on every push.
- **Beginner Friendly**: No advanced setup required. Just run and test.

---

## Credits
- Built with [ASP.NET Core](https://dotnet.microsoft.com/apps/aspnet) and [Cypress](https://www.cypress.io/).

---

## License
MIT (or your choice)
