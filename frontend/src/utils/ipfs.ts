import IPFS from 'ipfs-http-client';
export const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

export async function loadRomFromIPFS(hash: string, callback: Function) {
    const ipfs_data = [];
    for await (const data_slice of ipfs.cat(hash)) {
        for (const elm of data_slice) {
            ipfs_data.push(elm);
        }
    }
    callback(new Blob([new Uint8Array(ipfs_data).buffer]));
}
