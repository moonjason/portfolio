import React from "react";
import { 
  Title, 
  Icon, 
  SkillsRow,
  SkillsCol,
  List,
  IconText
} from "./style";

const Skills = () => {
  return (
    <div>
      <Title>Skills</Title>
      <List>
        <SkillsRow>
          <SkillsCol>
            <Icon src="./icons/js-logo.png" alt=""/>
            <IconText>JavaScript</IconText>
          </SkillsCol>
          <SkillsCol>
            <Icon src="./icons/html-logo.png" alt=""/>
            <IconText>HTML5</IconText>
          </SkillsCol>
          <SkillsCol>
            <Icon src="./icons/css-logo.png" alt=""/>
            <IconText>CSS3</IconText>
          </SkillsCol>
          <SkillsCol>
            <Icon src="./icons/nodejs-logo.png" alt=""/>
            <IconText>Node</IconText>
          </SkillsCol>
          <SkillsCol style={{"marginLeft": '1rem', 'padding': '1% 2%'}}>
            <i style={{'fontSize': '7rem'}} className="devicon-express-original-wordmark colored"></i>
            <IconText>Express</IconText>
          </SkillsCol>
          <SkillsCol>
            <Icon src="./icons/react-logo.png" alt=""/>
            <IconText>React</IconText>
          </SkillsCol>
          <SkillsCol>
            <Icon src="./icons/mongodb-logo.png" alt=""/>
            <IconText>MongoDB</IconText>
          </SkillsCol>
          <SkillsCol>
            <Icon src="./icons/firebase-logo.png" alt=""/>
            <IconText>Firebase</IconText>
          </SkillsCol>
          <SkillsCol>
            <Icon src="./icons/postgresql-logo.png" alt=""/>
            <IconText>PostgreSQL</IconText>
          </SkillsCol>
          <SkillsCol>
            <Icon src="./icons/python-logo.png" alt=""/>
            <IconText>Python</IconText>
          </SkillsCol>
          <SkillsCol style={{'marginLeft': '-1rem', 'marginRight': '-1rem'}}>
            <Icon src="./icons/flask-logo.png" style={{}}alt=""/>
            <IconText>Flask</IconText>
          </SkillsCol>
          <SkillsCol>
            <i style={{'fontSize': '7rem', 'padding': '1% 2%'}} className="devicon-bootstrap-plain colored"></i>
            <IconText>Bootstrap</IconText>
          </SkillsCol>
          <SkillsCol>
            <Icon src="./icons/git-logo.png" alt=""/>
            <IconText>Git</IconText>
          </SkillsCol>
          <SkillsCol>
            <Icon src="./icons/github-logo.png" alt=""/>
            <IconText>Github</IconText>
          </SkillsCol>
        </SkillsRow>
      </List>
    </div>
  );
};

export default Skills;
