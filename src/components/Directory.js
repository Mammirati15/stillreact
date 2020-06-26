import React, { Component } from 'react';

class Directory extends Component{
  constructor(props){
    super(props);
    this.state = {
      sports: [{
        id: 0,
        name: 'Da Bears',
        image: 'assets/images/bearslogo1.png',
        description: "These guys have been my favorite team since I was born, also the last year and only year they won the Superbowl!"
        },
        {
          id: 1,
          name: 'Your Chicago Bulls',
          image: 'assets/images/bullslogo1.png',
          description: "When I was a kid, the bulls were the best team in the world.  They won 6 Championships, compliments of MJ",
        },
        {
          id: 2,
          name: 'The Cubs',
          image: 'assets/images/cubslogo1.png',
          description: "The cubs were always terrible, every year.  They didnt win a championship for over 100 years!"
        }        
      ]
    };
  }

  render(){
    const directory = this.state.sports.map(sports => {
      return(
        <div key={sports.id} className="col">
          <img src={sports.image} alt={sports.name} />
          <h2>{sports.name}</h2>
          <p>{sports.description}</p>
        </div>
      );
    });

    return(
      <div className="container">
        <div className="row">
          {directory}
        </div>
      </div>
    );
  }

}

export default Directory;