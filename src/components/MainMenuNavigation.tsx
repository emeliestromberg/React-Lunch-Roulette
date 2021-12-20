import React from "react";
import MainMenuNavigationButton from "./buttons/MainMenuNavigationButton";
import "../styles/MainMenuNavigation.css";
import SpeechBubbleRight from "../img/SpeechBubbleRight.png";
import MainMenuBackground from "../img/MainMenuNavigationBackground.png";

interface Button {
  text: string;
  link: string;
}

const MainMenuNavigation = () => {
  const buttons = [
    { text: "Go Back", link: "/Home" },
    { text: "See participant list", link: "/List" },
    { text: "Spin the wheel", link: "/SpinTheWheel" },
    { text: "Remove a person", link: "/RemovePerson" },
    { text: "Add a person", link: "/AddPerson" },
  ];

  const renderButtons = (knapp: Button) => (
    <MainMenuNavigationButton buttontext={knapp.text} link={knapp.link} />
  );

  return (
    <>
      <div style={{ backgroundImage: MainMenuBackground }}>
        <section className="banner">
          <div className="welcome">
            <h2>
              Welcome to the <br />
              <span>Main Menu!</span>
            </h2>
            <img src={SpeechBubbleRight} alt="Bubble" />
          </div>
          <div className="please-choose">
            <h3>
              Please choose what <br />
              you want to do
            </h3>
            <img src={SpeechBubbleRight} alt="Bubble" />
          </div>
        </section>

        <div>
          <ul>{buttons.map(renderButtons)}</ul>
        </div>
      </div>
    </>
  );
};

export default MainMenuNavigation;

//const buttons = ["Knapp 1", "Knapp 2", "Knapp 3"];

/*<div>
<ul>
<MainMenuNavigationButton buttontext="Knapp 1" />
<MainMenuNavigationButton buttontext="Knapp 2" />
<MainMenuNavigationButton buttontext="Knapp 3" />
</ul>
</div>
      <div>
        <ul>
          {buttons.map((button) => (
            <MainMenuNavigationButton buttontext={button} />
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {buttons2.map((knapp) => (
            <MainMenuNavigationButton buttontext={knapp.text} />
          ))}
        </ul>
      </div>
          */
