import React, { FunctionComponent } from "react";
//import "src/styles/SpinTheWheelPage.css";

interface Props {
  buttontext: string;
  link: string;
}

const MainMenuNavigationButton: FunctionComponent<Props> = (props) => {
  return (
    <li>
      <div className="button button1 playbutton">
        <a href={props.link}>{props.buttontext}</a>
      </div>
    </li>
  );
};

export default MainMenuNavigationButton;
