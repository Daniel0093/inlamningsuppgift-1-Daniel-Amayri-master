import React, { Component } from "react";
import Die from './componenten/ShowDieFace';
import ChooseWinner from './componenten/ShowWinner';
import "./App.css";

class App extends Component {
  constructor(){
    super()

    this.state={

      user: null,
      computer: null

    }

  }


  // Metoder - funktioner
  
  handleClick= () => {

    const userRandom = Math.ceil(Math.random() * 6)
    const userRandom2 = Math.ceil(Math.random() * 6)
    const userRandom3 = Math.ceil(Math.random() * 6)

    const comRandom = Math.ceil(Math.random() * 6)
    const comRandom2 = Math.ceil(Math.random() * 6)
    const comRandom3 = Math.ceil(Math.random() * 6)



    this.setState(
      {
        user: userRandom + userRandom2 + userRandom3 ,
        computer: comRandom + comRandom2 + comRandom3
      }
    )
  }

  reset = () => {

    this.setState(
      {
        user: null,
        computer: null
      }
    )
    
  }

  render(){
    return(
      <div className="App">

        <div>
          <ChooseWinner user={this.state.user} computer={this.state.computer} />          
        </div>

        <div className='score'>
          Your Score: <Die diceFace={this.state.user} />
          Computer Score: <Die diceFace={this.state.computer} />          
        </div>

        <div className='play'>
          <button onClick={this.handleClick}>Play</button>
        </div>

        <div className='reset'>
          <button onClick={this.reset}>New Game</button>
        </div>

        
      </div>
    );
  }
}

export default App;