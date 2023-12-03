const RecordHealthCare = artifacts.require('RecordHealthCare'); // Adjust based on your contract name

contract('RecordHealthCare', (accounts) => {
  let instance;

  beforeEach(async () => {
    instance = await RecordHealthCare.new(); // Deploy a new instance for each test
  });

  it('should deploy the smart contract', async () => {
    assert.ok(instance.address);
  });

  it('should set patient details', async () => {
    // Your test logic here
  });

  // Add more test cases as needed

  // Example test case for searching patient demographic details
  it('should search patient demographic details', async () => {
    await instance.setDetailsPatient(
      'John Doe',
      '1234567890',
      'Male',
      '01/01/1990',
      '180',
      '70',
      '123 Main St',
      'O+',
      'None',
      'Emergency Contact',
      'Emergency Contact Number',
      { from: accounts[0] }
    );

    const patientDetails = await instance.searchPatientDemographic(accounts[0], {
      from: accounts[0],
    });

    // Add assertions based on the expected results
    assert.equal(patientDetails[0], 'John Doe');
    assert.equal(patientDetails[1], '1234567890');
    // Add more assertions as needed
  });
});
