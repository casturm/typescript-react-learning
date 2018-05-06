import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Hello } from "./components/Hello";
import { Navbar } from "./components/Navbar";
import { Ticker } from "./components/Ticker";
import { ParentWithState } from "./components/ParentWithState";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col">
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
            <Route exact={true} path="/" render={() => (
              <div className="col-4">
                <Hello name="World!" />
              </div>
            )}/>
            <Route exact path="/clock" component={Ticker} />
            <Route path="/modal" component={ParentWithState} />
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
