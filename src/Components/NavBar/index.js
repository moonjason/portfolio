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
                <BarLink>About / Contact</BarLink>
                <BarLink>Skills</BarLink>
                <BarLink>Projects</BarLink>
            </LinkContainer>
        </Bar>
    )
}

export default NavBar;