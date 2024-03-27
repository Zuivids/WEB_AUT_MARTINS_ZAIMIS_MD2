export class AppointmentValidationPage {
    
    static get facility(){
        return cy.get("p#facility");
    }

    static get applyForHospitalReadmission(){
        return cy.get("p#hospital_readmission");
    }

    static get healthcareProgram(){
        return cy.get("p#program");
    }

    static get visitDate(){
        return cy.get("p#visit_date");
    }

    static get comment(){
        return cy.get("p#comment");
    }
  }