import React from 'react'
import Icon, { Container, Row, Column, Column2, Title, AboutMeBody, IntroBg, LinkA, Resume} from './style'

const Intro = () => {
    return (
        <IntroBg id="intro">
            <Container>
                <Row>
                    <Column>
                        <Title>About Me</Title>
                        <br/>
                        <AboutMeBody>I am a full stack software engineer who specializes in the MERN stack. My passion for coding started in the summer of 2018 and has lead me to become a student for life. Therefore, I am constantly looking for ways to improve how I think/code while learning new technologies. <br/> On my free time, I love exercising, playing video games, and cheering on my favorite teams and athletes of professional sports leagues such as the NBA, FIFA, and the UFC.</AboutMeBody>
                    </Column>
                    <Column2>
                        <Title>Contact Me</Title>
                        <br/>
                            <a href="https://linkedin.com/in/jasonmoon96" target="_blank" rel="noopener noreferrer">
                                <Icon.In className="fab fa-linkedin" style={{"fontSize": "3rem"}} alt="LinkedIn:"></Icon.In>
                            </a>
                            <LinkA href="https://linkedin.com/in/jasonmoon96" target="_blank" rel="noopener noreferrer">jasonmoon96</LinkA>
                            <a href="https://github.com/moonjason" target="_blank" rel="noopener noreferrer">
                                <Icon.Ghub className="fab fa-github-square" style={{"fontSize": "3rem"}} alt="GitHub:"></Icon.Ghub>
                            </a>
                            <LinkA href="https://github.com/moonjason" target="_blank" rel="noopener noreferrer">moonjason</LinkA>
                            <a href="mailto: jasonmoonjm@gmail.com">
                                <Icon.Mail className="fas fa-envelope-square" style={{"fontSize": "3rem"}} alt="Email:"></Icon.Mail>
                            </a> 
                            <LinkA href="mailto: jasonmoonjm@gmail.com">jasonmoonjm@gmail.com</LinkA>
                            <a href="tel:1-408-334-4094">
                                <Icon.Phone className="fas fa-phone-square" style={{"fontSize": "3rem"}} alt="Phone:"></Icon.Phone>
                            </a> 
                            <LinkA href="tel:1-408-334-4094">+1 (408) 334-4094</LinkA>
                    </Column2>
                </Row>
                <Resume href="https://docs.google.com/document/d/1JUKV8INNshnN7zcbX3-JNoPpL8UUpIV8OXVA-xIU29A/edit?usp=sharing" target="_blank">Resume</Resume>
            </Container>
        </IntroBg>
    )
}

export default Intro;