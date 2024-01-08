// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

contract FreelanceShieldContract {
    enum ProjectState { Created, InProgress, Completed, Closed, Cancelled }

    struct Contract {
        address client;
        address freelancer;
        uint256 securityDepositAmount;
        uint256 clientSecurityDeposit;
        uint256 freelancerSecurityDeposit;
        ProjectState state;
        string projectName;
        uint256 deadline;
        uint256 totalBudget;
        bool freelancerSigned;
        bool clientSigned;
        bool projectVerified;
        bool fundTransferred;
    }
    
    mapping(uint256 => Contract) public contracts;
    uint256 public contractCounter;

    mapping(address => uint256[]) public clientContracts;
    mapping(address => uint256[]) public freelancerContracts;

    event ContractCreated(uint256 contractId, address client, address freelancer, string projectName, uint256 deadline, uint256 totalBudget);
    event SecurityDepositDeposited(uint256 contractId, address depositor, uint256 amount);
    event ProjectStateChanged(uint256 contractId, ProjectState newState);
    event ProjectCompleted(uint256 contractId);
    event ProjectVerified(uint256 contractId, address verifier);
    event FundTransferred(uint256 contractId, address from, address to, uint256 amount);
    event SecurityDepositRefunded(uint256 contractId, address payee, uint256 amount);

    modifier onlyClient(uint256 contractId) {
        require(msg.sender == contracts[contractId].client, "Only the client can call this function");
        _;
    }

    modifier onlyFreelancer(uint256 contractId) {
        require(msg.sender == contracts[contractId].freelancer, "Only the freelancer can call this function");
        _;
    }

    function createContract(
        address _freelancer,
        string memory _projectName,
        uint256 _deadline,
        uint256 _totalBudget,
        uint256 _securityDepositAmount
    ) external {
        contractCounter++;
        contracts[contractCounter] = Contract({
            client: msg.sender,
            freelancer: _freelancer,
            state: ProjectState.Created,
            projectName: _projectName,
            deadline: _deadline,
            totalBudget: _totalBudget,
            securityDepositAmount: _securityDepositAmount,
            clientSecurityDeposit: 0,
            freelancerSecurityDeposit: 0,
            freelancerSigned: false,
            clientSigned: false,
            projectVerified: false,
            fundTransferred: false
        });

        clientContracts[msg.sender].push(contractCounter);
        freelancerContracts[_freelancer].push(contractCounter);

        emit ContractCreated(contractCounter, msg.sender, _freelancer, _projectName, _deadline, _totalBudget);
    }

    function depositSecurityDeposit(uint256 contractId) external payable {
        require(contracts[contractId].securityDepositAmount == msg.value, "Incorrect security deposit amount");

        if (msg.sender == contracts[contractId].client) {
            require(!contracts[contractId].clientSigned, "Client already signed the contract");
            contracts[contractId].clientSigned = true;
            contracts[contractId].clientSecurityDeposit += msg.value;
        } else if (msg.sender == contracts[contractId].freelancer) {
            require(!contracts[contractId].freelancerSigned, "Freelancer already signed the contract");
            contracts[contractId].freelancerSigned = true;
            contracts[contractId].freelancerSecurityDeposit += msg.value;
        }
        emit SecurityDepositDeposited(contractId, msg.sender, msg.value);
    }

    function updateProjectState(uint256 contractId, ProjectState newState) external onlyFreelancer(contractId) {
        require(contracts[contractId].freelancerSigned, "Freelancer must sign the contract first");
        contracts[contractId].state = newState;
        emit ProjectStateChanged(contractId, newState);
    }

    function markProjectCompleted(uint256 contractId) external onlyFreelancer(contractId) {
        require(contracts[contractId].state == ProjectState.InProgress, "Project is not in progress");
        contracts[contractId].state = ProjectState.Completed;
        emit ProjectCompleted(contractId);
    }

    function verifyProject(uint256 contractId) external onlyClient(contractId) {
        require(contracts[contractId].clientSigned, "Client must sign the contract first");
        require(contracts[contractId].state == ProjectState.Completed, "Project is not completed");
        contracts[contractId].projectVerified = true;
        emit ProjectVerified(contractId, msg.sender);
    }

    function transferFund(uint256 contractId) external payable  onlyClient(contractId) {
        require(contracts[contractId].projectVerified, "Project must be verified by client first");
        require(contracts[contractId].totalBudget == msg.value, "Project budget is not equal to the amount provided");

        // Check if the contract is not already funded
        require(!contracts[contractId].fundTransferred, "Funds already transferred");

        // Ensure that client have enough funds
        require(address(this).balance >= contracts[contractId].totalBudget, "Insufficient funds in client wallet");

        // Transfer funds to freelancer
        payable(contracts[contractId].freelancer).transfer(msg.value);
    
        // payable(contracts[contractId].freelancer).transfer(contracts[contractId].totalBudget);
        
        contracts[contractId].fundTransferred = true;
        emit FundTransferred(contractId, contracts[contractId].client, contracts[contractId].freelancer, msg.value);

        // Refund security deposit to freelancer
        refundSecurityDeposit(contractId, contracts[contractId].freelancer);

        // Refund security deposit to client
        refundSecurityDeposit(contractId, contracts[contractId].client);
    }

    function refundSecurityDeposit(uint256 contractId, address payee) private {
        require(contracts[contractId].projectVerified && contracts[contractId].fundTransferred, "Project is not verified by both parties");

        if (payee == contracts[contractId].freelancer) {
            require(payable(payee).send(contracts[contractId].freelancerSecurityDeposit), "Freelancer refund failed");

            // payable(payee).transfer(contracts[contractId].freelancerSecurityDeposit);
            
            emit SecurityDepositRefunded(contractId, payee, contracts[contractId].freelancerSecurityDeposit);
            contracts[contractId].freelancerSecurityDeposit = 0;
        } else if (payee == contracts[contractId].client) {
            require(payable(payee).send(contracts[contractId].clientSecurityDeposit), "Client refund failed");

            // payable(payee).transfer(contracts[contractId].clientSecurityDeposit);
            
            emit SecurityDepositRefunded(contractId, payee, contracts[contractId].clientSecurityDeposit);
            contracts[contractId].clientSecurityDeposit = 0;
        }

        contracts[contractId].securityDepositAmount = 0;
        contracts[contractId].state = ProjectState.Closed;

        
    }
}