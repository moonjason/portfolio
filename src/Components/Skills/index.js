import React from "react";
import { 
  Title, 
  Icon, 
  SkillsRow,
  SkillsCol,
  List
} from "./style";

const Skills = () => {
  return (
    <div>
      <Title>Skills</Title>
      <List>
        <SkillsRow>
          <SkillsCol>
            <Icon src="./icons/js-logo.png" alt=""/>
            <h3>JavaScript</h3>
          </SkillsCol>
          <SkillsCol>
            <Icon src="./icons/html-logo.png" alt=""/>
            <h3>HTML5</h3>
          </SkillsCol>
          <SkillsCol>
            <Icon src="./icons/css-logo.png" alt=""/>
            <h3>CSS3</h3>
          </SkillsCol>
          <SkillsCol>
            <Icon src="./icons/nodejs-logo.png" alt=""/>
            <h3>Node</h3>
          </SkillsCol>
          <SkillsCol style={{"marginLeft": '1rem', 'padding': '1% 2%'}}>
            <i style={{'fontSize': '7rem'}} className="devicon-express-original-wordmark colored"></i>
            <h3>Express</h3>
          </SkillsCol>
          <SkillsCol>
            <Icon src="./icons/react-logo.png" alt=""/>
            <h3>React</h3>
          </SkillsCol>
          <SkillsCol>
            <Icon src="./icons/mongodb-logo.png" alt=""/>
            <h3>MongoDB</h3>
          </SkillsCol>
          <SkillsCol>
            <Icon src="./icons/firebase-logo.png" alt=""/>
            <h3>Firebase</h3>
          </SkillsCol>
          <SkillsCol>
            <Icon src="./icons/postgresql-logo.png" alt=""/>
            <h3>PostgreSQL</h3>
          </SkillsCol>
          <SkillsCol>
            <Icon src="./icons/python-logo.png" alt=""/>
            <h3>Python</h3>
          </SkillsCol>
          <SkillsCol style={{'marginLeft': '-1rem', 'marginRight': '-1rem'}}>
            <Icon src="./icons/flask-logo.png" style={{}}alt=""/>
            <h3>Flask</h3>
          </SkillsCol>
          <SkillsCol>
            <i style={{'fontSize': '7rem', 'padding': '1% 2%'}} className="devicon-bootstrap-plain colored"></i>
            <h3>Bootstrap</h3>
          </SkillsCol>
          <SkillsCol>
            <Icon src="./icons/git-logo.png" alt=""/>
            <h3>Git</h3>
          </SkillsCol>
          <SkillsCol>
            <Icon src="./icons/github-logo.png" alt=""/>
            <h3>Github</h3>
          </SkillsCol>
        </SkillsRow>
      </List>
    </div>
  );
};

export default Skills;
