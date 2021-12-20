import React from "react";
import "../App.css";
import MainMenuNavigationButton from "./buttons/MainMenuNavigationButton";
import SeeListBackground from "../img/SeeListBackground.png";
import "../styles/WelcomePage.css";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Button {
  text: string;
  link: string;
}

const SeeList = () => {
  const buttons = [{ text: "Go Back", link: "./MainMenu" }];

  const renderButtons = (knapp: Button) => (
    <MainMenuNavigationButton buttontext={knapp.text} link={knapp.link} />
  );

  const [list, setList] = useState([
    { name: "Karin Odin", id: 1 },
    { name: "Ulrika Blomström", id: 2 },
    { name: "Sofia Rokkones", id: 3 },
  ]);


  return (
    <>
      <div
        className="seeListBackground"
        style={{ backgroundImage: SeeListBackground }}
      ></div>
      <div>
        <ul>{buttons.map(renderButtons)}</ul>
      </div>
      <div>
          {list.map((list) => (
              <div className="participantList" key={list.id}>
                  <h2>Here is everyone who participates in the Lunch Roulette</h2>
                  <p>{list.name}</p>

              </div>
          ))}
      </div>
    </>
  );
};

export default SeeList;
