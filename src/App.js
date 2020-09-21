import React from 'react';
import Category from './components/Category'
import WhoAmI from './components/WhoAmI'
import WhatIDo from './components/WhatIDo'
import './App.css';
import Experience from './components/Work/Experience'
import Formation from './components/School/Formation'
import Skills from './components/Skills/Skills'
import config from './config/config'

const App = () => (
  <div className="MainContainer">
    <div className="App">
      <div className="Header">
        <WhoAmI />
        <WhatIDo />
      </div>
      <div className="Body">
        <div className="Skills">
          <Category title="Compétence">
            <Skills skills={config.skills} />
          </Category>
          <Category title="Formation">
            <div className="FlexContainer">
              <Formation content={config.education.ensiie} />
              <Formation content={config.education.stanislas} />
            </div>
          </Category>
        </div>
        <div className="ExperienceContainer">
          <Category title="Expérience professionelle">
            <Experience content={config.experience.matters} />
            <Experience content={config.experience.ensiie} />
            <Experience content={config.experience.marte} />
          </Category>
          <Category title="Les hobbys">
          </Category>
        </div>
      </div>
    </div>
  </div>
);


export default App;
