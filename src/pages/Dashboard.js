import { Button } from "flowbite-react";
import { Contract } from "../Components/Contract";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Dashboard = ({
  currentAccount,
  freelanceShieldContracts,
  depositSecurityDeposit,
  updateProjectState,
  markProjectCompleted,
  verifyProject,
  transferFund
}) => {
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
    <div className="p-5 w-screen">
      <span class="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{currentAccount}</span>
      <div className="flex justify-end">
        <button className="p-3 bg-blue-400 rounded-lg text-white font-sans font-semibold">
          <Link to="/create">Create</Link>
        </button>
      </div>

      <h1 className="text-2xl font-bold mt-10 mb-10">Contracts</h1>
      <Contract
        currentAccount={currentAccount}
        contracts={contracts}
        depositSecurityDeposit={depositSecurityDeposit}
        updateProjectState={updateProjectState}
        markProjectCompleted={markProjectCompleted}
        verifyProject={verifyProject}
        transferFund={transferFund}
      />
    </div>
  );
};
