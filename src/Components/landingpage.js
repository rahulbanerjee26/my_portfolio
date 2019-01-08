import React, { Component } from 'react';
//import {Card,CardTitle,CardText,CardActions,Button, Tooltip, Icon} from 'react-mdl';

class landingpage extends Component{
  render() {
    const image={
      'margin-left': "40%",
      'margin-top': "2%",
       width: "20%"
    };
    return(
      <div className="banner">
        <h1> COMPUTER ENGINEERING STUDENT </h1>
        <img
          style={image} src="http://www.piwai.info/static/blog_img/murakamicat.png" alt="Logo"
        />
        <hr/>
        <p>HTML | CSS | Javascript | React | NodeJs | C++ | C </p>
        <div className="socialIcons">
          <a rel="noopener noreferrer" href="https://www.linkedin.com/in/rahulbanerjee2699/" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true"/>
          </a>

          <a rel="noopener noreferrer" href="https://github.com/rahulbanerjee26" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true"/>
          </a>

          <a rel="noopener noreferrer" href="mailto:rahul.uoft@gmail.com" target="_blank">
            <i className="fa fa-at" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default landingpage;
