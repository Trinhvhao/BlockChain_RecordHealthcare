const RecordHealthCare = artifacts.require("RecordHealthcare");

module.exports = function (deployer) {
  deployer.deploy(RecordHealthCare);
};