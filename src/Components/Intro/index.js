import React from 'react'
import { Container, Row, Column, Column2} from './style'

const Intro = () => {
    return (
        <Container>
            <Row>
                <Column>
                    <h2>About Me</h2>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl pretium fusce id velit ut tortor. Quam id leo in vitae turpis massa sed elementum. Consequat ac felis donec et odio pellentesque diam volutpat. Consectetur adipiscing elit ut aliquam purus sit. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Eget duis at tellus at. Faucibus purus in massa tempor nec feugiat. Purus in massa tempor nec feugiat nisl pretium. Commodo quis imperdiet massa tincidunt. Scelerisque in dictum non consectetur a erat nam at. Iaculis at erat pellentesque adipiscing commodo elit at.</p>
                </Column>
                <Column2>
                    <h2>Contact Me</h2>
                    <br/>
                        <a href="https://linkedin.com/in/jasonmoon96" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" style={{"fontSize": "2.5rem"}}></i></a>in/jasonmoon96
                        <a href="https://github.com/moonjason" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square" style={{"fontSize": "2.5rem"}}></i></a>moonjason
                        <a href="mailto: jasonmoonjm@gmail.com"><i className="fas fa-envelope-square" style={{"fontSize": "2.5rem"}}></i></a> jasonmoonjm@gmail.com
                </Column2>
            </Row>
        </Container>
    )
}

export default Intro;