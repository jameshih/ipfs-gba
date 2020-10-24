require('dotenv').config();
require('chai/register-should');
const {GSNDevProvider} = require('@openzeppelin/gsn-provider');
const solcStable = {
  version: '0.6.2',
};

const solcNightly = {
  version: 'nightly',
  docker: true,
};

const useSolcNightly = process.env.SOLC_NIGHTLY === 'true';
const mnemonic = process.env.MNEMONIC;
const HDWalletProvider = require('@truffle/hdwallet-provider');
// Create your own key for Production environments (https://infura.io/)
const INFURA_ID = process.env.INFURA_ID || 'd6760e62b67f4937ba1ea2691046f06d';

const configNetwork = (
  network,
  network_id,
  path = 'm/44\'/60\'/0\'/0/',
  gas = 4465030,
  gasPrice = 1e10
) => ({
  provider: () =>
    new HDWalletProvider(
      mnemonic,
      `https://${network}.infura.io/v3/${INFURA_ID}`,
      0,
      1,
      true,
      path
    ),
  network_id,
  gas,
  gasPrice,
});

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      provider: new GSNDevProvider('http://localhost:8545', {
        txfee: 70,
        useGSN: false,
        // The last two accounts defined in test.sh
        ownerAddress: '0x26be9c03ca7f61ad3d716253ee1edcae22734698',
        relayerAddress: '0xdc5fd04802ea70f6e27aec12d56716624c98e749',
      }),
      network_id: '*', // eslint-disable-line camelcase
    },
    ropsten: configNetwork('ropsten', 3),
    kovan: configNetwork('kovan', 42),
    rinkeby: configNetwork('rinkeby', 4),
    main: configNetwork('mainnet', 1),
  },
  compilers: {
    solc: useSolcNightly ? solcNightly : solcStable,
  },
};
