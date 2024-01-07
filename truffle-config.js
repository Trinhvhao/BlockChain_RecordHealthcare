const path = require('path');
module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7575,
      network_id: "*", // Match any network id
      gas: 5000000
    }
  },
  compilers: {
    solc: {
      version: "0.8.19",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200      // Default: 200
        },
      }
    }
  },
  contracts_build_directory: path.join(__dirname, "src/contracts")
};
