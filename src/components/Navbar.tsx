import * as React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component<{location: Location}, {}> {
  render() {
    console.log(this.props.location);
    const currentLocation = this.props.location.pathname;

    return (
      <nav className="navbar navbar-dark bg-dark">

        <Link to="/" className="navbar-brand">ReactLearning</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className={"nav-item " + currentLocation === '/' ? "active" : ""}>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className={"nav-item " + currentLocation === '/clock' ? "active" : ""}>
              <Link to="clock" className="nav-link">Clock</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
