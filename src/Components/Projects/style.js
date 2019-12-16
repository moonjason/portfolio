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
    border-bottom: .2rem solid #243665;
    color: #243665;
    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);
`

export const ProjectsHeader = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 3.5rem;
    margin-top: 5rem;
    text-align: center;
    margin-bottom: 5rem;
    color: #243665;
    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);
`

export const ProjectImg = styled.div`
    max-width: 50rem;
    flex: 1;
    padding: 2.2rem;
    border: 1.5px solid black;
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, .4);
    @media (max-width: 850px){
        width: 25rem;
        margin: 0 0 1.75rem 0 !important;
        order: 1;
        padding: 0;
        border: none;
        box-shadow: none;
    }
`

export const ProjectDesc = styled.div`
    margin-top: -3.75rem;  
    flex: 1;
    background-color: #8BD8BD;
    padding: 1rem 3rem;
    border-radius: 4rem;
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

export const ProjectsContainer = styled.div`
`