import React, { useState } from 'react';

export const Create = ({ addContract }) => {
  const [contractData, setContractData] = useState({
    contractName: '',
    securityDeposit: '$',
    phoneNumber: '',
    totalBudget: '$',
    company: '',
    projectStatus: '',
    projectDeadline: '',
  });

  const handleChange = (e) => {
    setContractData({
      ...contractData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (
      !contractData.contractName ||
      !contractData.securityDeposit ||
      !contractData.phoneNumber ||
      !contractData.totalBudget ||
      !contractData.company ||
      !contractData.projectStatus ||
      !contractData.projectDeadline
    ) {
      alert('Please fill in all required fields.');
      return;
    }
    const newContract = {
      projectName: contractData.contractName,
      securityDeposit: contractData.securityDeposit,
      phoneNumber: contractData.phoneNumber,
      totalBudget: contractData.totalBudget,
      company: contractData.company,
      projectStatus: contractData.projectStatus,
      projectDeadline: contractData.projectDeadline,
    };

    // Update contracts in the Dashboard component
    addContract(newContract);
    const updatedContracts = JSON.parse(localStorage.getItem('contracts')) || [];
    localStorage.setItem('contracts', JSON.stringify([...updatedContracts, newContract]));
  };

  return (
    <div className="m-10">
      <h1 className="font-bold text-3xl">Create Contract</h1>
      <form className="m-10" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="contractName"
              id="contractName"
              value={contractData.contractName}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="contractName"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Contract Name
            </label>
          </div>
  
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="securityDeposit"
              id="securityDeposit"
              value={contractData.securityDeposit}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="securityDeposit"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Security Deposit
            </label>
          </div>

  {/* <div className="relative z-0 w-full mb-5 group">
    <input
      type="text"
      name="lastName"
      id="lastName"
      value={contractData.lastName}
      onChange={handleChange}
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required
    />
    <label
      htmlFor="lastName"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Last name
    </label>
  </div> */}
</div>
<div className="grid md:grid-cols-2 md:gap-6">
<div className="relative z-0 w-full mb-5 group">
    <input
      type="tel"
      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      name="phoneNumber"
      id="phoneNumber"
      value={contractData.phoneNumber}
      onChange={handleChange}
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required
    />
    <label
      htmlFor="phoneNumber"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Phone number (123-456-7890)
    </label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input
      type="text"
      name="totalBudget"
      id="totalBudget"
      value={contractData.totalBudget}
      onChange={handleChange}
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required
    />
    <label
      htmlFor="securityDeposit"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Total Budget
    </label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input
      type="text"
      name="company"
      id="company"
      value={contractData.company}
      onChange={handleChange}
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required
    />
    <label
      htmlFor="company"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      placeholder=" "
      required
   >
      Company (Ex. Google)
    </label>
  </div>
   <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="projectStatus"
            className="block text-sm font-medium text-gray-500 dark:text-gray-400" 
          >
            Project Status
          </label>
          <select
            id="projectStatus"
            name="projectStatus"
            value={contractData.projectStatus}
            onChange={handleChange}
            className="block w-full py-2.5 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-gray-500"
            placeholder=" "
            required
          >
            <option value="Created">Created</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="projectDeadline"
            className="block text-sm font-medium text-gray-500 dark:text-gray-400" 
          >
            Project Deadline
          </label>
          <input
            type="date"
            id="projectDeadline"
            name="projectDeadline"
            value={contractData.projectDeadline}
            onChange={handleChange}
            className="block w-full py-2.5 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder=" "
            required
          />
        </div>
      </div>

      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Submit
      </button>
    </form>
  </div>
);
};