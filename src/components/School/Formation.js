import React from 'react'
import './Formation.css'

const Formation = (props) => (
  <div className="Formation">
    <div className="FormationTitle">
      <a href={props.content.url}>
        <img className="img" src={props.content.logo} alt={props.content.alt} />
      </a>
    </div>
    {props.content.description}
    <div className="duration">
      {props.content.duration}
    </div>
  </div>
)

export default Formation;
