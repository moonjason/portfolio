import React from "react";
import { 
  Title, 
  Icon, 
  SkillsRow,
  SkillsCol,
} from "./style";

const Skills = () => {
  return (
    <div>
      <Title>Skills</Title>
      <div>
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
          <SkillsCol style={{"marginLeft": '1.25rem'}}>
            <i style={{'fontSize': '9rem'}} className="devicon-express-original-wordmark colored"></i>
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
          <SkillsCol style={{'marginLeft': '-1.5rem', 'marginRight': '-1.5rem'}}>
            <Icon src="./icons/flask-logo.png" style={{"marginTop": ".5rem"}}alt=""/>
            <h3>Flask</h3>
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
      </div>
    </div>
  );
};

export default Skills;
