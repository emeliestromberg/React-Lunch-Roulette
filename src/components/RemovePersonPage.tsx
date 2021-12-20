import React from "react";
import "../App.css";
import MainMenuNavigationButton from "./buttons/MainMenuNavigationButton";
import RemovePersonBackground from "../img/RemovePersonBackground.png";
import "../styles/WelcomePage.css";
import { Link } from "react-router-dom";

interface Button {
  text: string;
  link: string;
}

const RemovePerson = () => {
  const buttons = [{ text: "Go Back", link: "./MainMenu" }];

  const renderButtons = (knapp: Button) => (
    <MainMenuNavigationButton buttontext={knapp.text} link={knapp.link} />
  );

  return (
    <>
      <div
        className="removePersonBackground"
        style={{ backgroundImage: RemovePersonBackground }}
      ></div>
      <div>
        <ul>{buttons.map(renderButtons)}</ul>
      </div>
    </>
  );
};

export default RemovePerson;
