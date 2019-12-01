import React from 'react'
import { Container, Row, Column, Column2 } from './style'

const Intro = () => {
    return (
        <Container>
            <Row>
                <Column>
                    <h2>About Me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl pretium fusce id velit ut tortor. Quam id leo in vitae turpis massa sed elementum. Consequat ac felis donec et odio pellentesque diam volutpat. Consectetur adipiscing elit ut aliquam purus sit. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Eget duis at tellus at. Faucibus purus in massa tempor nec feugiat. Purus in massa tempor nec feugiat nisl pretium. Commodo quis imperdiet massa tincidunt. Scelerisque in dictum non consectetur a erat nam at. Iaculis at erat pellentesque adipiscing commodo elit at.</p>
                </Column>
                <Column2>
                    <h2>Contact Me</h2>
                    <p>linkedin.com/in/moonjason96</p>
                </Column2>
            </Row>
        </Container>
    )
}

export default Intro;