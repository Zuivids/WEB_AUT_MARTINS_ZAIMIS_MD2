import { AppointmentPage } from "../pageObjects/AppointmentPage";
import { BasePage } from "../pageObjects/BasePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { HomePage } from "../pageObjects/homePage";
import { AppointmentValidationPage } from "../pageObjects/AppointmentValidationPage";
import { HistoryPage } from "../pageObjects/History.page";

describe("MD2", () => {
    context("Scenarios", () => {
      beforeEach(() => {
        BasePage.visit();
      });

      it("Scenario 1 - Make an Appointment", () => {
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
        AppointmentValidationPage.facility.should("have.text","Seoul CURA Healthcare Center");
        AppointmentValidationPage.applyForHospitalReadmission.should("have.text","Yes");
        AppointmentValidationPage.healthcareProgram.should("have.text","Medicare");
        const today = new Date();
        const month = String(today.getMonth() + 1).padStart(2, "0");;
        const year = String(today.getFullYear());
        AppointmentValidationPage.visitDate.should("have.text","30/"+month+"/"+year);
        AppointmentValidationPage.comment.should("have.text","CURA Healthcare Service");
      });

      it("Scenario 2 - Appointment history empty", () => {
        // Open https://katalon-demo-cura.herokuapp.com/
        // Click - Make Appointment
        HomePage.makeAppontment.click();
        // Set username and password fields with the demo account credentials
        LoginPage.username.type('John Doe');
        LoginPage.password.type('ThisIsNotAPassword');
        // Click - Login
        LoginPage.loginButton.click();
        // Click - Menu/Stack/Burger icon
        AppointmentPage.menuButton.click();
        // Validate that the sidebar is active
        AppointmentPage.sideBar.should("have.class","active");
        // Click - History
        AppointmentPage.sideBar.contains("History").click();
        // Validate that - No appointment - is visible
        HistoryPage.appointmentHistory.should("contain.text","No appointment.");
      });

  });
})