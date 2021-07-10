# IPFS-GBA

<p align="center">
<iframe src="https://www.youtube.com/embed/jdD_Mvz4hjM
" width="640" height="480" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</p>
<p align="center">
play gba games from ipfs
</p>

## Instructions

```bash
$ yarn install
$ cd frontend && yarn start
```

## Todo

- [ ] integrate gba emulator to frontend (ERROR: Invalid hook call. Hooks can only be called inside of the body of a function component.)
- [ ] workflow for pushing rom to ipfs
- [x] token factory
- [x] save ipfs hash to erc721
- [x] fetch ipfs hash from erc721
- [x] fetch rom from ipfs hash

## Rinkeby contracs

Ipfs_hash store in token = QmPJD8k2Lawf6hEo79AjUGFU8xoZ6bNMjC12GM9AAPrA7v

| Contract     | Address                                                                                                                     |
| ------------ | --------------------------------------------------------------------------------------------------------------------------- |
| Factory      | [0x1d966259c2592a6E2A8b4C753d6d30159F17bdC1](https://rinkeby.etherscan.io/token/0xeE912C945CcF937438F974429292c0533801cEea) |
| Pokemon Fire | [0xeE912C945CcF937438F974429292c0533801cEea](https://rinkeby.etherscan.io/token/0xeE912C945CcF937438F974429292c0533801cEea) |
