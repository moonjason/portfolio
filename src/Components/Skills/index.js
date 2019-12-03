import React from "react";
import { Title, List, Icon } from "./style";

const Skills = () => {
  return (
    <>
      <Title>Skills <i class="far fa-file-code"></i></Title>
      <List>
        <Icon src="./icons/js-logo.png" alt=""/>
        <Icon src="./icons/html-logo.png" alt=""/>
        <Icon src="./icons/css-logo.png" alt=""/>
        <Icon src="./icons/nodejs-logo.png" alt=""/>
        <Icon src="./icons/express-logo.png" style={{"margin-top": "4rem"}} alt=""/>
        <Icon src="./icons/react-logo.png" alt=""/>
        <Icon src="./icons/mongodb-logo.png" alt=""/>
        <Icon src="./icons/python-logo.png" alt=""/>
        <Icon src="./icons/flask-logo.png" style={{"margin-top": "2rem"}}alt=""/>
        <Icon src="./icons/git-logo.png" alt=""/>
        <Icon src="./icons/github-logo.png" alt=""/>
      </List>
    </>
  );
};

export default Skills;
