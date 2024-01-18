const RecordHealthCare = artifacts.require("RecordHealthcareData");

module.exports = function (deployer) {
  deployer.deploy(RecordHealthCare);
};