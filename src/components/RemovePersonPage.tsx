import React from "react";
import MainMenuNavigationButton from "./buttons/MainMenuNavigationButton";
import RemovePersonBackground from "../img/RemovePersonBackground.png";
import "../styles/WelcomePage.css";
import RemoveForm from "./programs/RemoveForm";
import BackgroundImage from "./BackgroundImage";


interface Button {
  text: string;
  link: string;
}

const RemovePerson = () => {
  const buttons = [{ text: "Go Back", link: "/MainMenu" }];

  const renderButtons = (knapp: Button) => (
    <MainMenuNavigationButton buttontext={knapp.text} link={knapp.link} />
  );

  return (
    <>
    <BackgroundImage image={RemovePersonBackground}>
      <div
        className="removePersonBackground"
      ></div>
      <div>
        <ul>{buttons.map(renderButtons)}</ul>
      </div>
      <RemoveForm/>
    </BackgroundImage>
    </>
  );
};

export default RemovePerson;


{/*style={{ backgroundImage: RemovePersonBackground }}*/}