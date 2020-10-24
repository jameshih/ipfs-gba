import React, { useEffect, useState } from 'react';
import { Container } from '../../core';
// import '../../../utils/gba/util';
// import '../../../utils/gba/core';
// import '../../../utils/gba/arm';
// import '../../../utils/gba/thumb';
// import '../../../utils/gba/mmu';
// import '../../../utils/gba/io';
// import '../../../utils/gba/audio';
// import '../../../utils/gba/video';
// import '../../../utils/gba/video/proxy';
// import '../../../utils/gba/video/software';
// import '../../../utils/gba/irq';
// import '../../../utils/gba/keypad';
// import '../../../utils/gba/sio';
// import '../../../utils/gba/savedata';
// import '../../../utils/gba/gpio';
// import '../../../utils/gba/gba';
// import '../../../utils/gba/xhr';

export default function Home() {
    const [gba, setGBA] = useState<any>();

    function setup() {
        setGBA(new GameBoyAdvance());
        console.log(gba);
    }

    useEffect(() => {
        const script1 = document.createElement('script');
        const script2 = document.createElement('script');
        const script3 = document.createElement('script');
        const script4 = document.createElement('script');

        script1.src = '../../../utils/gba/util.js';
        script1.async = true;
        document.body.appendChild(script1);

        script2.src = '../../../utils/gba/core.js';
        script2.async = true;
        document.body.appendChild(script2);

        script3.src = '../../../utils/gba/arm.js';
        script3.async = true;
        document.body.appendChild(script3);

        script4.src = '../../../utils/gba/thumb.js';
        script4.async = true;
        document.body.appendChild(script4);
    }, []);
    return (
        <Container className='justify-center'>
            <button onClick={setup}>click</button>
            <script src='../../../utils/gba/mmu.js'></script>
            <script src='../../../utils/gba/io.js'></script>
            <script src='../../../utils/gba/audio.js'></script>
            <script src='../../../utils/gba/video.js'></script>
            <script src='../../../utils/gba/video/proxy.js'></script>
            <script src='../../../utils/gba/video/software.js'></script>
            <script src='../../../utils/gba/irq.js'></script>
            <script src='../../../utils/gba/keypad.js'></script>
            <script src='../../../utils/gba/sio.js'></script>
            <script src='../../../utils/gba/savedata.js'></script>
            <script src='../../../utils/gba/gpio.js'></script>
            <script src='../../../utils/gba/gba.js'></script>
            <script src='../../../utils/gba/xhr.js'></script>
            <div>GBA goes here</div>
        </Container>
    );
}
