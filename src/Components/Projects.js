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
             A program where the user can create a personal song library. It is built using the concept of linked lists.
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

      if(this.state.activeTab===3){
        return(
          <div className="projects_cpp">
          <Card className="c_1" shadow={0}>
            <CardTitle style={{color: 'black', height: '200px', background:"url(http://2.bp.blogspot.com/-qYSLCI1rjD4/VqM5FUieZ5I/AAAAAAAACdo/ykyzL6Uuxd0/s1600/CPP.gif) center/cover "}}>TicTacToe</CardTitle>
            <CardText style={{'font-weight':'bold',height: "150px"}}>
             Simple TicTacToe game built using the SFML library.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/rahulbanerjee26/TicTacToe" colored>
                <p style={{fontSize:"2em",color: "black"}}className="fa fa-github-square" aria-hidden="true">
                </p>
              </Button>
            </CardActions>
          </Card>

          <Card className="c_1" shadow={0}>
            <CardTitle style={{color: 'black', height: '200px', background:"url(http://2.bp.blogspot.com/-qYSLCI1rjD4/VqM5FUieZ5I/AAAAAAAACdo/ykyzL6Uuxd0/s1600/CPP.gif) center/cover "}}>Galaxy Explorer</CardTitle>
            <CardText style={{'font-weight':'bold',height: "150px"}}>
             Asteroids are generated randomly and a phasor is used to shoot them. Shoot Asteroids to earn points. An AI is used to control the phasor which can not move from it<span> &#39;</span> s initial position but can rotate.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/rahulbanerjee26/galaxy-explorer" colored>
                <p style={{fontSize:"2em",color: "black"}}className="fa fa-github-square" aria-hidden="true">
                </p>
              </Button>
            </CardActions>
          </Card>

          <Card className="c_1" shadow={0}>
            <CardTitle style={{color: 'black', height: '200px', background:"url(http://2.bp.blogspot.com/-qYSLCI1rjD4/VqM5FUieZ5I/AAAAAAAACdo/ykyzL6Uuxd0/s1600/CPP.gif) center/cover "}}>Shapes DataBase</CardTitle>
            <CardText style={{'font-weight':'bold',height: "150px"}}>
              A parser is used to take input from the user. It is checked for error using a priority order. The user can add, update, search and delete shapes.</CardText>
            <CardActions border>
              <Button href="https://github.com/rahulbanerjee26/Shapes-DataBase" colored>
                <p style={{fontSize:"2em",color: "black"}}className="fa fa-github-square" aria-hidden="true">
                </p>
              </Button>
            </CardActions>
          </Card>

          <Card className="c_1" shadow={0}>
            <CardTitle style={{color: 'black', height: '200px', background:"url(http://2.bp.blogspot.com/-qYSLCI1rjD4/VqM5FUieZ5I/AAAAAAAACdo/ykyzL6Uuxd0/s1600/CPP.gif) center/cover "}}>Websites DataBase</CardTitle>
            <CardText style={{'font-weight':'bold',height: "150px"}}>
              Database to store information about websites built using the concept of Binary Tress. The user can add, delete, update and search for websites.</CardText>
            <CardActions border>
              <Button href="https://github.com/rahulbanerjee26/website-DataBase" colored>
                <p style={{fontSize:"2em",color: "black"}}className="fa fa-github-square" aria-hidden="true">
                </p>
              </Button>
            </CardActions>
          </Card>
          </div>
        )
      }

      if(this.state.activeTab===4){
        return(
          <div className="projects_unity">
          <Card className="unity_1" shadow={0}>
            <CardTitle style={{color: 'white', height: '200px', background:"url(https://media.giphy.com/media/c8XYthhqOzGAo/giphy.gif) center/cover "}}>Car Driving Game</CardTitle>
            <CardText style={{'font-weight':'bold',height: "150px"}}>
             A simple car game built for android in Unity using the standard assets and C#.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/rahulbanerjee26/Car-Game" colored>
                <p style={{fontSize:"2em",color: "black"}}className="fa fa-github-square" aria-hidden="true">
                </p>
              </Button>
            </CardActions>
          </Card>

          <Card className="unity_1" shadow={0}>
            <CardTitle style={{color: 'white', height: '200px', background:"url(https://media.giphy.com/media/c8XYthhqOzGAo/giphy.gif) center/cover "}}>Jack the Giant.V0</CardTitle>
            <CardText style={{'font-weight':'bold',height: "150px"}}>
            Version 0 Features: 1)Player animations 2) Infite background effect 3)Respawning of Clouds
            </CardText>
            <CardActions border>
              <Button href="https://github.com/rahulbanerjee26/JackTheGiant.V0" colored>
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
                    <Tab style={tabText} >C</Tab>
                    <Tab style={tabText} >C++</Tab>
                    <Tab style={tabText} >Unity</Tab>
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
