import React from 'react'
import { 
    Bar,
    BarLink,
    LinkContainer
} from './style';

const NavBar = () => {
    return(
        <Bar>
            <LinkContainer>
                <BarLink href="#intro">About/Contact</BarLink>
                <BarLink href="#skills">Skills</BarLink>
                <BarLink href="#projects">Projects</BarLink>
            </LinkContainer>
        </Bar>
    )
}

export default NavBar;