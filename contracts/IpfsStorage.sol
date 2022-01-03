// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IpfsStorage {
    string ipfsHash;

    function set(string memory x) public {
        ipfsHash = x;
    }

    function get() public view returns (string memory) {
        return ipfsHash;
    }
}
