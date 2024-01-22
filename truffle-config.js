require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

const mnemonic = process.env.MNEMONIC;
const infuraApiKey = process.env.INFURA_API_KEY;

module.exports = {
  networks: {
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraApiKey}`),
      network_id: 3,
    },
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*',
      gas: 6721975,
    },
    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, `https://sepolia.infura.io/v3/${infuraApiKey}`),
      networkCheckTimeout: 100000 ,
      network_id: 11155111,
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
