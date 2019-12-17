import React from 'react';
import { 
    ProjectItem,
    ProjectImg,
    ProjectDesc,
    ProjectsHeader,
    ProjectName,
    ProjectBody,
    TechnologiesUsed,
    Links,
    Technologies,
    ProjectsContainer
 } from './style';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const style = {
    "width": "85%",
    'height': '100%',
    "maxWidth": "120rem",
    "margin": "0 auto",
    'position': 'relative',
    'paddingTop': '31px'
}

const hasMarginRight = {'marginRight': '3rem'}

const Projects = () => {
    return (
        <ProjectsContainer>
            <div style={style} id="projects">
                <ProjectsHeader>Projects</ProjectsHeader> 
                <ProjectItem>
                    <ProjectImg style={hasMarginRight} data-aos="fade-right" data-aos-delay="100" data-aos-offset="510">
                        <img style={{'width': '100%', 'imageOrientation': 'from-image'}} src="./images/gotnext-ss.png" alt=""/>
                    </ProjectImg>
                    <ProjectDesc>
                        <ProjectName>GotNext</ProjectName>
                        <ProjectBody>
                            GotNext is an app where basketball players can check if their favorite parks are empty or occupied. This app was inspired by my park-going experience when it's always uncertain to get a full 5 on 5 basketball game going. Users are able to create and view each others' profiles and search for parks based on a user input location. Logged in users are able to check in and out of parks while being able to see a specific park's activity in real-time.
                        </ProjectBody>
                        <TechnologiesUsed>Technologies Used:</TechnologiesUsed>
                        <Technologies>
                            React, Node, Express, Firebase (Auth, Cloud Firestore, Storage), Styled-Components, Yelp API, Mapbox API
                        </Technologies>
                        <Links href="https://github.com/moonjason/GotNext" target="_blank" ghub={true}>Github</Links>
                        <Links href="https://gotnext-app.herokuapp.com" target="_blank">Deployed App</Links>
                    </ProjectDesc>
                </ProjectItem>
                <ProjectItem>
                    <ProjectDesc style={hasMarginRight}>
                        <ProjectName>Legendary Game Reviews</ProjectName>
                        <ProjectBody>
                            Legendary Game Reviews is a video game review site where users can express their opinions on a wide range of titles. With the RAWG API, users are able to find their titles through the search bar or the infinite scroll feature. Each video game card displayed in the main page contains a link to a show page where more information on the game will be displayed along with its user written reviews and an option to write one if logged in.
                        </ProjectBody>
                        <TechnologiesUsed>Technologies Used:</TechnologiesUsed>
                        <Technologies>Python, Flask, React, PostgreSQL, SQLite, Peewee, Styled-Components, RAWG API</Technologies>
                        <Links href="https://github.com/moonjason/legendary-game-reviews-react" target="_blank" ghub={true}>Github</Links>
                        <Links href="https://legendary-game-reviews.herokuapp.com/" target="_blank">Deployed App</Links>
                    </ProjectDesc>
                    <ProjectImg data-aos="fade-left" data-aos-delay="100" data-aos-offset="510">
                        <img style={{'width': '100%', 'imageOrientation': 'from-image'}} src="./images/lgr-ss.png" alt=""/>
                    </ProjectImg>
                </ProjectItem>
                <ProjectItem>
                    <ProjectImg style={hasMarginRight} data-aos="fade-right" data-aos-delay="100" data-aos-offset="520">
                        <img style={{'width': '100%', 'imageOrientation': 'from-image'}} src="./images/cashcount-ss.png" alt=""/>
                    </ProjectImg>
                    <ProjectDesc>
                        <ProjectName>CashCount</ProjectName>
                        <ProjectBody>
                            CashCount is a single-page application where registered users can see and log their incomes and expenses while also being able to delete and edit them at any time. This was my first full-stack project that gave me a deeper understanding of NoSQL databases, templating, and making fetch calls.
                        </ProjectBody>
                        <TechnologiesUsed>Technologies Used:</TechnologiesUsed>
                        <Technologies>JavaScript, Node, Express, MongoDB, Mongoose, Embedded JavaScript (EJS), CSS, Animate, Skeleton</Technologies>
                        <Links href="https://github.com/moonjason/CashCount" target="_blank" ghub={true}>Github</Links>
                        <Links href="https://cashcountapp.herokuapp.com/" target="_blank" >Deployed App</Links>
                    </ProjectDesc>
                </ProjectItem>
                <ProjectItem>
                    <ProjectDesc style={hasMarginRight}>
                        <ProjectName>Call of Duty: JavaScript</ProjectName>
                        <ProjectBody>
                            Call of Duty: JavaScript was my first ever project and also an imagination turned into a browser game. All logic was created using JavaScript while visuals were done mainly through HTML and CSS. This project was my entry to programming!
                        </ProjectBody>
                        <TechnologiesUsed>Technologies Used:</TechnologiesUsed>
                        <Technologies>HTML, CSS, JavaScript, jQuery, Animate, Bootstrap</Technologies>
                        <Links href="https://github.com/moonjason/fpsgame-callofduty-javascript" target="_blank" ghub={true}>Github</Links>
                        <Links href="https://moonjason.github.io/fpsgame-callofduty-javascript/" target="_blank">Deployed App</Links>
                    </ProjectDesc>
                    <ProjectImg data-aos="fade-left" data-aos-delay="100" data-aos-offset="510">
                        <img style={{'width': '100%', 'imageOrientation': 'from-image'}} src="./images/cod-js-ss.png" alt=""/>
                    </ProjectImg>
                </ProjectItem>
            </div>
        </ProjectsContainer>
    )
}

export default Projects