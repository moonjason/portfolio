import styled from 'styled-components'

export const Container = styled.div`
    background-color: antiquewhite;
    margin: 4% 16%;
    padding: 3%;
    @media (max-width: 850px) {
        margin: 4% 8%;
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    @media (max-width: 850px) {
        flex-direction: column;
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    @media (max-width: 850px) {
        align-items: center;
    }
`

export const Column2 = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: .5;
    text-align: right;
    @media (max-width: 850px) {
        align-items: center;
        padding-top: 6%;
    }
`

export const Contact = styled.ul`
    list-style: none;
`

const Icon = {}

Icon.In = styled.i`
    color: #0077B5;
    filter: brightness(100%);
    &:hover {
        filter: brightness(160%);
    }
`

Icon.Ghub = styled.i`
    color: #24292e;
    filter: brightness(100%);
    &:hover {
        filter: brightness(200%);
    }
`

Icon.Mail = styled.i`
    color: #FF3434;
    filter: brightness(100%);
    &:hover {
        filter: brightness(150%);
    }
`


export default Icon;