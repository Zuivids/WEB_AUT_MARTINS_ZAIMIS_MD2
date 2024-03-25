export class AppointmentValidationPage {
    
    static get facility(){
        return cy.get("#facility");
    }

    static get applyForHospitalReadmission(){
        return cy.get("#chk_hospotal_readmission");
    }

    static get selectMedicare(){
        return cy.get("#radio_program_medicare");
    }

    static get dateField(){
        return cy.get("#txt_visit_date");
    }

    static get day30(){
        return cy.get(".datepicker").contains("30");
    }

    static get addComment(){
        return cy.get("textarea#txt_comment");
    }

    static get bookAppointment(){
        return cy.get("#btn-book-appointment");
    }
  }