import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Web3 from "web3";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Create } from "./pages/Create";

import "./App.css";
import Navbar from "./Components/Navbar";
import { ethToWei, weiToEth } from './utils';

import freelanceShieldContract from "./abis/FreelanceShieldContract.json";

function App() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [freelanceShieldContracts, setFreelanceShieldContracts] = useState([]);
  const [projectContracts, setProjectContracts] = useState([]);

  const loadWeb3 = async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();
        const { web3 } = window;
        const accounts = await web3.eth.getAccounts();
        setCurrentAccount(accounts[0]);
        // Initialize the smart contract instance
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = freelanceShieldContract.networks[networkId];
        const contractInstance = new web3.eth.Contract(
          freelanceShieldContract.abi,
          deployedNetwork && deployedNetwork.address
        );

        const allContracts = await contractInstance.methods.getAllContracts().call();

        // Update the state with the fetched contracts
        setFreelanceShieldContracts(allContracts);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User Rejected the Request!",
        });
      }
    }
    // Legacy dapp Browser...
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No browser wallet detected. You should consider trying MetaMask!",
      });
    }
  };

  // Function to create a contract
  const createContract = async (
    freelancerAddress,
    projectName,
    deadline,
    totalBudget,
    securityDepositAmount
  ) => {
    try {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = freelanceShieldContract.networks[networkId];
      const contractInstance = new web3.eth.Contract(
        freelanceShieldContract.abi,
        deployedNetwork && deployedNetwork.address
      );

      // Convert input values to appropriate types if needed (e.g., converting strings to integers)
      const deadlineTimestamp = Math.floor(new Date(deadline).getTime() / 1000);
      
      // Call the createContract method
      await contractInstance.methods
        .createContract(
          freelancerAddress,
          projectName,
          deadlineTimestamp,
          ethToWei(totalBudget),
          ethToWei(securityDepositAmount)
        )
        .send({ from: accounts[0] });
            
      console.log(ethToWei(totalBudget))
      // Display success message
      Swal.fire({
        icon: "success",
        title: "Contract Created!",
        text: "The contract has been successfully created.",
      });

      // Retrieve the newly created contract ID and other details (if needed)
      // Example: const newContractId = await contractInstance.methods.getNewlyCreatedContractId().call();

      // Add the new contract to the state in App.js
      // Example: addContract({ id: newContractId, client: accounts[0], freelancer: freelancerAddress, ... });
    } catch (error) {
      // Handle errors
      console.error("Error creating contract:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "An error occurred while creating the contract.",
      });
    }
  };

  // Function to deposit security deposit
  const depositSecurityDeposit = async (role, contract, depositAmount) => {
    try {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = freelanceShieldContract.networks[networkId];
      const contractInstance = new web3.eth.Contract(
        freelanceShieldContract.abi,
        deployedNetwork && deployedNetwork.address
      );

      // Call the depositSecurityDeposit method
      await contractInstance.methods
        .depositSecurityDeposit(contract.id)
        .send({ from: accounts[0], value: depositAmount });

      // Display success message
      Swal.fire({
        icon: 'success',
        title: 'Security Deposit Deposited!',
        text: `Security deposit has been successfully deposited as ${role} for contract ID ${contract.id}.`,
      });

      // Update the state with the latest contracts after the deposit
      const updatedContracts = await contractInstance.methods.getAllContracts().call();
      setFreelanceShieldContracts(updatedContracts);
    } catch (error) {
      // Handle errors
      console.error(`Error depositing security deposit as ${role}:`, error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `An error occurred while depositing security deposit as ${role}.`,
      });
    }
  };

  useEffect(() => {
    loadWeb3();
  }, []);

  return (
    <div className="flex w-screen">
      <Navbar />
      <div className="w-full">
        <Routes>
          <Route
            path="/create"
            element={<Create createContract={createContract} setFreelanceShieldContracts={setFreelanceShieldContracts} />}
          />
          <Route
            path="/"
            element={
              <Dashboard
                currentAccount={currentAccount}
                freelanceShieldContracts={freelanceShieldContracts}
                depositSecurityDeposit={depositSecurityDeposit}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
