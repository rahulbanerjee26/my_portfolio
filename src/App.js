import React, { Component } from 'react';
import './App.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {Layout, Header, Navigation , Drawer , Content} from 'react-mdl'
import Main from "./Components/Main.js"
//import {Link} from 'react-router-dom';

class App extends Component {
  render() {
  const  navtext = {
   fontSize: '20px',
   textAlign: 'center'
  };
  const  drawertext = {
   color: 'rgb(0, 0, 0)',
   fontSize: '20px'
  };
  const landing = {
    width: '100%',
    margin: 'auto',
    background: "linear-gradient(to right, #f5af19, #f12711)",
    height: '100%'
  };
  const navStyle= {
    background:" linear-gradient(to right, #f5af19, #f12711)"
  };
  const drawerStyle= {
    background: "linear-gradient(to right, #355c7d, #6c5b7b, #c06c84)"
  };
    return (
      <div className="demo-big-content">
        <Layout>
            <Header title="RAHUL BANERJEE" scroll style={navStyle}>
               <Navigation>
                    <a style={navtext} href="/">HOME</a>
                    <a style={navtext} href="about">ABOUT ME</a>
                    <a style={navtext} href="projects">PROJECTS</a>
                    <a style={navtext} href="contact">CONTACT</a>
                  </Navigation>
          </Header>
          <Drawer title="Menu" style={drawerStyle}>
              <Navigation>
              <a style={drawertext} href="/">HOME</a>
              <a style={drawertext} href="about">ABOUT ME</a>
              <a style={drawertext} href="projects">PROJECTS</a>
              <a style={drawertext} href="contact">CONTACT</a>
              </Navigation>
          </Drawer>
          <Content style={landing}>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
  </div>
  );
  }
}

export default App;
