import React, { useState } from 'react';

export function Contract({ contracts }) {
  const [openContractIndex, setOpenContractIndex] = useState(null);

  const handleToggleContract = (index) => {
    setOpenContractIndex((prevIndex) => (prevIndex === index ? null : index));
  };

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
            <span className='font-bold'>Freelancer's Address: </span> {contract.freelancer}
          </span>
          <span className="mb-2 text-gray-500">
            <span className='font-bold'>Security Deposit Amount: </span> {contract.securityDepositAmount}
          </span>
          <span className="mb-2 text-gray-500">
            <span className='font-bold'>Total Budget: </span> {contract.totalBudget}
          </span>
          <span className='mb-2 text-gray-500'>
            <span className='font-bold '>Project Deadline: </span>
            {contract.deadline}
          </span>
          <span className='mb-2 text-gray-500 flex gap-3'>
            <span className='font-bold'>
                Project State: </span>
            {contract.state}
          </span>
          <span className='mb-2 text-gray-500 flex gap-3'>
            <span className='font-bold'>
                Freelancer Signed: 
            </span>
            {contract.freelancerSigned}
          </span>
          <span className='mb-2 text-gray-500 flex gap-3'>
            <span className='font-bold'>
                Client Signed: 
            </span>
            {contract.clientSigned}
          </span>
          <span className='mb-2 text-gray-500 flex gap-3'>
            <span className='font-bold'>
               Project Verified: 
            </span>
            {contract.projectVerified}
          </span>
          <span className='mb-2 text-gray-500 flex gap-3'>
            <span className='font-bold'>
               Fund Transferred: 
            </span>
            {contract.fundTransferred}
          </span>
          

          </div>
          )}
        </div>
      ))}
    </div>
  );
}