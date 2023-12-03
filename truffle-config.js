require('babel-register');
require("babel-polyfill");

module.exports = {
    networks: {
        development: {
            host: '127.0.0.1',
            port: '7575',
            network_id: '*' // connect to any network
        },
    },
    contract_directory: './ethereum/contracts',
    contract_build_directory: './ethereum/build/contracts',
    compilers:{
        solc:{
            version: '0.8.19',
            optimizer:{
                enabled:true,
                runs: 200
            }
        }
    }
}
