import { Button } from "flowbite-react"
import { Contract } from "../Components/Contract"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

export const Dashboard = ({ currentAccount }) => {
    const [contracts, setContracts] = useState([]);
    
  
    useEffect(() => {
      // Load contracts from local storage on component mount
      const storedContracts = JSON.parse(localStorage.getItem('contracts')) || [];
      setContracts(storedContracts);
    }, []);
  
    const addContract = (newContract) => {
      // Update contracts and store in local storage
      const updatedContracts = [...contracts, newContract];
      setContracts(updatedContracts);
      localStorage.setItem('contracts', JSON.stringify(updatedContracts));
    };
  
    return (
      <div className="p-5">
            <p>{currentAccount}</p>
        <div className="flex justify-end">
          <button className="p-3 bg-blue-400 rounded-lg text-white font-sans font-semibold">
            <Link to="/create">Create</Link>
          </button>
        </div>
  
        <h1 className="text-2xl font-bold mt-10 mb-10">Contracts</h1>
        <Contract contracts={contracts} />
      </div>
    );
  };
  