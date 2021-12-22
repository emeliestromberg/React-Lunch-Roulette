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
        <div>
          <p>
            Here you can add people <br />
            to the Lunch Roulette
          </p>
          <img src={SpeechBubbleRight} alt="Bubble" />
        </div>
        <AddForm />
      </BackgroundImage>
    </>
  );
};

export default AddPerson;
