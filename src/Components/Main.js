import React from 'react';
import {Route } from 'react-router-dom';
import landingpage from "./landingpage"
import about from "./AboutMe";
import projects from "./Projects";
import contact from "./Contact";

const Main= ()=> (
      <div>
        <Route exact path ="/" component ={landingpage} />
        <Route  path ="/about" component ={about} />
        <Route  path ="/projects" component ={projects} />
        <Route  path ="/contact" component ={contact} />
      </div>
);

export default Main;
