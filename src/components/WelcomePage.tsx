import React from "react";
import "../App.css";
import MainMenuNavigation from "./MainMenuNavigation";
import "../styles/WelcomePage.css";
import WelcomeBackground from "../img/WelcomeBackground.png";
import { Link } from "react-router-dom";
import BackgroundImage from "./BackgroundImage";


function WelcomePage() {
  return (
    <BackgroundImage image={WelcomeBackground}>
      <div className="pictureAndButton">
        <div className="welcomePageBackground"></div>
        <div className="welcome">
          <h2 className="chatbubble">Welcome to</h2>
          <br />
          <h2 className="forre">Forefronts Lunch Roulette</h2>
        </div>

        <div className="enterButton">
          <h2>Click here to enter the tent</h2>
          <br />
          <br />
          <Link to={"/MainMenu"}>ENTER</Link>
        </div>
      </div>
    </BackgroundImage>
  );
}

export default WelcomePage;


{
  /* style={{ backgroundImage: WelcomePageBackground }} */
}