import React, { useEffect, useState } from "react";
import WelcomePageBackground from "../img/WelcomePageBackground.png";
import SeeListBackground from "../img/SeeListBackground.png";
import SpinTheWheelBackground from "../img/SpinTheWheelBackground.png";
import RemovePersonBackground from "../img/RemovePersonBackground.png";
import AddPersonBackground from "../img/AddPersonBackground.png";

const BackgroundImage = () => {
const [backgroundImage, setBackgroundImage] = useState(WelcomePageBackground)

useEffect(() => {
if(window.location.pathname.includes("/Welcome")){
    setBackgroundImage(WelcomePageBackground)
}
if(window.location.pathname.includes("/SeeList")) {
  setBackgroundImage(SeeListBackground);
}
if(window.location.pathname.includes("/SpinTheWheel")) {
  setBackgroundImage(SpinTheWheelBackground);
}
if (window.location.pathname.includes("/RemovePerson")) {
  setBackgroundImage(RemovePersonBackground);
}
if (window.location.pathname.includes("/AddPerson")) {
  setBackgroundImage(AddPersonBackground);
}
},[window.location.pathname])

return (
<>
<div className="app" style={{backgroundImage: backgroundImage}}></div>
</>
);
};

export default BackgroundImage;