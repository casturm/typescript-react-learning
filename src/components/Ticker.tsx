import * as React from "react";
import { Toggle } from "./Toggle";

export class Ticker extends React.Component<any, any> {
  timerID: number;

  constructor(props: any) {
    super(props);
    this.state = {
      time: new Date(),
      isToggleOn: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event: any) : void {
    this.setState((prevState: any) => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (this.state.isToggleOn) {
      this.setState({
        time: new Date()
      });
    }
  }

  render() {
    return <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src={require("../../hour-glass.png")} alt="sands of time"></img>
        <div className="card-body">
          <h5 className="card-title">Sands of Time</h5>
          <p className="card-text">Where does the time go?</p>
          <div className="alert alert-dark" role="alert">
             {this.state.time.toLocaleTimeString()}
          </div>
          <Toggle handleClick={this.handleClick} isToggleOn={this.state.isToggleOn}   />
        </div>
      </div>
  }
}
