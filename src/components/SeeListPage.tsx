import React from "react";
import "../App.css";
import MainMenuNavigationButton from "./buttons/MainMenuNavigationButton";
import SeeListBackground from "../img/SeeListBackground.png";
import "../styles/WelcomePage.css";
import { Link } from "react-router-dom";

interface Button {
  text: string;
  link: string;
}

const SeeList = () => {
  const buttons = [{ text: "Go Back", link: "./MainMenu" }];

  const renderButtons = (knapp: Button) => (
    <MainMenuNavigationButton buttontext={knapp.text} link={knapp.link} />
  );

  return (
    <>
      <div
        className="seeListBackground"
        style={{ backgroundImage: SeeListBackground }}
      ></div>
      <div>
        <ul>{buttons.map(renderButtons)}</ul>
      </div>
    </>
  );
};

export default SeeList;
