const HDWalletProvider = require("truffle-hdwallet-provider");

const INFURA_KEY = "8a882fc993d342df835873366675e6c08a882fc993d342df835873366675e6c0";
const MNEMONIC = "harvest reflect spoon crush field warrior column trial merit fiber pretty aim";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      network_id: 3,
      provider: new HDWalletProvider(
        MNEMONIC,
        "https://ropsten.infura.io/v3/" + INFURA_KEY
      )
    }
  }
};
