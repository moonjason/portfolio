import React from 'react';
import { ProjectItem } from './style';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const style = {
    "width": "90%",
    "maxWidth": "120rem",
    "margin": "0 auto",
}

const Projects = () => {
    return (    
        <div style={style}>
            <h1>Projects</h1>
            <ProjectItem></ProjectItem>
        </div>
    )
}

export default Projects