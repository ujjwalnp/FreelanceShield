import { Button } from "flowbite-react"
import { Contract } from "../Components/Contract"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

export const Dashboard = ({ currentAccount, freelanceShieldContracts }) => {
    const [contracts, setContracts] = useState([]);
    
  
    useEffect(() => {
        // Check if freelanceShieldContracts is not undefined before setting the state
        if (freelanceShieldContracts !== undefined) {
          setContracts(freelanceShieldContracts);
        }
      }, [freelanceShieldContracts]); // Add freelanceShieldContracts as a dependency
    
  
    const addContract = (newContract) => {
      // Update contracts and store in local storage
      const updatedContracts = [...contracts, newContract];
      setContracts(updatedContracts);
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
  