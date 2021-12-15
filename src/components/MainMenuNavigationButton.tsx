import React, { FunctionComponent } from "react";
import "../styles/MainMenuNavigationButton.css";

interface Props {
  buttontext: string;
  link: string;
}

const MainMenuNavigationButton: FunctionComponent<Props> = (props) => {
  return (
    <li>
      <div className="button button1 firstli">
        <a href={props.link}>{props.buttontext}</a>
      </div>
    </li>
  );
};

export default MainMenuNavigationButton;
