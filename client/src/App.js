import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import IpfsStorageContract from "./contracts/IpfsStorage.json";
//import getWeb3 from "./getWeb3";
import getWeb3 from "./quorumWeb3js";
import "./App.css";
import { create as ipfsHttpClient } from "ipfs-http-client";

const infuraIpfsClient = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

class App extends Component {
  state = {
    storageValue: null,
    web3: null,
    accounts: null,
    contract: null,
    networkId: null,
    fileUrl: null,
    ipfsHash: null,
    ipfsDeployedAddr: null,
  };

  componentDidMount = async () => {};

  uploadFile = async (e) => {
    const file = e.target.files[0];
    const { web3, accounts, networkId, ipfsHash } = this.state;
    try {
      const added = await infuraIpfsClient.add(file);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;

      this.setState(
        {
          fileUrl: url,
          ipfsHash: added.path,
          contract: ipfsContract,
          ipfsDeployedAddr: ipfsDeployedNetwork.address,
        },
        this.runContract
      );
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  };

  runContract = async () => {
    const { web3, accounts, networkId, ipfsHash } = this.state;

    const accAddress = "ed9d02e382b34818e88b88a309c7fe71e65f419d";
    const signAcct = web3.eth.accounts.decrypt(
      {
        address: accAddress,
        crypto: {
          cipher: "aes-128-ctr",
          ciphertext:
            "4e77046ba3f699e744acb4a89c36a3ea1158a1bd90a076d36675f4c883864377",
          cipherparams: { iv: "a8932af2a3c0225ee8e872bc0e462c11" },
          kdf: "scrypt",
          kdfparams: {
            dklen: 32,
            n: 262144,
            p: 1,
            r: 8,
            salt: "8ca49552b3e92f79c51f2cd3d38dfc723412c212e702bd337a3724e8937aff0f",
          },
          mac: "6d1354fef5aa0418389b1a5d1f5ee0050d7273292a1171c51fd02f9ecff55264",
        },
        id: "a65d1ac3-db7e-445d-a1cc-b6c5eeaa05e0",
        version: 3,
      },
      ""
    );

    var bytecode =
      "0x608060405234801561001057600080fd5b506104a8806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80634ed3885e1461003b5780636d4ce63c14610057575b600080fd5b6100556004803603810190610050919061031e565b610075565b005b61005f61008f565b60405161006c91906103ef565b60405180910390f35b806000908051906020019061008b929190610121565b5050565b60606000805461009e90610440565b80601f01602080910402602001604051908101604052809291908181526020018280546100ca90610440565b80156101175780601f106100ec57610100808354040283529160200191610117565b820191906000526020600020905b8154815290600101906020018083116100fa57829003601f168201915b5050505050905090565b82805461012d90610440565b90600052602060002090601f01602090048101928261014f5760008555610196565b82601f1061016857805160ff1916838001178555610196565b82800160010185558215610196579182015b8281111561019557825182559160200191906001019061017a565b5b5090506101a391906101a7565b5090565b5b808211156101c05760008160009055506001016101a8565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61022b826101e2565b810181811067ffffffffffffffff8211171561024a576102496101f3565b5b80604052505050565b600061025d6101c4565b90506102698282610222565b919050565b600067ffffffffffffffff821115610289576102886101f3565b5b610292826101e2565b9050602081019050919050565b82818337600083830152505050565b60006102c16102bc8461026e565b610253565b9050828152602081018484840111156102dd576102dc6101dd565b5b6102e884828561029f565b509392505050565b600082601f830112610305576103046101d8565b5b81356103158482602086016102ae565b91505092915050565b600060208284031215610334576103336101ce565b5b600082013567ffffffffffffffff811115610352576103516101d3565b5b61035e848285016102f0565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156103a1578082015181840152602081019050610386565b838111156103b0576000848401525b50505050565b60006103c182610367565b6103cb8185610372565b93506103db818560208601610383565b6103e4816101e2565b840191505092915050565b6000602082019050818103600083015261040981846103b6565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061045857607f821691505b6020821081141561046c5761046b610411565b5b5091905056fea26469706673582212200f142a0e63b4f4230d28789d38102817913394a61ac375dae3b02f9727c1bde864736f6c634300080b0033";

    const ipfsDeployedNetwork = IpfsStorageContract.networks[networkId];
    const ipfsContract = new web3.eth.Contract(
      IpfsStorageContract.abi
      //ipfsDeployedNetwork && ipfsDeployedNetwork.address
    );

    console.log("ipfsHash: " + this.state.ipfsHash);
    if (this.state.ipfsHash) {
    }
    const bytecodeWithInitParam = ipfsContract
      .deploy({ data: bytecode, arguments: [this.state.ipfsHash] })
      .encodeABI();

    (async () => {
      try {
        const txCount = await web3.eth.getTransactionCount(`0x${accAddress}`);
        console.log("txCount: " + txCount);
        const tx = await web3.priv.generateAndSendRawTransaction({
          gasPrice: 0,
          gasLimit: 4300000,
          value: 0,
          data: bytecodeWithInitParam,
          from: signAcct,
          isPrivate: true,
          privateFrom: "BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=",
          privateFor: ["ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="],
          nonce: txCount,
        });

        console.log("Contract address: ", tx.contractAddress);
        const ipfsContract2 = new web3.eth.Contract(
          IpfsStorageContract.abi,
          tx.contractAddress
        );
        const ipfsHashGet = await ipfsContract2.methods.get().call();
        console.log("result :>> ", ipfsHashGet);

        const url = "https://ipfs.infura.io/ipfs/" + ipfsHashGet;
        this.setState({ fileUrl: url });

        return ipfsContract2;
      } catch (error) {
        console.error("error :>> ", error);
        return error;
      }
    })();
  };

  render() {
    const connectBlockchain = async (e) => {
      e.preventDefault();
      try {
        const web3 = await getWeb3();

        const accounts = await web3.eth.getAccounts();
        console.log("eth.acc: ", accounts[0]);

        const networkId = await web3.eth.net.getId();

        const ipfsDeployedNetwork = IpfsStorageContract.networks[networkId];
        this.setState({ ipfsDeployedAddr: ipfsDeployedNetwork.address });
        const ipfsContract = new web3.eth.Contract(
          IpfsStorageContract.abi,
          ipfsDeployedNetwork && ipfsDeployedNetwork.address
        );
        const ipfsH = await ipfsContract.methods.get().call();
        alert("get call: ", ipfsH);
        const url = "https://ipfs.infura.io/ipfs/" + ipfsH;

        this.setState({ fileUrl: url });

        this.setState({ storageValue: accounts[0], web3, accounts, networkId });
      } catch (error) {
        alert("Failed to load web3, accounts, or contract");
        console.error(error);
      }
    };

    return (
      <div className="App">
        <form>
          <div className="form-group row">
            <div className="col-12">
              <button
                type="button"
                onClick={connectBlockchain}
                className={`w-100 btn text-truncate ${
                  this.state.storageValue !== null
                    ? "disabled btn-success"
                    : "btn-danger"
                }`}
              >
                {this.state.storageValue !== null
                  ? "Blockchain Connected"
                  : "Connect Blockchain"}
              </button>
            </div>
          </div>
        </form>
        <div>Metamask Account: {this.state.storageValue}</div>
        <h1>IPFS Example</h1>
        <input type="file" onChange={this.uploadFile} />
        {this.state.fileUrl && (
          <img src={this.state.fileUrl} width="600px" alt="IPFS loaded" />
        )}

        <ul>
          <li>IPFS Hash: {this.state.ipfsHash}</li>
          <li>Depl'd Addr: {this.state.ipfsDeployedAddr}</li>
        </ul>
      </div>
    );
  }
}

export default App;
