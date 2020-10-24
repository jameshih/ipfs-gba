import React, { useState, useEffect } from 'react';
import { Container } from '../../core';
import GBAEmulator from 'react-gbajs';
import { loadRomFromIPFS } from '../../../utils/ipfs';

export default function Home() {
    const [hash] = useState('QmPJD8k2Lawf6hEo79AjUGFU8xoZ6bNMjC12GM9AAPrA7v');

    const [rom, setRom] = useState();

    function setup(path: string) {
        loadRomFromIPFS(path, (data: any) => {
            if (!data) return;
            setRom(data);
        });
    }

    useEffect(() => {
        if (!rom) {
            setup(hash);
        }
        console.log('downloaded', rom);
    }, [rom]);

    return (
        <Container className='justify-center'>
            <canvas id='screen' width='480' height='320' />
            <button onClick={() => GBAEmulator(rom)}>Start emulator</button>
        </Container>
    );
}
