import React from "react";
import logo from "./logo.svg";
import "./App.css";
import WelcomePage from "./components/WelcomePage";

function App() {
  <div className="pictureAndButton">
    <div className="welcome">
      <h2 className="chatbubble">Welcome to</h2>
      <br />
      <h2 className="forre">Forefronts Lunch Roulette</h2>
    </div>

    <div className="enterButton">
      <h2>Click here to enter the tent</h2>
      <br />
      <br />
      <a href="./menuPage.html">ENTER</a>
    </div>
  </div>;
  return (
    <div className="App">
      <WelcomePage />
    </div>
  );
}

export default App;
