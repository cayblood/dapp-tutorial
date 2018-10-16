const HDWalletProvider = require("truffle-hdwallet-provider");

const INFURA_KEY = "TODO_SET_KEY";
const MNEMONIC = "set your twelve word mnemonic passphrase...";

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
