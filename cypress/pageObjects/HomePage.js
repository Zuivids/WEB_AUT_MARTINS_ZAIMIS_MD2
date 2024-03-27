import { BasePage } from "./BasePage";

export class HomePage {
  
  static get makeAppontment() {
    return cy.get("a#btn-make-appointment");
  }
  
}