import React from 'react'
import Icon, { Container, Row, Column, Column2, Title, AboutMeBody, IntroBg} from './style'

const Intro = () => {
    return (
        <IntroBg>
            <Container id="intro">
                <Row>
                    <Column>
                        <Title>About Me</Title>
                        <br/>
                        <AboutMeBody>I am a full stack software engineer who specializes in the MERN stack. My passion for coding started in the summer of 2018 and has lead me to become a student for life. Therefore, I am constantly looking for ways to improve how I think/code while learning new technologies. <br/> On my free time, I love exercising, playing video games, and cheering on my favorite teams and athletes of professional sports leagues such as the NBA, FIFA, and the UFC.</AboutMeBody>
                    </Column>
                    <Column2>
                        <Title>Contact Me</Title>
                        <br/>
                            <a href="https://linkedin.com/in/jasonmoon96" target="_blank" rel="noopener noreferrer"><Icon.In className="fab fa-linkedin" style={{"fontSize": "2.5rem"}}></Icon.In></a>jasonmoon96
                            <a href="https://github.com/moonjason" target="_blank" rel="noopener noreferrer"><Icon.Ghub className="fab fa-github-square" style={{"fontSize": "2.5rem"}}></Icon.Ghub></a>moonjason
                            <a href="mailto: jasonmoonjm@gmail.com"><Icon.Mail className="fas fa-envelope-square" style={{"fontSize": "2.5rem"}}></Icon.Mail></a> jasonmoonjm@gmail.com
                    </Column2>
                </Row>
            </Container>
        </IntroBg>
    )
}

export default Intro;