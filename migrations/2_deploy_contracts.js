var SimpleStorage = artifacts.require("./SimpleStorage.sol");

module.exports = function (deployer) {
  // deployer.deploy(SimpleStorage);
  deployer.deploy(SimpleStorage, 11, {
    privateFor: ["ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="],
  });
};
