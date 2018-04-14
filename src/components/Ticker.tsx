import * as React from "react";

export class Ticker extends React.Component<any, any> {
  timerID: number;

  constructor(props: any) {
    super(props);
    this.state = {time: new Date()};
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
    this.setState({
      time: new Date()
    });
  }

  render() {
    return <div>
      <h1>Ticker</h1>
      <h2>It is {this.state.time.toLocaleTimeString()}</h2>
    </div>
  }
}
