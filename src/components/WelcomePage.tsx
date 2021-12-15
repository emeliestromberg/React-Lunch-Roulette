import React from "react";
import "../App.css";
import MainMenuNavigation from "./MainMenuNavigation";
import "../styles/WelcomePage.css";
import {Link} from "react-router-dom";

function WelcomePage() {
  return (
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
        <a href="src/components/MainMenuNavigation.tsx">ENTER</a>
        <Link to={"/"}>This is test</Link>
      </div>
    </div>
  );
}

export default WelcomePage;
