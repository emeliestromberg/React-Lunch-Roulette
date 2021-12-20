import React, { useState } from "react";
import "../styles/SeeListPage.css";
import MainMenuNavigationButton from "./buttons/MainMenuNavigationButton";
import SeeListPageBackground from "../img/SeeListPageBackground.png";
import ParticipantList from "./ParticipantList";

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
      <div style={{ backgroundImage: SeeListPageBackground }}>
        <div>
          <ul>{buttons2.map(renderButtons)}</ul>
        </div>
        <ParticipantList />
      </div>
    </>
  );
};

export default SeeListPage;
