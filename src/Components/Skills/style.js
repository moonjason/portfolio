import styled from 'styled-components'

export const Title = styled.h1`
    text-align: center;
    padding-bottom: 1.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 3.5rem;
    color: #243665;
    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);
`
export const Icon = styled.img`
    height: 7rem;
    padding: 1% 2%;
    @media (max-width: 850px){
        height: 3rem;
        width: 3rem;
    }
`
export const IconText = styled.p`
    padding-top: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
`

export const List = styled.div`
`

export const SkillsRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 10rem;
    text-align: center;
    justify-content: center;
    @media (max-width: 850px){
        padding: 0;
    }
`

export const SkillsCol = styled.div`
    margin: .2rem;
    padding: 10px 30px;
    display: flex;
    flex-direction: column;
`

export const SkillsContainer = styled.div`
    padding-top: 100px;
`

export const OtherIcon = styled.i`
    @media (max-width: 850px){
        font-size: 3rem !important;
        margin-top: .5rem;
    }
`