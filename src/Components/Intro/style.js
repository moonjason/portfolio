import styled from 'styled-components'

export const Container = styled.div`
    background-color: antiquewhite;
    margin: 4% 16%;
    padding: 3%;
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