import styled from 'styled-components';

const Container = styled.div.attrs((props) => ({
    className: `w-full flex items-center p-4 lg:px-0 lg:mx-auto lg:w-1/2 ${props.children}`,
}))``;

export default Container;
