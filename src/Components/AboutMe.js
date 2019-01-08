import React, { Component } from 'react';

class about extends Component{
  render() {
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
      <div style={{background: "linear-gradient(to right, #f5af19, #f12711)"}}>
        <div style={parts}>
          <div style={{width:"95%"}}>
            <span style={icons}><i style= {personalinfo}class="fa fa-birthday-cake">  26<sup>th</sup> November,1999</i> </span>
            <span style={icons}><i style= {personalinfo}class="fa fa-language"> English, Hindi, Bengali, French</i> </span>
            <span style={icons}><i style= {personalinfo}class="fa fa-graduation-cap">2<sup>nd</sup> Year Computer Engineering Student at the University of Toronto</i> </span>
          </div>
        </div>
        <p style={{fontSize:"22px", 'font-weight':"bold"}}>
        Hello! I am Rahul, an energetic and passionate student studying towards BS in Computer Engineering at the University of Toronto.I Completed Udacity&apos;s Front End Nanodegree in August. I am proficient in HTML, CSS, JavaScript, C and C++.
        My Hobbies are reading, playing sports, photography, listening to music and Netflix. I was born in India and I moved the Kuwait at the age of 9. While in Highschool I received an Appreciation Certificate
        from Human Resource Development Ministry of India for my brilliant performance in CBSE Grade 10 examination. I was also awarded a certificate of academic excellence and a green tie from my school for my brilliant performance for three consecutive
        years (2013-2016). I have volunteered for many carnivals and events throughout highschool. In my first year in University, I was a part of Blue Crew, a volunteer organization, and a robotics club.
        Recently I have taken an interest in developing games with Unity and am working on it. Other than that, I love capturing pictures of picturesque places and still life photography.
        </p>
      </div>

    )
  }
}

export default about;
