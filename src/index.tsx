import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { Ticker } from "./components/Ticker";
import { Toggle } from "./components/Toggle";
import { BootstrapModal } from "./components/BootstrapModal";
import { SaveAndReturnModal } from "./components/SaveAndReturnModal";
import { SaveAndReturnSFCModal } from "./components/SaveAndReturnSFCModal";

function App() {
  return (
    <div>
      <Hello name="World!" />
      <Ticker />
      <Toggle />
      <BootstrapModal />
      <SaveAndReturnModal text="save and return?" />
      <SaveAndReturnSFCModal text="save and return with SFC?" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
