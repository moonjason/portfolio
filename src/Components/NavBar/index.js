import React, { useState } from 'react'
import { 
    Bar,
    BarLink,
    LinkContainer
} from './style';

const NavBar = () => {
    const [scrollPos, setScrollPos] = useState(null);

    window.addEventListener('scroll', () => 
    (window.scrollY > 716) 
      ? setScrollPos(true)
      : setScrollPos(null)
    ) 
    return(
        <Bar scrollPos={scrollPos} id="nav">
            <LinkContainer>
                <BarLink href="#intro">About/Contact</BarLink>
                <BarLink href="#skills">Skills</BarLink>
                <BarLink href="#projects">Projects</BarLink>
            </LinkContainer>
        </Bar>
    )
}

export default NavBar;