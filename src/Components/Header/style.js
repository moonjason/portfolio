import styled, { keyframes } from 'styled-components'

const gradientBG = keyframes`
    0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

export const Beginning = styled.div`
    padding: 3% 0;
    background-color: whitesmoke;
    border-bottom: .3rem solid grey;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-bottom: 6.5rem;
    background: linear-gradient(-45deg, #243665, #77BBD1, #23a6d5, #23d5ab);
    animation: ${gradientBG} 15s ease infinite;
    background-size: 400% 400%;
`
export const Photo = styled.img`
    max-width: 19rem;
    max-height: 19rem;
    border-radius: 4rem;
    margin: 0 auto;
`

export const MeContainer = styled.div`
    margin-top: 4rem;
`

export const Name = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 3.7rem;
    letter-spacing: 1px;
    color: whitesmoke;
    text-shadow: #474747 3px 5px 2px;
`

export const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 2.5rem;
    color: whitesmoke;
    text-shadow: #474747 3px 5px 2px;
`

export const TitleContainer = styled.div`
    display: inline-block;
    display: flex;
    flex-direction: column;
    width: 30rem;
    margin: 2rem auto 0 auto;

`