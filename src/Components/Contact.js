import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';
import avatar from "./images/avatar.jpg"

class contact extends Component{
  render() {
    const image={
      'margin-left': "20%",
      'margin-top': "2%",
       width: "40%",
      'border-radius': "50%"
    };


    return(
      <div clasName ="contact-page">
      <Grid clasName="contact">
        <Cell col={6}>
          <h1> RAHUL BANERJEE </h1>
          <img
            style={image} src={avatar} alt="Logo"
          />
        </Cell>
        <Cell col={6}>
          <h1> CONTACT ME </h1>
          <div className="contact-icons">
            <i className="fa fa-phone-square"> (+1)647 913 8321</i>
            <i className="fa fa-envelope"> rahul.uoft@gmail.com</i>
            <i className="fa fa-linkedin-square"> rahulbanerjee2699 </i>
            <i className="fa fa-github-square"> rahulbanerjee26</i>
            <i className="fa fa-facebook-square"> rahulbanerjee2611</i>
          </div>
        </Cell>
      </Grid>
      </div>
    )
  }
}

export default contact;
