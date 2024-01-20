import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Web3 from 'web3';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Create } from './pages/Create';

import './App.css';
import Navbar from './Components/Navbar';

function App() {
  const [currentAccount, setCurrentAccount] = useState('');
  const [cfContract, setCFContract] = useState({});
  const [contracts, setContracts] = useState([]);

  const loadWeb3 = async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();
        const { web3 } = window;
        const accounts = await web3.eth.getAccounts();
        setCurrentAccount(accounts[0]);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'User Rejected the Request!',
        });
      }
    }
    // Legacy dapp Browser...
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No browser wallet detected. You should consider trying MetaMask!',
      });
    }
  };

  const addContract = (newContract) => {
    setContracts((prevContracts) => [...prevContracts, newContract]);
  };


  useEffect(() => {
    loadWeb3();
  }, []);

  return (
    <div className="flex w-screen">
      <Navbar />
      <div className='w-full'>
        <Routes>
          <Route path='/create' element={<Create addContract={addContract} />} />
          <Route path="/" element={<Dashboard currentAccount={currentAccount} contracts={contracts} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
