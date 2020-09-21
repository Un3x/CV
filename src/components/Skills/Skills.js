import React from 'react';
import Skill from './Skill';
import './Skills.css';


const Skills = (props) => (
  <div class="SkillsContainer">
    {props.skills.map((skill) => <Skill content={skill} />)}
  </div>
);

export default Skills;
