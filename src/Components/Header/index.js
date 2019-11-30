import React from 'react';
import {
     Beginning,
     GradPhoto, 
 } from './style'

const Header = () => {
    return (
        <Beginning>
            <h1>Jason Moon</h1>
            <GradPhoto src="./gradpic.png" alt=""/>
            <p>Welcome Message</p>
            <p>Links</p>
        </Beginning>
    )
}

export default Header;