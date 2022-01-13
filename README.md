# DApp with file upload on IPFS and Smart Contract on Quorum Blockchain

- Reactjs front end app connects to Blockchain and the image is uploaded to ipfs. The hash of image
- returned from ipfs will be stored in smart contract with private transaction setting privateFor,
- so that only specific node has access to image and can view on browser

## React Truffle unbox

- Front app created with truffle unbox

```
mkdir truffle_react_ipfs
cd truffle_react_ipfs
npx truffle unbox react
```

### Unbox successful, sweet!

```
#Commands:
  Compile:              truffle compile
  Migrate:              truffle migrate
  Test contracts:       truffle test
  Test dapp:            cd client && npm test
  Run dev server:       cd client && npm run start
  Build for production: cd client && npm run build
```

### Complie contracts

- Added compiler section to truffle-config.js

```
  truffle compile
```

## On Quorum 7nodes

```
    quorum_vm: {
      host: "remote-ip",
      port: 22000,
      network_id: "*",
      gasPrice: 0,
      type: "quorum",
      gas: 4500000
    }
```

#### Run below cmd to migrate onto quorum nodes

```
truffle migrate --network quorum_7_1 --reset
```

### Start React app

- npm run start

### Issue faced after adding web3js-quorum:

- URL is not constructor
- resolved by commenting const { URL } = require("url"); in node-modules/web3js-quorum/ptm.js
- Will investigate on this later

### Adding Quorum network to Metamask

New RPC URL: http://35.233.157.163:22000/
Chain ID: 10

#### Setup Metamask account with Qurorum

#### get key1->ciphertext from qurorum\*\*/7nodes/keys, and do account import in metamask

- "ciphertext":"4e77046ba3f699e744acb4a89c36a3ea1158a1bd90a076d36675f4c883864377"

#### In browser, localhost:3000/, metamask asks for confirmation. do confirm. Copy Transid from metamask and execute below cmd in quorum node

- eth.getTransaction('0xa192d724490758b94fd5d8d2dad35a3d3d3b53178f34a98da7ea61138d89704b')

#### Checkings

#### Once truflle migration completed, On Qurorum use below cmd to check migrated transaction

- docker exec -it quorum-examples_node1_1 geth attach /qdata/dd/geth.ipc
- > eth.getTransaction('<tx>')

### Quorum account keys from /key for adding to Metamask

Node1 Acc:-4e77046ba3f699e744acb4a89c36a3ea1158a1bd90a076d36675f4c883864377
Node2 Acc:-01d409941ce57b83a18597058033657182ffb10ae15d7d0906b8a8c04c8d1e3a
Node3 Acc:6b2c72c6793f3da8185e36536e02f574805e41c18f551f24b58346ef4ecf3640
Node4 Acc:-d160a630a39be3ff35556055406d8ff2a635f0535fe298d62ccc812d8f7b3bd5

Node7 Acc:-a522d53d5a86405435f6288d4e34b0c038de25f46fa935b0be78fd24d4aa65da

--Transid:
0xdecfc53bdeb1cf1076ae666eed9993400109a2f4d207f7e8916e054b096bf2b4
