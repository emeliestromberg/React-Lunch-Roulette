import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
//import "src/styles/MainMenuNavigation.css";

interface Props {
  buttontext: string;
  link: string;
}

const MainMenuNavigationButton: FunctionComponent<Props> = (props) => {
  return (
    <li>
      <div className="button button1 firstli">
        <Link to= {props.link}>{props.buttontext}</Link>
      </div>
    </li>
  );
};

export default MainMenuNavigationButton;
