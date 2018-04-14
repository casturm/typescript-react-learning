import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { Ticker } from "./components/Ticker";
import { Toggle } from "./components/Toggle";

function App() {
  return (
    <div>
      <Hello name="World!" />
      <Ticker />
      <Toggle />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
