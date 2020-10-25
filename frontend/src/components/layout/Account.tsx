import React, { useEffect, useState } from 'react';
import { useWallet } from 'use-wallet';
import styled from 'styled-components';
import { Blockie, MetaMaskButton } from 'rimble-ui';
import { BigNumber } from 'bignumber.js';
import { balanceOf, getDetail } from '../../utils/web3';

const Connect = styled.button.attrs({
    className: 'mt-4 border rounded-md  text-base py-2 px-8 bg-gray-800 text-white',
})``;

export default function Account() {
    const wallet = useWallet();
    const [ui, setUI] = useState(false);
    const [roms, setRoms] = useState<any>([]);

    function updateUI() {
        setUI(ui ? false : true);
    }

    function connectWallet() {
        wallet.connect('injected');
    }

    function disconnectWallet() {
        wallet.reset();
    }

    useEffect(() => {
        setRoms([]);
        if (wallet.account) {
            getDetail(
                '0xeE912C945CcF937438F974429292c0533801cEea',
                (name: string, symbol: string) => {
                    balanceOf(
                        '0xeE912C945CcF937438F974429292c0533801cEea',
                        wallet.account,
                        (count: number) => {
                            setRoms([...roms, { name, symbol, count }]);
                        }
                    );
                }
            );
        }
    }, [wallet]);

    return (
        <>
            <span>
                {wallet && wallet.status === 'connected' && wallet.account ? (
                    <div className='relative'>
                        <div
                            className='flex items-center justify-center w-12 h-12 border rounded cursor-pointer focus:opacity-50'
                            onClick={updateUI}
                        >
                            <Blockie
                                opts={{
                                    seed: wallet.account,
                                    bgcolor: `#${wallet.account.slice(3, 9)}`,
                                    color: '#fff',
                                    size: 12,
                                    scale: 3,
                                }}
                            />
                        </div>

                        {ui && (
                            <div className='absolute right-0 flex flex-col justify-between p-4 mt-2 text-left bg-white border rounded'>
                                <span>
                                    Balance:{' '}
                                    {`${new BigNumber(wallet.balance)
                                        .shiftedBy(-18)
                                        .toFixed(2)} ETH`}
                                </span>
                                {roms.map((elm: any, index: number) => (
                                    <span className='mt-2' key={index}>
                                        {elm.symbol}: {elm.count}{' '}
                                    </span>
                                ))}

                                <Connect onClick={disconnectWallet}>Disconnect</Connect>
                            </div>
                        )}
                    </div>
                ) : (
                    <MetaMaskButton size='medium' onClick={connectWallet}>
                        Connect
                    </MetaMaskButton>
                )}
            </span>
        </>
    );
}
