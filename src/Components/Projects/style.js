import styled from 'styled-components';

export const ProjectItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8.5rem;
    @media (max-width: 850px) {
        flex-direction: column;
        margin-bottom: 2.5rem;
    }
`

export const ProjectName = styled.h1`
    font-size: 2.5rem;
    padding-bottom: 1rem;
    border-bottom: .2rem solid black;
`

export const ProjectsHeader = styled.h1`
    margin-top: 5rem;
    text-align: center;
    margin-bottom: 3.25rem;
`

export const ProjectImg = styled.div`
    max-width: 50rem;
    flex: 1;
    /* border: 1px solid black; */
    @media (max-width: 850px){
        width: 25rem;
        margin: 0 0 1.75rem 0 !important;
        order: 1;
    }
`

export const ProjectDesc = styled.div`
    margin-top: -3.75rem;  
    flex: 1;
    @media (max-width: 850px) {
        margin: 0 !important;
        order: 2;
    }
`

export const ProjectBody = styled.p`
    font-size: 1rem;
    padding-top: .7rem;
`

export const TechnologiesUsed = styled.p`
    font-size: 1.1rem;
    font-weight: 600; 
    padding-top: 1.5rem;    
`

export const Links = styled.a`
    padding-right: 1.5rem;
`

export const Technologies = styled.p`
    padding-bottom: 2rem;
`