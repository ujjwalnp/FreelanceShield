import React, { useState } from "react";
import { weiToEth } from "../utils";

function convertBigIntToString(value) {
  // Convert BigInt to string
  return value.toString();
}

export function Contract({
  currentAccount,
  contracts,
  depositSecurityDeposit,
  updateProjectState,
  markProjectCompleted,
  verifyProject,
  transferFund,
}) {
  const [openContractIndex, setOpenContractIndex] = useState(null);

  const handleToggleContract = (index) => {
    setOpenContractIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  function getStateString(state) {
    switch (state) {
      case 0:
        return "Created";
      case 1:
        return "InProgress";
      case 2:
        return "Completed";
      case 3:
        return "Closed";
      case 4:
        return "Cancelled";
      default:
        return "Unknown";
    }
  }

  function identifyRole(contract) {
    if (contract.freelancer === currentAccount) {
      return "freelancer";
    } else if (contract.client === currentAccount) {
      return "client";
    } else {
      return "unknown";
    }
  }

  const renderDepositButton = (contract) => {
    const role = identifyRole(contract);
    if (role == "freelancer" && !contract.freelancerSigned) {
      return (
        <button
          onClick={() =>
            depositSecurityDeposit(
              role,
              contract,
              contract.securityDepositAmount
            )
          }
        >
          Deposit
        </button>
      );
    } else if (role == "client" && !contract.clientSigned) {
      return (
        <button
          onClick={() =>
            depositSecurityDeposit(
              role,
              contract,
              contract.securityDepositAmount
            )
          }
        >
          Deposit
        </button>
      );
    }
    return null;
  };

  const renderChangeToInProgressButton = (contract) => {
    const role = identifyRole(contract);
    if (
      role == "freelancer" &&
      contract.freelancerSigned &&
      contract.state == 0
    ) {
      return (
        <button onClick={() => updateProjectState(contract)}>
          Change to InProgress
        </button>
      );
    }
    return null;
  };

  const renderMarkProjectCompletedButton = (contract) => {
    const role = identifyRole(contract);
    if (role == "freelancer" && contract.state == 1) {
      return (
        <button onClick={() => markProjectCompleted(contract)}>
          Mark Project Completed
        </button>
      );
    }
    return null;
  };

  const renderVerifyProjectButton = (contract) => {
    const role = identifyRole(contract);
    if (role == "client" && contract.state == 2 && !contract.projectVerified) {
      return (
        <button onClick={() => verifyProject(contract)}>Verify Project</button>
      );
    }
    return null;
  };

  const renderTransferFundButton = (contract) => {
    const role = identifyRole(contract);
    const transferAmount = contract.totalBudget;
    if (role == "client" && contract.state == 2 && contract.projectVerified) {
      return (
        <button onClick={() => transferFund(contract, transferAmount)}>Transfer Fund</button>
      );
    }
    return null;
  };

  return (
    <div>
      {contracts.map((contract, index) => (
        <div
          key={index}
          className={`contract-box border p-4 mb-4 rounded ${
            openContractIndex === index ? "bg-gray-200" : "bg-gray-100"
          }`}
        >
          <div className="flex justify-between items-justify">
            <div
              onClick={() => handleToggleContract(index)}
              className="cursor-pointer font-bold"
            >
              {contract.projectName}
            </div>
            <div>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                {identifyRole(contract)}
              </span>
              <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                {getStateString(Number(contract.state))}
              </span>
              <button onClick={() => handleToggleContract(index)}>
                {openContractIndex === index ? "▲" : "▼"}
              </button>
            </div>
          </div>
          {openContractIndex === index && (
            <div className="flex flex-col gap-2 mt-2">
              <span className="mb-2 text-gray-500">
                <span className="font-bold">Project Name: </span>{" "}
                {contract.projectName}
              </span>

              <span className="mb-2 text-gray-500">
                <span className="font-bold">Client's Address: </span>{" "}
                {contract.client}
              </span>
              <span className="mb-2 text-gray-500">
                <span className="font-bold">Freelancer's Address: </span>{" "}
                {contract.freelancer}
              </span>
              <span className="mb-2 text-gray-500">
                <span className="font-bold">Security Deposit Amount: </span>{" "}
                {weiToEth(contract.securityDepositAmount)} ETH
                <div className="flex gap-2">
                  {renderDepositButton(contract)}
                </div>
              </span>
              <span className="mb-2 text-gray-500">
                <span className="font-bold">Total Budget: </span>{" "}
                {weiToEth(contract.totalBudget)} ETH
              </span>
              <span className="mb-2 text-gray-500">
                <span className="font-bold ">Project Deadline: </span>
                {new Date(
                  Number(contract.deadline) * 1000
                ).toLocaleDateString()}
              </span>
              <span className="mb-2 text-gray-500 flex gap-3">
                <span className="font-bold">Project State: </span>
                {getStateString(Number(contract.state))}
                <div className="flex gap-2">
                  {renderChangeToInProgressButton(contract)}
                  {renderMarkProjectCompletedButton(contract)}
                </div>
              </span>
              <span className="mb-2 text-gray-500 flex gap-3">
                <span className="font-bold">Freelancer Signed:</span>
                {contract.freelancerSigned.toString()}
              </span>
              <span className="mb-2 text-gray-500 flex gap-3">
                <span className="font-bold">Client Signed:</span>
                {contract.clientSigned.toString()}
              </span>
              <span className="mb-2 text-gray-500 flex gap-3">
                <span className="font-bold">Project Verified:</span>
                {contract.projectVerified.toString()}
                <div className="flex gap-2">
                  {renderVerifyProjectButton(contract)}
                </div>
              </span>
              <span className="mb-2 text-gray-500 flex gap-3">
                <span className="font-bold">Fund Transferred:</span>
                {contract.fundTransferred.toString()}
                <div className="flex gap-2">
                  {renderTransferFundButton(contract)}
                </div>
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
