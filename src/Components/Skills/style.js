import styled from 'styled-components'

export const Title = styled.h1`
    text-align: center;
    padding-bottom: 1.5rem;
`
export const Icon = styled.img`
    height: 7rem;
    padding: 1% 2%;
`
export const IconText = styled.p`

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
        padding: 0
    }
`

export const SkillsCol = styled.div`
    margin: .2rem;
    padding: 10px 30px;
    display: flex;
    flex-direction: column;
`
