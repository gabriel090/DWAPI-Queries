describe("Connect and validate ART Patient extracts", () => {
  let res = [];
  it("Check if the art_patients.sql will run without any error", () => {
    cy.readFile("./DWAPI Current Extracts/art_patients.sql").then(
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
      expect(res[0]).to.have.property("AgeARTStart");
      expect(res[0]).to.have.property("AgeEnrollment");
      expect(res[0]).to.have.property("AgeLastVisit");
      expect(res[0]).to.have.property("DOB");
      expect(res[0]).to.have.property("DateExtracted");
      expect(res[0]).to.have.property("Emr");
      expect(res[0]).to.have.property("ExitDate");
      expect(res[0]).to.have.property("ExitReason");
      expect(res[0]).to.have.property("ExpectedReturn");
      expect(res[0]).to.have.property("FacilityId");
      expect(res[0]).to.have.property("FacilityName");
      expect(res[0]).to.have.property("Gender");
      expect(res[0]).to.have.property("LastARTDate");
      expect(res[0]).to.have.property("LastRegimen");
      expect(res[0]).to.have.property("LastRegimenLine");
      expect(res[0]).to.have.property("LastVisit");
      expect(res[0]).to.have.property("PatientID");
      expect(res[0]).to.have.property("PatientPK");
      expect(res[0]).to.have.property("PatientSource");
      expect(res[0]).to.have.property("PreviousARTRegimen");
      expect(res[0]).to.have.property("PreviousARTStartDate");
      expect(res[0]).to.have.property("Project");
      expect(res[0]).to.have.property("Provider");
      expect(res[0]).to.have.property("RegistrationDate");
      expect(res[0]).to.have.property("SatelliteName");
      expect(res[0]).to.have.property("StartARTAtThisFacility");
      expect(res[0]).to.have.property("StartARTDate");
      expect(res[0]).to.have.property("StartRegimen");
      expect(res[0]).to.have.property("StartRegimenLine");
      expect(res[0]).to.have.property("date_created");
      expect(res[0]).to.have.property("date_last_modified");
      expect(res[0]).to.have.property("duration");
      expect(res[0]).to.have.property("siteCode");
      // expect(res[0]).to.have.property("ContactRelation");
    }
  });
});
