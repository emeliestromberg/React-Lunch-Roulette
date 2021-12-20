import React from "react";
import "../App.css";
import SpinTheWheelButton from "./buttons/SpinTheWheelButton";
import MainMenuNavigationButton from "./buttons/MainMenuNavigationButton";
import "../styles/WelcomePage.css";
import { Link } from "react-router-dom";

interface Button {
  text: string;
  link: string;
}

const SpinTheWheel = () => {
  const button = [
    { text: "Go Back", link: "./MainMenu" },
  ];

  const renderButtons = (knapp: Button) => (
    <MainMenuNavigationButton buttontext={knapp.text} link={knapp.link} />
  );

  const playbutton = [
      { text: "Spin!", link: "./SpinTheWheel" }];

  const renderPlayButton = (knapp: Button) => (
    <SpinTheWheelButton buttontext={knapp.text} link={knapp.link} />
  );

  return (
    <>
      <div>
        <ul>{button.map(renderButtons)}</ul>
      </div>
      <div>
        <ul>{playbutton.map(renderPlayButton)}</ul>
      </div>
    </>
  );
};

export default SpinTheWheel;