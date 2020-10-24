import React from 'react';
import { Container } from '../core';
import Account from './Account';

export default function Header() {
    return (
        <Container className={'justify-between'}>
            <div>
                <a className='text-2xl italic font-bold ' href='/'>
                    IPFS-GBA
                </a>
                <span className='ml-2 text-sm italic text-orange-500'>Rinkeby</span>
            </div>
            <Account />
        </Container>
    );
}
