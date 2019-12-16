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
    Technologies
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
    'position': 'relative'
}

const hasMarginRight = {'marginRight': '6rem'}

const Projects = () => {
    return (
        <div style={style}>
            <ProjectsHeader>Projects</ProjectsHeader> 
            <ProjectItem>
                <ProjectImg style={hasMarginRight} data-aos="fade-right">
                    <img style={{'width': '100%', 'imageOrientation': 'from-image'}} src="./images/gotnext-ss.png" alt=""/>
                </ProjectImg>
                <ProjectDesc>
                    <ProjectName>GotNext</ProjectName>
                    <ProjectBody>GotNext is an app where basketball players can check if their favorite parks are empty or occupied. This app was inspired by my park-going experience when it's always uncertain to get a full 5 on 5 basketball game going. Users are able to create and view each others' profiles and search for parks based on the input location. Logged in users are able to check in and out of parks while being able to see a specific park's activity in real-time.</ProjectBody>
                    <TechnologiesUsed>Technologies Used:</TechnologiesUsed>
                    <Technologies>React, Node, Express, Firebase (Auth, Cloud Firestore, Storage), Styled-Components, Yelp API, Mapbox API</Technologies>
                    <Links href="https://github.com/moonjason/GotNext" target="_blank">Github</Links>
                    <Links href="https://gotnext-app.herokuapp.com" target="_blank">Deployed App</Links>
                </ProjectDesc>
            </ProjectItem>
            <ProjectItem>
                <ProjectDesc style={hasMarginRight}>
                    <ProjectName>Legendary Game Reviews</ProjectName>
                    <ProjectBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl pretium fusce id velit ut tortor. Quam id leo in vitae turpis massa sed elementum. Consequat ac felis donec et odio pellentesque diam volutpat. Consectetur adipiscing elit ut aliquam purus sit. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Eget duis at tellus at. Faucibus purus in massa tempor nec feugiat. Purus in massa tempor nec feugiat nisl pretium. Commodo quis imperdiet massa tincidunt. Scelerisque in dictum non consectetur a erat nam at. Iaculis at erat pellentesque adipiscing commodo elit at.</ProjectBody>
                    <TechnologiesUsed>Technologies Used:</TechnologiesUsed>
                    <Technologies>Python, Flask, React, PostgreSQL, SQLite, Peewee, Styled-Components, RAWG API</Technologies>
                    <Links href="https://github.com/moonjason/legendary-game-reviews-react" target="_blank">Github</Links>
                    <Links href="https://legendary-game-reviews.herokuapp.com/" target="_blank">Deployed App</Links>
                </ProjectDesc>
                <ProjectImg>
                    <img style={{'width': '100%', 'imageOrientation': 'from-image'}} src="./images/lgr-ss.png" alt=""/>
                </ProjectImg>
            </ProjectItem>
            <ProjectItem>
                <ProjectImg style={hasMarginRight} data-aos="fade-right">
                    <img style={{'width': '100%', 'imageOrientation': 'from-image'}} src="./images/cashcount-ss.png" alt=""/>
                </ProjectImg>
                <ProjectDesc>
                    <ProjectName>CashCount</ProjectName>
                    <ProjectBody>GotNext is an app where basketball players can check if their favorite parks are empty or occupied. This app was inspired by my park-going experience when it's always uncertain to get a full 5 on 5 basketball game going. Users are able to create and view each others' profiles and search for parks based on the input location. Logged in users are able to check in and out of parks while being able to see a specific park's activity in real-time.</ProjectBody>
                    <TechnologiesUsed>Technologies Used:</TechnologiesUsed>
                    <Technologies>JavaScript, Node, Express, MongoDB, Mongoose, Embedded JavaScript (EJS), CSS, Animate, Skeleton</Technologies>
                    <Links href="https://github.com/moonjason/CashCount" target="_blank">Github</Links>
                    <Links href="https://cashcountapp.herokuapp.com/" target="_blank">Deployed App</Links>
                </ProjectDesc>
            </ProjectItem>
            <ProjectItem>
                <ProjectDesc style={hasMarginRight}>
                    <ProjectName>Call of Duty: JavaScript</ProjectName>
                    <ProjectBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl pretium fusce id velit ut tortor. Quam id leo in vitae turpis massa sed elementum. Consequat ac felis donec et odio pellentesque diam volutpat. Consectetur adipiscing elit ut aliquam purus sit. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Eget duis at tellus at. Faucibus purus in massa tempor nec feugiat. Purus in massa tempor nec feugiat nisl pretium. Commodo quis imperdiet massa tincidunt. Scelerisque in dictum non consectetur a erat nam at. Iaculis at erat pellentesque adipiscing commodo elit at.</ProjectBody>
                    <TechnologiesUsed>Technologies Used:</TechnologiesUsed>
                    <Technologies>HTML, CSS, JavaScript, jQuery, Animate, Bootstrap</Technologies>
                    <Links href="https://github.com/moonjason/fpsgame-callofduty-javascript" target="_blank">Github</Links>
                    <Links href="https://moonjason.github.io/fpsgame-callofduty-javascript/" target="_blank">Deployed App</Links>
                </ProjectDesc>
                <ProjectImg>
                    <img style={{'width': '100%', 'imageOrientation': 'from-image'}} src="./images/cod-js-ss.png" alt=""/>
                </ProjectImg>
            </ProjectItem>
        </div>
    )
}

export default Projects