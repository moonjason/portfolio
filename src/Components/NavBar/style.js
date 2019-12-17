import styled from 'styled-components';

export const Bar = styled.div`
    /* box-shadow: 0px -3.5px 20px 0px #000000; */
    width: 100%;
    height: 3.5rem;
    background-color: #243665;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    position: ${props => props.scrollPos ? 'fixed' : ''};
    top: ${props => props.scrollPos ? 0 : ''};
`

export const BarLink = styled.a`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: white; 
    font-size: 1.4rem;
    margin: 0 1.5rem;
    &:hover {
        color: #8BD8BD;
        text-shadow: 0 0 8px #546693;
    }
`

export const LinkContainer = styled.div`
    /* margin-right: 7rem; */
`