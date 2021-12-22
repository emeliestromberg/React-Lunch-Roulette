import React, { useState } from "react";
import "../styles/SeeListPage.css";
import MainMenuNavigationButton from "./buttons/MainMenuNavigationButton";
import SeeListBackground from "../img/SeeListBackground.png";
import ParticipantList from "./programs/ParticipantList";
import BackgroundImage from "./BackgroundImage";


interface Button {
  text: string;
  link: string;
}

const SeeListPage = () => {
  const buttons2 = [{ text: "Go Back", link: "/MainMenu" }];

  const renderButtons = (knapp: Button) => (
    <MainMenuNavigationButton buttontext={knapp.text} link={knapp.link} />
  );

  return (
    <>
      <BackgroundImage image={SeeListBackground}>
        <div>
          <div>
            <ul>{buttons2.map(renderButtons)}</ul>
          </div>
          <ParticipantList />
        </div>
      </BackgroundImage>
    </>
  );
};

export default SeeListPage;

{/*style={{ backgroundImage: SeeListPageBackground }}*/}