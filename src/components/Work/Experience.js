import React from 'react'
import './Experience.css'

class Experience extends React.Component {
  constructor(props) {
    super();
    this.state = {
      collapsed: true,
    };
  }

  render() {
    return <div className="Experience">
      <div className="ExperienceTitle">
        <a href={this.props.content.url}>
          <img className="ExperienceImg" src={this.props.content.logo} alt={this.props.content.alt} />
        </a>
      </div>
      <div className="ExperienceContent">
        {this.props.content.description}
        <div className="ExperienceDuration">
          {this.props.content.duration}
        </div>
      </div>
    </div>
  }
}

export default Experience;
