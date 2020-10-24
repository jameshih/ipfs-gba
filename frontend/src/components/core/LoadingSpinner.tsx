import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const Overlay = styled.div.attrs({
    className:
        'fixed top-0 left-0 z-50 flex items-center justify-center block w-full h-full bg-white opacity-75',
})`
    & {
        span {
            ${tw`block w-0 h-0 -mt-12 text-gray-600 opacity-75 `}
        }
    }
`;

export default function LoadingSpinner() {
    return (
        <Overlay>
            <FontAwesomeIcon icon={faCircleNotch} size='2x' spin />
        </Overlay>
    );
}
