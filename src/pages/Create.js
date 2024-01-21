import React, { useState } from "react";

export const Create = ({ createContract, setFreelanceShieldContracts }) => {
  const [contractData, setContractData] = useState({
    projectName: "",
    freelancer: "",
    securityDepositAmount: "",
    totalBudget: "",
    deadline: "",
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
      !contractData.projectName ||
      !contractData.freelancer ||
      !contractData.securityDepositAmount ||
      !contractData.totalBudget ||
      !contractData.deadline
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const numericSecurityDepositAmount = parseFloat(contractData.securityDepositAmount);
    const numericTotalBudget = parseFloat(contractData.totalBudget);

    const newContract = {
      projectName: contractData.projectName,
      freelancer: contractData.freelancer,
      securityDepositAmount: numericSecurityDepositAmount,
      totalBudget: numericTotalBudget,
      deadline: contractData.deadline,
    };

    // Reset form
    setContractData({
      projectName: "",
      freelancer: "",
      securityDepositAmount: "",
      totalBudget: "",
      deadline: "",
    });

    // Call the createContract function
    createContract(
        newContract.freelancer,
        newContract.projectName,
        newContract.deadline,
        newContract.totalBudget,
        newContract.securityDepositAmount
      );
    
      // update it to state vaiable to show it instantly
      setFreelanceShieldContracts((prev) => [...prev, newContract]);
  };

  return (
    <div className="m-10">
      <h1 className="font-bold text-3xl">Create Contract</h1>
      <form className="m-10" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="projectName"
              id="projectName"
              value={contractData.projectName}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="projectName"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Contract Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="freelancer"
              id="freelancer"
              value={contractData.freelancer}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="contractName"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Freelancer's Address
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="securityDepositAmount"
              id="securityDepositAmount"
              value={contractData.securityDepositAmount}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="securityDepositAmount"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Security Deposit Amount
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
              htmlFor="totalBudget"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Total Budget
            </label>
          </div>



          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="deadline"
              className="block text-sm font-medium text-gray-500 dark:text-gray-400"
            >
              Project Deadline
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={contractData.deadline}
              onChange={handleChange}
              className="block w-full py-2.5 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder=" "
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
