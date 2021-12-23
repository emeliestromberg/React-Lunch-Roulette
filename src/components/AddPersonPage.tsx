import React from "react";
import MainMenuNavigationButton from "./buttons/MainMenuNavigationButton";
import AddPersonBackground from "../img/AddPersonBackground.png";
import "../styles/WelcomePage.css";
import AddForm from "./programs/AddForm";
import BackgroundImage from "./BackgroundImage";
import SpeechBubbleRight from "../img/SpeechBubbleRight.png";


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
      <BackgroundImage image={AddPersonBackground}>
        <div className="addPersonBackground"></div>
        <div>
          <ul>{buttons.map(renderButtons)}</ul>
        </div>
        <h2>
          Here you can add people <br />
          to the Lunch Roulette
        </h2>
        <div className="intro">
          <img src={SpeechBubbleRight} alt="Bubble" />
        </div>
        <div className="welcome">
          <img src={SpeechBubbleRight} alt="Bubble" />
        </div>
        <AddForm />
      </BackgroundImage>
    </>
  );
};

export default AddPerson;
