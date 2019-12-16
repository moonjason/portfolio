import React from 'react';
import {
     Beginning,
     Photo,
 } from './style'

const Header = () => {
    return (
        <Beginning>
            <Photo src="./gradpic.png" alt=""/> 
            <h1>Jason Moon</h1>
            <h1>Full-Stack Developer</h1>
        </Beginning>
    )
}

export default Header;