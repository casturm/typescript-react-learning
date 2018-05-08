import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

import { Hello } from "./components/Hello";
import { Navbar } from "./components/Navbar";
import { Ticker } from "./components/Ticker";
import { ParentWithState } from "./components/ParentWithState";

const NavbarWithRouter = withRouter(Navbar as any);

function App() {
  return (
    <Router>
      <div className="app">
        <NavbarWithRouter />
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/clock">Clock</Link></li>
                    <li><Link to="/modal">Modal</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <Route exact={true} path="/" render={() => (
                <Hello name="World!" />
              )}/>
              <Route exact path="/clock" component={Ticker} />
              <Route path="/modal" component={ParentWithState} />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
