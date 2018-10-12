import React, { Component } from 'react';
import {Tabs,Tab,Card,CardTitle,CardText,CardActions,Button} from 'react-mdl';

class projects extends Component{
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }
    toggleTab(){
      if(this.state.activeTab===0){
        return(
          <div className="projects_react">

            {/*myReads Project*/}

            <Card className="react_1" shadow={0}>
              <CardTitle style={{color: 'white', height: '176px', background:"url(https://philna.sh/assets/posts/react-738ca5dd60ecf11214419e9d6c847d1e2e4ad88c3f147e12d8adfd25b76e6e66.gif) center/cover "}}>myReads App</CardTitle>
              <CardText style={{'font-weight':'bold',height: "150px"}}>
                A web app built using React. It helps the user keep track of the books they have
                read, want to read or are currently reading. The books are fetched from Udacity&#39;s database
              </CardText>
              <CardActions border>
                <Button href=" https://github.com/rahulbanerjee26/my-reads-app" colored>
                  <p style={{fontSize:"2em",color: "black"}}className="fa fa-github-square" aria-hidden="true">
                  </p></Button>
              </CardActions>
            </Card>

            {/*Neighbourhood Project*/}

            <Card className="react_1" shadow={0}>
              <CardTitle style={{color: 'white', height: '176px', background:"url(https://philna.sh/assets/posts/react-738ca5dd60ecf11214419e9d6c847d1e2e4ad88c3f147e12d8adfd25b76e6e66.gif) center/cover "}}>Neighbourhood Map</CardTitle>
              <CardText style={{'font-weight':'bold', height:"150px"}}>
              A neighbourhood map built using React,GoogleMap and the Foursquare APIS. It has an interactive map which gives the user,
              the location and the details of the nearby hotels in KuwaitCity. The data is provided by the Foursquare API.
              </CardText>
              <CardActions border>
                <Button href="https://github.com/rahulbanerjee26/nbrhoodmap" colored>
                  <p style={{fontSize:"2em",color: "black"}}className="fa fa-github-square" aria-hidden="true">
                  </p></Button>
              </CardActions>
            </Card>

            {/*Portfolio Project*/}

            <Card className="react_1" shadow={0}>
              <CardTitle style={{color: 'white', height: '176px', background:"url(https://philna.sh/assets/posts/react-738ca5dd60ecf11214419e9d6c847d1e2e4ad88c3f147e12d8adfd25b76e6e66.gif) center/cover "}}>Portfolio</CardTitle>
              <CardText style={{'font-weight':'bold', height:"150px"}}>
                This portfolio is built using React.
              </CardText>
              <CardActions border>
                <Button href=" https://github.com/rahulbanerjee26/my-reads-app" colored>
                  <p style={{fontSize:"2em",color: "black"}}className="fa fa-github-square" aria-hidden="true">
                  </p></Button>
              </CardActions>
            </Card>
          </div>
        )
      }
      if(this.state.activeTab===1){
        return(
          <div className="projects_js">
          {/*Memory Game */}

          <Card className="js_1" shadow={0}>
            <CardTitle style={{color: 'white', height: '200px', background:"url(https://cdn-images-1.medium.com/max/800/1*QOgtnTCyNl-S-_K93pCMlA.gif) center/cover "}}>Memory Game</CardTitle>
            <CardText style={{'font-weight':'bold',height: "150px"}}>
              A memory game built using HTML,CSS and Javascript. The user has to identify the matching pair of cards
              using the least number of moves possible or the least time. It is a responsive website.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/rahulbanerjee26/Memory-game" colored>
                <p style={{fontSize:"2em",color: "black"}}className="fa fa-github-square" aria-hidden="true">
                </p>
              </Button>
              <Button href="https://rahulbanerjee26.github.io/Memory-game/" colored>
                <p style={{fontSize:"2em",color: "black"}}className="fa fa-chrome" aria-hidden="true">
                </p>
              </Button>
            </CardActions>
          </Card>

          {/*Arcade*/}

          <Card className="js_1" shadow={0}>
            <CardTitle style={{color: 'white', height: '200px', background:"url(https://cdn-images-1.medium.com/max/800/1*QOgtnTCyNl-S-_K93pCMlA.gif) center/cover "}}>Arcade Game</CardTitle>
            <CardText style={{'font-weight':'bold', height:"150px"}}>
            An arcade game built using html,css and Javascript. In the game the user can select a character and he needs to reac the other end.
            He must do so without touching any of the insects.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/rahulbanerjee26/arcade-game" colored>
                <p style={{fontSize:"2em",color: "black"}}className="fa fa-github-square" aria-hidden="true">
                </p>
              </Button>
              <Button href="https://rahulbanerjee26.github.io/arcade-game/" colored>
                <p style={{fontSize:"2em",color: "black"}}className="fa fa-chrome" aria-hidden="true">
                </p>
              </Button>
            </CardActions>
          </Card>

          {/*Pixel Art Maker*/}
          <Card className="js_1" shadow={0}>
            <CardTitle style={{color: 'white', height: '200px', background:"url(https://cdn-images-1.medium.com/max/800/1*QOgtnTCyNl-S-_K93pCMlA.gif) center/cover "}}>Pixel Art Maker</CardTitle>
            <CardText style={{'font-weight':'bold', height:"150px"}}>
            A pixel Art maker built using html,css and javascript.
            The user can chose the desired colour and desired number of tiles to draw a picture.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/rahulbanerjee26/PIXEL-ART" colored>
                <p style={{fontSize:"2em",color: "black"}}className="fa fa-github-square" aria-hidden="true">
                </p>
              </Button>
              <Button href="https://rahulbanerjee26.github.io/PIXEL-ART/" colored>
                <p style={{fontSize:"2em",color: "black"}}className="fa fa-chrome" aria-hidden="true">
                </p>
              </Button>
            </CardActions>
          </Card>


          </div>
        )
      }
      if(this.state.activeTab===2){
        return(
          <div className="projects_c">
          <Card className="c_1" shadow={0}>
            <CardTitle style={{color: 'black', height: '200px', background:"url(https://media.giphy.com/media/3rgXBCMbhWxcPTHBC0/giphy.gif) center/cover "}}>Reversei</CardTitle>
            <CardText style={{'font-weight':'bold',height: "150px"}}>
             A Reversei/Othello game built using C. It is a computer vs human game.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/rahulbanerjee26/reversei" colored>
                <p style={{fontSize:"2em",color: "black"}}className="fa fa-github-square" aria-hidden="true">
                </p>
              </Button>
            </CardActions>
          </Card>

          <Card className="c_1" shadow={0}>
            <CardTitle style={{color: 'black', height: '200px', background:"url(https://media.giphy.com/media/3rgXBCMbhWxcPTHBC0/giphy.gif) center/cover "}}>Song Library</CardTitle>
            <CardText style={{'font-weight':'bold',height: "150px"}}>
             A program where the user can create a personal song library. It is built using the concenpt of linked lists.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/rahulbanerjee26/songLibrary" colored>
                <p style={{fontSize:"2em",color: "black"}}className="fa fa-github-square" aria-hidden="true">
                </p>
              </Button>
            </CardActions>
          </Card>

          <Card className="c_1" shadow={0}>
            <CardTitle style={{color: 'black', height: '200px', background:"url(https://media.giphy.com/media/3rgXBCMbhWxcPTHBC0/giphy.gif) center/cover "}}>Decimal-Binary Converter</CardTitle>
            <CardText style={{'font-weight':'bold',height: "150px"}}>
             A program to convert decimal numbers to binary and vice verca
            </CardText>
            <CardActions border>
              <Button href="https://github.com/rahulbanerjee26/decimal-BinaryConverter" colored>
                <p style={{fontSize:"2em",color: "black"}}className="fa fa-github-square" aria-hidden="true">
                </p>
              </Button>
            </CardActions>
          </Card>
          </div>
        )
      }
    }


    render() {
      const tabText= {
        color: "black",
        'font-weight': "bold",
        fontSize: "20px"
      }
        return (
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab style={tabText}>React</Tab>
                    <Tab style={tabText} >Javascript</Tab>
                    <Tab style={tabText} >C++/C</Tab>
                </Tabs>
                <section>
                    <div className="projects">
                      {this.toggleTab()}
                    </div>
                </section>
            </div>
        );
    }
}


export default projects;
