import React from "react";
import MainMenuNavigationButton from "./buttons/MainMenuNavigationButton";
import "../styles/MainMenuNavigationButton.css";

<body>
  <section className="banner">
    <div className="welcome">
      <h2>
        Welcome to the <br />
        <span>Main Menu!</span>
      </h2>
      <img src="src/img/speechBubbleRight.png" alt="Bubble" />
    </div>
    <div className="please-choose">
      <h3>
        Please choose what <br />
        you want to do
      </h3>
      <img src="src/img/speechBubbleRight.png" alt="Bubble" />
    </div>
  </section>
</body>;


interface Button {
  text: string;
  link: string;
}

const MainMenuNavigation = () => {
  const buttons2 = [
    { text: "Go Back", link: "./index1.html" },
    { text: "See participant list", link: "./index2.html" },
    { text: "Spin the wheel", link: "./index3.html" },
    { text: "Remove a person", link: "./RemovePersonPage" },
    { text: "Add a person", link: "./index3.html" },
  ];

  const renderButtons = (knapp: Button) => (
    <MainMenuNavigationButton buttontext={knapp.text} link={knapp.link} />
  );

  return (
    <>
      <div>
        <ul>{buttons2.map(renderButtons)}</ul>
      </div>
    </>
  );
};
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

export default MainMenuNavigation;
