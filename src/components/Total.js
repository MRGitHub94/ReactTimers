import React, { Component } from "react";
import "../App.css";

class Timer extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0
    });
  };

  render() {
    const { timerTime } = this.state;
    let milliseconds = ("0" + (Math.floor(timerTime / 100) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 10000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 600000) % 60)).slice(-2);
    
    return (
      <div className="Timer">
        <div className="TotalTimer-header">Total Time</div>
        <div className="Timer-display">
        {minutes}<small>m</small>  : {seconds}<small>s</small> : {milliseconds}<small>t</small>
        </div>
        
      </div>
    );
  }
}

export default Timer;
