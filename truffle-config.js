const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    quorum_7_1: {
      host: "35.230.64.204",
      port: 22000, // was 8545
      network_id: "*", // Match any network id
      gasPrice: 0,
      type: "quorum",
      gas: 4500000,
    },
    quorum_7_3: {
      host: "34.83.116.205",
      port: 22002, // was 8545
      network_id: "*", // Match any network id
      gasPrice: 0,
      type: "quorum",
      gas: 4500000,
    },
    quorum_7_4: {
      host: "34.83.116.205",
      port: 22003, // was 8545
      network_id: "*", // Match any network id
      gasPrice: 0,
      type: "quorum",
      gas: 4500000,
    },
    quorum_7_7: {
      host: "34.83.116.205",
      port: 22006, // was 8545
      network_id: "*", // Match any network id
      gasPrice: 0,
      type: "quorum",
      gas: 4500000,
    },
    local: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000,
    },
  },

  compilers: {
    solc: {
      version: "^0.8.0",
      parser: "solcjs",
    },
  },
};
