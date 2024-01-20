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
            <span className='font-bold'>phone Number: </span> {contract.phoneNumber}
          </span>
          <span className="mb-2 text-gray-500">
            <span className='font-bold'>Total Budget: </span> {contract.totalBudget}
          </span>
          <span className="mb-2 text-gray-500">
            <span className='font-bold'>Company: </span> {contract.company}
          </span>
          <span className='mb-2 text-gray-500'>
            <span className='font-bold '>Project Deadline: </span>
            {contract.projectDeadline}
          </span>
          <span className='mb-2 text-gray-500 flex gap-3'>
            <span className='font-bold'>
                Security Deposit: </span>
            {contract.securityDeposite}
          </span>
          <span className='mb-2 text-gray-500 flex gap-3'>
            <span className='font-bold'>
                Project Status: 
            </span>
            {contract.projectStatus}
          </span>
          

          </div>
          )}
        </div>
      ))}
    </div>
  );
}