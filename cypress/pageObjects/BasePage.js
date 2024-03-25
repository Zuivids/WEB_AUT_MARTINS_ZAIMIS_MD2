export class BasePage {
  static visit() {
    return cy.visit("https://katalon-demo-cura.herokuapp.com/");
  }

}