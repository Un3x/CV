import React from 'react';
import Category from './components/Category'
import WhoAmI from './components/WhoAmI'
import WhatIDo from './components/WhatIDo'
import './App.css';
import Experience from './components/Work/Experience'
import Formation from './components/School/Formation'
import config from './config/config'

const App = () => (
  <div className="MainContainer">
    <div className="App">
      <WhoAmI />
      <WhatIDo />
      <Category title="Expérience professionelle">
        <Experience content={config.experience.matters} />
        <Experience content={config.experience.ensiie} />
        <Experience content={config.experience.marte} />
      </Category>
      <Category title="Formation">
        <div className="FlexContainer">
          <Formation content={config.education.ensiie} />
          <Formation content={config.education.stanislas} />
        </div>
      </Category>
      <Category title="Les hobbys">
      </Category>
    </div>
  </div>
);


export default App;
