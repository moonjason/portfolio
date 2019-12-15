import styled from 'styled-components';

export const ProjectItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5rem;
    @media (max-width: 850px) {
        flex-direction: column;
    }
`

export const ProjectImg = styled.div`
    max-width: 50rem;
    flex: 1;
    /* border: 1px solid black; */
    @media (max-width: 850px){
        width: 25rem;
        margin: 0 0 0 0 !important;
        order: 1;
    }
`

export const ProjectDesc = styled.div`
    flex: 1;
    @media (max-width: 850px) {
        margin: 0 !important;
        order: 2;
    }
`