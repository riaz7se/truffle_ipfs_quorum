import Web3 from "web3";
// import { URL, URLSearchParams } from "url";

const Web3Quorum = require("web3js-quorum");
const { enclave, network } = require("./keys");

const getWeb3 = async () =>
  new Promise((resolve, reject) => {
    if (window.ethereum) {
      //const web3 = new Web3(window.ethereum);
      const web3 = new Web3Quorum(
        new Web3("http://localhost:22000"),
        {
          privateUrl: "http://localhost:9081",
          // ipcPath: "/root/quorum-examples/examples/7nodes/qdata/c1/tm.ipc",
        },
        true
      );
      console.log("web3:", web3);
      try {
        const ethEnable = async () => {
          await window.ethereum.enable();
        };
        ethEnable();
        resolve(web3);
      } catch (error) {
        reject(error);
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      // Use Mist/MetaMask's provider.
      const web3 = window.web3;
      console.log("Injected web3 detected.");
      resolve(web3);
    }
    // Fallback to localhost; use dev console port by default...
    else {
      const provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545");
      const web3 = new Web3(provider);
      console.log("Http ." + web3);
      console.log("No web3 instance injected, using Local web3.");
      resolve(web3);
    }
    // });
  });

export default getWeb3;
