import { AppointmentPage } from "../pageObjects/AppointmentPage";
import { BasePage } from "../pageObjects/BasePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { HomePage } from "../pageObjects/homePage";
import { AppointmentValidationPage } from "../pageObjects/AppointmentValidationPage";

describe("MD2", () => {
    context("Scenarios", () => {
      beforeEach(() => {
        BasePage.visit();
      });

      it.only("Scenario 1 - Make an Appointment", () => {
        // Open https://katalon-demo-cura.herokuapp.com/
        // Click - Make Appointment
        HomePage.makeAppontment.click();
        // Set username and password fields with the demo account credentials
        LoginPage.username.type('John Doe');
        LoginPage.password.type('ThisIsNotAPassword');
        // Click - Login
        LoginPage.loginButton.click();
        // Set the following values:
        // Facility - Seoul CURA Healthcare Center
        AppointmentPage.facility.select("Seoul CURA Healthcare Center");
        // Check - Apply for hospital readmission
        AppointmentPage.applyForHospitalReadmission.click();
        // Select - Medicaid
        AppointmentPage.selectMedicare.click();
        // Set Date value by using the widget - 30
        AppointmentPage.dateField.click();
        AppointmentPage.day30.click();
        // Set comment - CURA Healthcare Service
        AppointmentPage.addComment.type("CURA Healthcare Service");
        // Click - Book Appointment
        AppointmentPage.bookAppointment.click();
        // Validate that previously set values are correct
        AppointmentValidationPage.facility.should("contain","Seoul CURA Healthcare Center");
      });

      it("Scenario 2 - Appointment history empty", () => {
        // Open https://katalon-demo-cura.herokuapp.com/
        // Click - Make Appointment
        // Set username and password fields with the demo account credentials
        // Click - Login
        // Click - Menu/Stack/Burger icon
        // Validate that the sidebar is active
        // Click - History
        // Validate that - No appointment - is visible
      });

  });
})