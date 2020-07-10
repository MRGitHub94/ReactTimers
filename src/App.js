import React, { Component } from "react";

import Timer1 from "./components/Timer1";
import Timer2 from "./components/Timer2";
import Timer3 from "./components/Timer3";
import Total from "./components/Total";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-title">Timers </div>
        <div className="Timers">
          <Timer1 />
          <Timer2 />
          <Timer3 />
        </div>
        <br></br><hr></hr><br></br>
        <div className="TTimers">
        <Total />
        </div>
      </div>
    );
  }
}

export default App;
