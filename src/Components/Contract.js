import React, { useState } from 'react';
import { weiToEth } from '../utils';

function convertBigIntToString(value) {
  // Convert BigInt to string
  return value.toString();
}

export function Contract({ contracts }) {
  const [openContractIndex, setOpenContractIndex] = useState(null);

  const handleToggleContract = (index) => {
    setOpenContractIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  function getStateString(state) {
    switch (state) {
      case 0:
        return 'Created';
      case 1:
        return 'InProgress';
      case 2:
        return 'Completed';
      case 3:
        return 'Closed';
      case 4:
        return 'Cancelled';
      default:
        return 'Unknown';
    }
  }

  return (
    <div>
      {contracts.map((contract, index) => (
        <div
          key={index}
          className={`contract-box border p-4 mb-4 rounded ${
            openContractIndex === index ? 'bg-gray-200' : 'bg-gray-100'
          }`}
        >
          <div className="flex justify-between items-center">
            <div
              onClick={() => handleToggleContract(index)}
              className="cursor-pointer font-bold"
            >
              {contract.projectName}
            </div>
            <button onClick={() => handleToggleContract(index)}>
              {openContractIndex === index ? '▲' : '▼'}
            </button>
          </div>
          {openContractIndex === index && (
            <div className="flex flex-col gap-2 mt-2">
              <span className="mb-2 text-gray-500">
                <span className='font-bold'>Project Name: </span> {contract.projectName}
              </span>
            
              <span className="mb-2 text-gray-500">
                <span className='font-bold'>Client's Address: </span> {contract.client}
              </span>
              <span className="mb-2 text-gray-500">
                <span className='font-bold'>Freelancer's Address: </span> {contract.freelancer}
              </span>
              <span className="mb-2 text-gray-500">
                <span className='font-bold'>Security Deposit Amount: </span> {weiToEth(contract.securityDepositAmount)} ETH
              </span>
              <span className="mb-2 text-gray-500">
                <span className='font-bold'>Total Budget: </span> {weiToEth(contract.totalBudget)} ETH
              </span>
              <span className='mb-2 text-gray-500'>
                <span className='font-bold '>Project Deadline: </span>
                {new Date(Number(contract.deadline) * 1000).toLocaleDateString()}
              </span>
              <span className='mb-2 text-gray-500 flex gap-3'>
                <span className='font-bold'>
                    Project State: </span>
                {getStateString(Number(contract.state))}
              </span>
              <span className='mb-2 text-gray-500 flex gap-3'>
                <span className='font-bold'>
                    Freelancer Signed: 
                </span>
                {contract.freelancerSigned.toString()}
              </span>
              <span className='mb-2 text-gray-500 flex gap-3'>
                <span className='font-bold'>
                    Client Signed: 
                </span>
                {contract.clientSigned.toString()}
              </span>
              <span className='mb-2 text-gray-500 flex gap-3'>
                <span className='font-bold'>
                   Project Verified: 
                </span>
                {contract.projectVerified.toString()}
              </span>
              <span className='mb-2 text-gray-500 flex gap-3'>
                <span className='font-bold'>
                   Fund Transferred: 
                </span>
                {contract.fundTransferred.toString()}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
