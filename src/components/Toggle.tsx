import * as React from "react";

export class Toggle extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <button className="btn btn-primary btn-huge" type="button" onClick={ this.props.handleClick }>
        {this.props.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
