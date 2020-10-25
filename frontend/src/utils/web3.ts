import Web3 from 'web3';

const INFURA_KEY = process.env.REACT_APP_INFURA_KEY;
const ierc721metaABI = require('../constant/abi/IERC721Metadata.json');

const web3 = new Web3(`https://rinkeby.infura.io/v3/${INFURA_KEY}`);

export const balanceOf = async (tokenAddress: string, owner: string | null, callback: Function) => {
    const ierc721meta = new web3.eth.Contract(ierc721metaABI.abi, tokenAddress);

    const res = await ierc721meta.methods.balanceOf(owner).call();
    callback(res);
};

export const getDetail = async (tokenAddress: string, callback: Function) => {
    const ierc721meta = new web3.eth.Contract(ierc721metaABI.abi, tokenAddress);

    const name = await ierc721meta.methods.name().call();
    const symbol = await ierc721meta.methods.symbol().call();
    callback(name, symbol);
};

export const getTokenURI = async (tokenAddress: string, tokenID: number, callback: Function) => {
    const ierc721meta = new web3.eth.Contract(ierc721metaABI.abi, tokenAddress);

    const res = await ierc721meta.methods.tokenURI(tokenID).call();
    callback(res);
};
