import React, { useCallback, useEffect, useRef, useState } from 'react';
// import gameboy from 'gameboy';
// import Audiojs from 'audiojs';
// import GameBoyAdvance from 'gbajs';
import { loadRomFromIPFS } from '../../utils/ipfs';
// const bio = require('../../../node_modules/gbajs/resources/bios.bin');

// const buttons = ['right', 'left', 'up', 'down', 'a', 'b', 'select', 'start'];

const useCanvas = (cb: Function) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas: any = canvasRef.current;
        const ctx = canvas.getContext('2d');
        cb([canvas, ctx]);
    }, []);
    return canvasRef;
};

export default function GBA(props: any) {
    // const [gb, setGb] = useState();
    // const [opts] = useState({ ...props.opts, sound: Audiojs, speed: 1, volume: 1, running: false });

    const canvasRef = useCanvas(([canvas, ctx]: any) => {
        // ctx.fillRect(0, 0, canvas.width, canvas.height);
        // const x = canvas.width;
        // const y = canvas.height;
    });
    // const [gba] = useState(new GameBoyAdvance());

    // function gbStart(path: string) {
    //     console.log('downloading from ipfs');
    //     loadRomFromIPFS(path, (data: any) => {
    //         if (!data) return;
    //         console.log(data);

    //         gba.loadRomFromFile(data, function (err: any, result: any) {
    //             if (err) {
    //                 console.error('loadRom failed:', err);
    //                 process.exit(1);
    //             }
    //             gba.loadSavedataFromFile('/path/to/game.sav');
    //             gba.runStable();
    //         });
    //         // setGb(gameboy(canvasRef, data, opts));
    //     });
    // }

    // useEffect(() => {
    //     // gba.setBios(bio);
    //     gba.setCanvasMemory();
    //     gbStart(props.hash);
    //     // gba.setCanvas(canvasRef);
    //     console.log(gba);
    // }, [props.hash]);

    // useEffect(() => {
    // if (gb) {
    // gb.initMemory();
    // gb.ROMLoad();
    // gb.initLCD();
    // gb.initSound();
    // gb.run();
    // gb.start();
    // }
    // }, [gb]);

    return (
        <>
            <canvas className='gameboy' ref={canvasRef}></canvas>
        </>
    );
}
