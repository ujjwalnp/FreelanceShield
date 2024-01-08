
module.exports = {
  networks: {
    development: {
      host: '127.0.0.1', 
      port: 7545, 
      network_id: '*',
      gas: 6721975,
    },
    
  },

  compilers: {
    solc: {
      version: '0.8.1',
      settings: {
        metadata: {
          bytecodeHash: 'none',
        },
        optimizer: {
          enabled: true,
          runs: 800,
          details: {
            yul: true,
          }
        },
        viaIR: false,
      },
    },
  },

  contracts_directory: './src/contracts/',  
  contracts_build_directory: './src/abis/',

};
