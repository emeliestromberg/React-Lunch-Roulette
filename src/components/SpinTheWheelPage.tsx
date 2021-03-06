import React from "react";
import "../App.css";
import SpinTheWheelButton from "./buttons/SpinTheWheelButton";
import MainMenuNavigationButton from "./buttons/MainMenuNavigationButton";
import SpinTheWheelBackground from "../img/SpinTheWheelBackground.png";
import "../styles/WelcomePage.css";
import BackgroundImage from "./BackgroundImage";


interface Button {
  text: string;
  link: string;
}

const SpinTheWheel = () => {
  const buttons = [ { text: "Go Back", link: "/MainMenu" },];
  const playbutton = [{ text: "Spin!", link: "/SpinTheWheel" }];

  const renderButtons = (knapp: Button) => (
    <MainMenuNavigationButton buttontext={knapp.text} link={knapp.link} />
  );

  const renderPlayButton = (knapp: Button) => (
    <SpinTheWheelButton buttontext={knapp.text} link={knapp.link} />
  );

  return (
    <>
      <BackgroundImage image={SpinTheWheelBackground}>
        <div className="spinTheWheelBackground"></div>
        <div>
          <ul>{buttons.map(renderButtons)}</ul>
        </div>
        <div>
          <ul>{playbutton.map(renderPlayButton)}</ul>
        </div>
      </BackgroundImage>
    </>
  );
};

export default SpinTheWheel;
