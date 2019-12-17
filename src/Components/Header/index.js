import React from 'react';
import {
     Beginning,
     Photo,
     MeContainer,
     Name,
     Title,
     TitleContainer,
 } from './style'

const Header = () => {
    return (
        <Beginning>
            <MeContainer id="top">
                <Photo src="./gradpic.png" alt=""/> 
                <TitleContainer>
                    <Name>Jason Moon</Name>
                    <Title>Full-Stack Developer</Title>
                </TitleContainer>
            </MeContainer>
        </Beginning>
    )
}

export default Header;