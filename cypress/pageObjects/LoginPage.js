export class LoginPage {
    
    static get username(){
        return cy.get("input#txt-username");
    }
    
    static get password(){
        return cy.get("input#txt-password");
    }

    static get loginButton(){
        return cy.get("#btn-login");
    }

  }