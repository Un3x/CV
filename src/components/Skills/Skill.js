import React from 'react';
import './Skill.css';
import StarRatings from './react-star-ratings';


const Skill = (props) => (
  <div class="SkillContainer">
    <div>{props.content.title}</div>
    <div>{props.content.rate}</div>
  </div>
)

export default Skill;
