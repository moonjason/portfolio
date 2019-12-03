import React from "react";
import { Title, List, Icon } from "./style";

const Skills = () => {
  return (
    <>
      <Title>Skills</Title>
      <List>
        <Icon src="./icons/js-logo.png" alt=""/>
        <Icon src="./icons/html-logo.png" alt=""/>
        <Icon src="./icons/css-logo.png" alt=""/>
        <Icon src="./icons/nodejs-logo.png" alt=""/>
        <Icon src="./icons/express-logo.png" style={{"margin-top": "1rem"}} alt=""/>
        <Icon src="./icons/react-logo.png" alt=""/>
        <Icon src="./icons/mongodb-logo.png" alt=""/>
        <Icon src="./icons/postgresql-logo.png" alt=""/>
        <Icon src="./icons/python-logo.png" alt=""/>
        <Icon src="./icons/flask-logo.png" style={{"margin-top": ".5rem"}}alt=""/>
        <Icon src="./icons/git-logo.png" alt=""/>
        <Icon src="./icons/github-logo.png" alt=""/>
      </List>
      <h3>JavaScript | HTML5 | CSS3 | Node | Express | React | MongoDB | Firebase | PostgreSQL | Python | Flask | Git | Github </h3>
    </>
  );
};

export default Skills;
