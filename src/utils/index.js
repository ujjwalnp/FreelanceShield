export const calculatePercentage = (balance, target) => {
    const ethBalance = weiToEth(balance);
    const ethTarget = weiToEth(target);
    return Math.round((Number(ethBalance) / Number(ethTarget)) * 100);
};

export const calculateDaysLeft = (endDate) => {
    return Math.ceil((Number(endDate) - new Date().getTime()) / 1000 / 60 / 60 / 24);
};

export const ethToWei = (ethAmount) => {
    try {
      return window.web3.utils.toWei(ethAmount.toString(), 'ether');
    } catch (error) {
      console.error('Error converting ETH to Wei:', error);
      throw error; // Re-throw the error to handle it in the calling code
    }
  };

  export const weiToEth = (weiAmount) => {
    try {
        return window.web3.utils.fromWei(weiAmount.toString(), 'ether');
      } catch (error) {
        console.error('Error converting ETH to Wei:', error);
        throw error; // Re-throw the error to handle it in the calling code
      }
};

