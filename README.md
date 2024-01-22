# FreelanceShield


## Setup Instructions

1. Copy the `.env.example` file to `.env`.
2. Obtain an Infura API key and set it as the value for `INFURA_API_KEY` in the `.env` file.
3. Replace `your_mnemonic_here` with your actual mnemonic phrase in the `.env` file.
4. Run the following commands in your terminal:

```bash
npm install   # Install project dependencies
truffle compile   # Compile smart contracts
truffle migrate --network ropsten   # Migrate contracts to the Ropsten network

