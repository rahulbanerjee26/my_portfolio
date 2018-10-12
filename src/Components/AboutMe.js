import React, { Component } from 'react';
import aboutme from "./images/aboutme.jpg";

class about extends Component{
  render() {
    const image={
      'margin-left': "5%",
      'margin-top': "2%",
       width: "40%",
       'border-radius' : "40%",
       height: "50%"
    };

    const icons={
      'font-size': '3em',
      color: 'black'
    }

    const parts= {
        display: 'flex',
        'justify-content': 'space-between',
        width: "100%",
        margin: '2%'

    }

    const personalinfo={
      'margin-top': "5%"
    }

    return(
      <div>
        <div style={parts}>
          <img
            style={image} src={aboutme} alt="Logo"
          />
          <div style={{width:"50%"}}>
            <span style={icons}><i style= {personalinfo}class="fa fa-birthday-cake">  26<sup>th</sup> November,1999</i> </span>
            <span style={icons}><i style= {personalinfo}class="fa fa-language"> English, Hindi, Bengali, French</i> </span>
            <span style={icons}><i style= {personalinfo}class="fa fa-graduation-cap">2<sup>nd</sup> Year Computer Engineering Student at the University of Toronto</i> </span>
          </div>
        </div>
        <p style={{fontSize:"22px", 'font-family': 'cursive', 'font-weight':"bold"}}>
        Hello! I am Rahul, an energetic and passionate student studying towards BS in Computer Engineering at the University of Toronto.I Completed Udacity&apos;s Front End Nanodegree in August. I am proficient in HTML, CSS, JavaScript, C and C++.
        My Hobbies are reading, playing sports, photography, listening to music and Netflix. I was born in India and I moved the Kuwait at the age of 9. While in HighSchool I received an Appreciation Certificate
        from Human Resource Development Ministry of India for my brilliant performance in CBSE Grade 10 examination. I was also awarded a certificate of academic excellence and a green tie from my school for my brilliant performance for three consecutive
        years (2013-2016). I have volunteered for many carnivals and events throughout highschool. In my first year in University, I was a part of Blue Crew, a volunteer organization, and a robotics club.
        Recently I have taken an interest in developing apps for Alexa and am working on it. Other than that, I love capturing pictures of picturesque places and still life photography. Soon, I will be adding a section on my portfolio to display my photos.
        </p>
      </div>

    )
  }
}

export default about;
