import React from "react";
import { Title, List, Icon, SkillsText, SkillsRow } from "./style";

const Skills = () => {
  return (
    <>
      <Title>Skills</Title>
      <div>
        <SkillsRow>
          
        </SkillsRow>
      </div>
      <List>
        <Icon src="./icons/js-logo.png" alt=""/>
        <Icon src="./icons/html-logo.png" alt=""/>
        <Icon src="./icons/css-logo.png" alt=""/>
        <Icon src="./icons/nodejs-logo.png" alt=""/>
        <Icon src="./icons/express-logo.png" style={{"marginTop": "1rem"}} alt=""/>
        <Icon src="./icons/react-logo.png" alt=""/>
        <Icon src="./icons/mongodb-logo.png" alt=""/>
        <Icon src="./icons/postgresql-logo.png" alt=""/>
        <Icon src="./icons/python-logo.png" alt=""/>
        <Icon src="./icons/flask-logo.png" style={{"marginTop": ".5rem"}}alt=""/>
        <Icon src="./icons/git-logo.png" alt=""/>
        <Icon src="./icons/github-logo.png" alt=""/>
      </List>
      <SkillsText>JavaScript | HTML5 | CSS3 | Node | Express | React | MongoDB | Firebase | PostgreSQL | Python | Flask | Git | Github </SkillsText>
    </>
  );
};

export default Skills;
