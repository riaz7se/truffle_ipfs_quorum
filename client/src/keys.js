module.exports = {
  enclave: {
    node1: {
      url: "http://35.199.146.253:9081",
      publicKey: "BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=",
      //web3js-quorum/docker/config/tessera/networkFiles/member1/tm.pub
      //quorum-examples/examples/7nodes/keys/tm1.pub
    },
    node2: {
      publicKey: "QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc=",
    },
    node3: {
      publicKey: "1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg=",
    },
    node7: {
      publicKey: "ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc=",
    },
  },
  network: {
    node1: {
      url: "http://35.199.146.253:20000",
      //wsUrl: "ws://localhost:20001",
      privateKey:
        "8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63",
      //web3js-quorum/docker/config/besu/networkFiles/member1/keys/key
    },
    node2: {
      url: "http://localhost:20002",
      wsUrl: "ws://localhost:20003",
      privateKey:
        "c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3",
    },
    node3: {
      url: "http://localhost:20004",
      wsUrl: "ws://localhost:20005",
      privateKey:
        "ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f",
    },
  },
};
