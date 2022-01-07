## React Truffle unbox

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

- Add compiler section to truffle-config.js
```
  truffle com
```

### With Ganache
```
 truffle migrate
``` 
- Start ganache
- Add account & network in metamask
- cd client && npm run start


## On Quorum 7nodes
```
    quorum_vm: {
      host: "35.233.157.163",
      port: 22000, // was 8545
      network_id: "*", // Match any network id
      gasPrice: 0,
      type: "quorum",
      gas: 4500000
    }
```
#### Run below cmd to migrate onto quorum
```
truffle migrate --network quorum_vm  
#or
truffle migrate --network quorum_vm --reset
```

#### above command may sometime result in error: Could not connect to your Ethereum client with the following parameters
#### Keep try
#### Once truflle migration completed, On Qurorum use below cmd to check migrated transaction
- docker exec -it quorum-examples_node1_1 geth attach /qdata/dd/geth.ipc
- > eth.getTransaction('0x4d50a518ccbae601ac78c637c2672cbc856bb1978bcb657a20f8ea2f2507583f')
eth.getTransaction('0xbe71d39921ef78d8b45b7504a4393564b78116fc0f4479c52546f87e96f1e325')

### Adding Quorum network to Metamask
New RPC URL: http://35.233.157.163:22000/
Chain ID: 10

#### Setup Metamask account with Qurorum
#### get key1->ciphertext from qurorum**/7nodes/keys, and do account import in metamask
- "ciphertext":"4e77046ba3f699e744acb4a89c36a3ea1158a1bd90a076d36675f4c883864377"
#### In browser, localhost:3000/, metamask asks for confirmation. do confirm. Copy Transid from metamask and execute below cmd in quorum node
- eth.getTransaction('0xa192d724490758b94fd5d8d2dad35a3d3d3b53178f34a98da7ea61138d89704b')
<<<<<<< HEAD
=======




### Quorum account keys from /key for adding to Metamask
-4e77046ba3f699e744acb4a89c36a3ea1158a1bd90a076d36675f4c883864377
-01d409941ce57b83a18597058033657182ffb10ae15d7d0906b8a8c04c8d1e3a
-6b2c72c6793f3da8185e36536e02f574805e41c18f551f24b58346ef4ecf3640
-d160a630a39be3ff35556055406d8ff2a635f0535fe298d62ccc812d8f7b3bd5

-7
a522d53d5a86405435f6288d4e34b0c038de25f46fa935b0be78fd24d4aa65da
>>>>>>> aa430d0 (Image upload to IPFS and store hash in sc quorum)
