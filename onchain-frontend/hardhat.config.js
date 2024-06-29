require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    localhost: {
      chainId: 31337,
      name: 'Localhost',
      currency: 'ETH',
      explorerUrl: 'https://etherscan.io',
      rpcUrl: 'http://localhost:8545'
    }
  }

};
