// RecordHealthCareTest.js

// The line imports the compiled artifact of your smart contract. 
// Truffle artifacts help in interacting with deployed contracts in a JavaScript environment
const RecordHealthCare = artifacts.require("RecordHealthCareData");

// This code sets up a new test suite using Mocha.
// It declares variables for the smart contract instance and Ethereum addresses for the owner, patient, and docto
contract("RecordHealthCare", (accounts) => {
  let recordHealthCareInstance;
  const owner = accounts[0];
  const patient = accounts[1];
  const doctor = accounts[2];
// This code is executed before each test case.
// It deploys a new instance of the RecordHealthCare contract and assigns it to recordHealthCareInstance.
// The { from: owner } part specifies the owner's address for deployment.
  beforeEach(async () => {
    recordHealthCareInstance = await RecordHealthCare.new({ from: owner });
  });

  it("should allow the owner to set patient details", async () => {
    const ic = "123456789";
    const name = "John Doe";
    const phone = "1234567890";
    const gender = "Male";
    const dob = "1990-01-01";
    const height = "175 cm";
    const weight = "70 kg";
    const houseaddr = "123 Main St";
    const bloodgroup = "A+";
    const emergencyName = "Emergency Contact";
    const emergencyContact = "9876543210";

    await recordHealthCareInstance.setDetailsPatient(
      ic,
      name,
      phone,
      gender,
      dob,
      height,
      weight,
      houseaddr,
      bloodgroup,
      emergencyName,
      emergencyContact,
      { from: patient }
    );

    const patientList = await recordHealthCareInstance.getPatients();
    assert.equal(patientList.length, 1, "Patient not added");

    const patientAddress = patientList[0];
    const [resultIC, resultName, resultPhone, resultGender, resultDob, resultHeight, resultWeight] =
      await recordHealthCareInstance.searchPatientDemographic(patientAddress);

    assert.equal(resultIC, ic, "Incorrect IC");
    assert.equal(resultName, name, "Incorrect Name");
    assert.equal(resultPhone, phone, "Incorrect Phone");
    assert.equal(resultGender, gender, "Incorrect Gender");
    assert.equal(resultDob, dob, "Incorrect DOB");
    assert.equal(resultHeight, height, "Incorrect Height");
    assert.equal(resultWeight, weight, "Incorrect Weight");
  });

  it("should allow the owner to set doctor details", async () => {
    const ic = "987654321";
    const name = "Dr. Smith";
    const phone = "9876543210";
    const gender = "Female";
    const dob = "1980-01-01";
    const qualification = "MD";
    const major = "Cardiology";

    await recordHealthCareInstance.setDoctor(
      ic,
      name,
      phone,
      gender,
      dob,
      qualification,
      major,
      { from: doctor }
    );

    const doctorList = await recordHealthCareInstance.getDoctors();
    assert.equal(doctorList.length, 1, "Doctor not added");

    const doctorAddress = doctorList[0];
    const [resultIC, resultName, resultPhone, resultGender, resultDob, resultQualification, resultMajor] =
      await recordHealthCareInstance.searchDoctor(doctorAddress);

    assert.equal(resultIC, ic, "Incorrect IC");
    assert.equal(resultName, name, "Incorrect Name");
    assert.equal(resultPhone, phone, "Incorrect Phone");
    assert.equal(resultGender, gender, "Incorrect Gender");
    assert.equal(resultDob, dob, "Incorrect DOB");
    assert.equal(resultQualification, qualification, "Incorrect Qualification");
    assert.equal(resultMajor, major, "Incorrect Major");
  });

  // Add more tests based on your contract functionality

  // Example test for editing patient details
  it("should allow the patient to edit their details", async () => {
    // Set initial patient details
    const initialName = "John Doe";
    await recordHealthCareInstance.setDetailsPatient(
      "123456789",
      initialName,
      "1234567890",
      "Male",
      "1990-01-01",
      "175 cm",
      "70 kg",
      "123 Main St",
      "A+",
      "Emergency Contact",
      "9876543210",
      { from: patient }
    );

    // Edit patient details
    const newName = "Jane Doe";
    await recordHealthCareInstance.editDetailsPatient(
      "123456789",
      newName,
      "1234567890",
      "Female",
      "1990-01-01",
      "170 cm",
      "65 kg",
      "456 Second St",
      "B+",
      "New Emergency Contact",
      "9876543210",
      { from: patient }
    );

    // Verify that the details have been updated
    const [resultIC, resultName, , resultGender, , resultHeight, resultWeight] =
      await recordHealthCareInstance.searchPatientDemographic(patient);
    assert.equal(resultName, newName, "Patient details not updated");
  });
});
