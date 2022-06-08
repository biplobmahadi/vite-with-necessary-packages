import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import OutsideContext from "./components/OutsideContext";
import CounterContextProvider from "./contexts/counter/provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CounterContextProvider>
      <App />
    </CounterContextProvider>

    {/* #### Render to see the error  */}
    {/* <OutsideContext /> */}
  </React.StrictMode>
);
