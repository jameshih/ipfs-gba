let Factory = artifacts.require('Factory');

module.exports = function (deployer, network, accounts) {
  if (network === 'rinkeby' || network === 'development') {
    deployer.deploy(Factory, {from: accounts[0]});
  }
};
