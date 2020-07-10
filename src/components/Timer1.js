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
    let milliseconds = ("0" + (Math.floor(timerTime / 1) % 100)).slice(-2);
    let seconds = ("10" + (Math.floor(timerTime / 100) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 6000) % 60)).slice(-2);
    
    return (
      <div className="Timer">
        <div className="Timer-header">Timer 1</div>
        <div className="Timer-display">
        {minutes}<small>m</small>  : {seconds}<small>s</small> : {milliseconds}<small>t</small>
        </div>
        {this.state.timerOn === false && this.state.timerTime === 0 && (
          <button onClick={this.startTimer}>Play</button>
        )}
        {this.state.timerOn === true && (
          <button onClick={this.stopTimer}>Pause</button>
        )}
        
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <button onClick={this.resetTimer}>Reset</button>
        )}
      </div>
    );
  }
}

export default Timer;
