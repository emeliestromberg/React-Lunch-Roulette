import React from "react";
import MainMenuNavigationButton from "./buttons/MainMenuNavigationButton";
import AddPersonBackground from "../img/AddPersonBackground.png";
import "../styles/WelcomePage.css";


interface Button {
  text: string;
  link: string;
}

const AddPerson = () => {
  const buttons = [{ text: "Go Back", link: "/MainMenu" }];

  const renderButtons = (knapp: Button) => (
    <MainMenuNavigationButton buttontext={knapp.text} link={knapp.link} />
  );

  return (
    <>
      <div
        className="addPersonBackground"
        style={{ backgroundImage: AddPersonBackground }}
      ></div>
      <div>
        <ul>{buttons.map(renderButtons)}</ul>
      </div>
    </>
  );
};

export default AddPerson;