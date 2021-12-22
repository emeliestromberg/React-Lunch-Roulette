import React from "react";
import "./App.css";
import Routes from "./Routes";
import { RouletteContextProvider } from "./RoueletteContext";

function App() {
  return (
    <div className="App">
      <RouletteContextProvider>
        <Routes />
      </RouletteContextProvider>
    </div>
  );
}

export default App;
