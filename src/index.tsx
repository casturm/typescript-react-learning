import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { Ticker } from "./components/Ticker";
import { Toggle } from "./components/Toggle";
import { BootstrapModal } from "./components/BootstrapModal";

function App() {
  return (
    <div>
      <Hello name="World!" />
      <Ticker />
      <Toggle />
      <BootstrapModal />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
