import React from 'react';
import { 
    ProjectItem,
    ProjectImg,
    ProjectDesc
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
            <h1 className="Heading">Projects</h1> 
            <ProjectItem>
                <ProjectImg style={hasMarginRight}>
                    <img style={{'width': '100%', 'imageOrientation': 'from-image'}} src="./images/gotnext-ss.png" alt=""/>
                </ProjectImg>
                <ProjectDesc>
                    <h1>GotNext</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl pretium fusce id velit ut tortor. Quam id leo in vitae turpis massa sed elementum. Consequat ac felis donec et odio pellentesque diam volutpat. Consectetur adipiscing elit ut aliquam purus sit. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Eget duis at tellus at. Faucibus purus in massa tempor nec feugiat. Purus in massa tempor nec feugiat nisl pretium. Commodo quis imperdiet massa tincidunt. Scelerisque in dictum non consectetur a erat nam at. Iaculis at erat pellentesque adipiscing commodo elit at.</p>
                    <p>Technologies Used </p>
                </ProjectDesc>
            </ProjectItem>
            <ProjectItem>
                <ProjectDesc style={hasMarginRight}>
                    <h1>GotNext</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl pretium fusce id velit ut tortor. Quam id leo in vitae turpis massa sed elementum. Consequat ac felis donec et odio pellentesque diam volutpat. Consectetur adipiscing elit ut aliquam purus sit. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Eget duis at tellus at. Faucibus purus in massa tempor nec feugiat. Purus in massa tempor nec feugiat nisl pretium. Commodo quis imperdiet massa tincidunt. Scelerisque in dictum non consectetur a erat nam at. Iaculis at erat pellentesque adipiscing commodo elit at.</p>
                    <p>Technologies Used </p>
                </ProjectDesc>
                <ProjectImg>
                </ProjectImg>
            </ProjectItem>
        </div>
    )
}

export default Projects