import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = { time: {}, seconds: 1500 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.startBreakTimer = this.startBreakTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    this.setState({seconds: 1501});
    if (this.timer == 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  startBreakTimer(){
    this.setState({seconds: 301});
    if (this.timer == 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }


  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    
    // Check if we're at zero.
    if (seconds == 0) { 
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        <ul>
          <li>Timer</li>
          <li>Contact</li>
          <li>About Pomodoro</li>
        </ul>
          <h1>PomoTimer</h1>
        </div>
        <div className="mainBtnContainer">
          <button type="button" className="mainBtn" id="startBtn" onClick={this.startTimer}>Start</button>
          <button type="button" id="stopBtn" className="subBtn">Stop</button>
          <button type="button" id="breakBtn" className="mainBtn" onClick={this.startBreakTimer}>Break</button>
        </div>
        <div className="subBtnContainer">
        </div>
        <span id="timer">{this.state.time.m} : {this.state.time.s}</span>
      </div>
    );
  }
}

export default App;
  