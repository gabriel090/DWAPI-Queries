describe("Validate Patient pharmacy extracts", () => {
  let res = [];
  it("Check if the patient_pharmacy.sql will run without any error", () => {
    cy.readFile("./DWAPI Current Extracts/patient_pharmacy.sql").then(
      (querystring) => {
        return cy.task("queryDatabase", querystring).then((results, err) => {
          res = results;

          cy.log(results);
        });
      }
    );
  });

  it("Asserts the columns", () => {
    expect(res).to.be.an("array");
     
    if (res.length > 0 && res != undefined) {
      expect(res[0]).to.have.property("Provider");
      expect(res[0]).to.have.property("SatelliteName");
      expect(res[0]).to.have.property("FacilityId");
      expect(res[0]).to.have.property("PatientID");
      expect(res[0]).to.have.property("PatientPK");
      expect(res[0]).to.have.property("FacilityName");
      expect(res[0]).to.have.property("siteCode");
      expect(res[0]).to.have.property("VisitID");
      expect(res[0]).to.have.property("Drug");
      expect(res[0]).to.have.property("DispenseDate");
      expect(res[0]).to.have.property("duration");
      expect(res[0]).to.have.property("PeriodTaken");
      expect(res[0]).to.have.property("ExpectedReturn");
      expect(res[0]).to.have.property("Emr");
      expect(res[0]).to.have.property("Project");
      expect(res[0]).to.have.property("TreatmentType");
      expect(res[0]).to.have.property("RegimenLine");
      expect(res[0]).to.have.property("ProphylaxisType");
      expect(res[0]).to.have.property("DateExtracted");
      expect(res[0]).to.have.property("date_created");
      expect(res[0]).to.have.property("date_last_modified");

      
    }
  });
});