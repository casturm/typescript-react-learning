import * as React from "react";

export class Toggle extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event: any) : void {
    this.setState((prevState: any) => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={ this.handleClick }>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
