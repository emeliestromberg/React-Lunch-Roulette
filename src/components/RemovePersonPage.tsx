import React from "react";
import MainMenuNavigationButton from "./buttons/MainMenuNavigationButton";
import RemovePersonBackground from "../img/RemovePersonBackground.png";
import "../styles/WelcomePage.css";
import RemoveForm from "./programs/RemoveForm";
import BackgroundImage from "./BackgroundImage";
import SpeechBubbleRight from "../img/SpeechBubbleRight.png";


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
        <div className="removePersonBackground"></div>
        <div>
          <ul>{buttons.map(renderButtons)}</ul>
        </div>
        <div>
          <p>
            Here you can remove people <br />
            from the Lunch Roulette
          </p>
          <img src={SpeechBubbleRight} alt="Bubble" />
        </div>
        <RemoveForm />
      </BackgroundImage>
    </>
  );
};

export default RemovePerson;
