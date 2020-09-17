import React from 'react'
import './Experience.css'

class Experience extends React.Component {
  constructor(props) {
    super();
    this.state = {
      collapsed: true,
    };
  }

  toogleCollapse() {
    this.setState({ collapsed: !this.state.collapsed })
  }

  renderMission(mission) {
    return <div>
      <div className="ExperienceTitle" key={mission.title}>
        {mission.logo !== undefined &&
          <a href={mission.url}>
            <img className="img" src={mission.logo} alt={mission.alt} />
          </a>
        }
        <div>
          {mission.description.map((description) => <p>{description}</p>)}
        </div>
      </div>
      <div className="SkillList">
        {mission.skills.map((skill) => <p className="SkillElement">{skill}</p>)}
      </div>
      <hr />
    </div>

  }

  render() {
    return this.state.collapsed ? (
      <div className="Experience">
        <div className="ExperienceTitle">
          <a href={this.props.content.url}>
            <img className="img" src={this.props.content.logo} alt={this.props.content.alt} />
          </a>
          {this.props.content.description}
        </div>
        <div className="duration">
          {this.props.content.duration}
        </div>
        <div>
          <button onClick={() => this.toogleCollapse()}>En savoir plus</button>
        </div>
      </div>
    ) : (
        <div className="Experience">
          <div className="ExperienceTitle">
            <a href={this.props.content.url}>
              <img className="img" src={this.props.content.logo} alt={this.props.content.alt} />
            </a>
            <p>
              {this.props.content.description}
            </p>
          </div>
          { this.props.content.detailed.description &&
            <p>
              {this.props.content.detailed.description}
            </p>
          }
          {this.props.content.detailed.mission.map((mission) => {
            return this.renderMission(mission)
          })}
          <div className="duration">
            {this.props.content.duration}
          </div>
          <div>
            <button onClick={() => this.toogleCollapse()}>Réduire</button>
          </div>
        </div>
      )
  }
}

export default Experience;
