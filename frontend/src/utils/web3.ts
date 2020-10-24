import Web3 from 'web3';

const INFURA_KEY = process.env.REACT_APP_INFURA_KEY;
const ierc721metaABI = require('../constant/abi/IERC721Metadata.json');

const web3 = new Web3(`https://rinkeby.infura.io/v3/${INFURA_KEY}`);

export const balanceOf = async (tokenAddress: string, owner: string | null, cb: Function) => {
    const ierc721meta = new web3.eth.Contract(ierc721metaABI.abi, tokenAddress);

    const res = await ierc721meta.methods.balanceOf(owner).call();
    return cb(res);
};

export const getDetail = async (tokenAddress: string, cb: Function) => {
    const ierc721meta = new web3.eth.Contract(ierc721metaABI.abi, tokenAddress);

    const name = await ierc721meta.methods.name().call();
    const symbol = await ierc721meta.methods.symbol().call();
    return cb(name, symbol);
};

export const getTokenURI = async (tokenAddress: string, tokenID: number, cb: Function) => {
    const ierc721meta = new web3.eth.Contract(ierc721metaABI.abi, tokenAddress);

    const res = await ierc721meta.methods.tokenURI(tokenID).call();
    return cb(res);
};
