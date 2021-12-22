import React from "react";

const BackgroundImage: React.FunctionComponent<{image: string}> = (props) => {

return (
<>
<div style={{backgroundImage: `url(${props.image})`, width: "100vw", height: "100vh"}}>
  {props.children}
</div>
</>
);
};

export default BackgroundImage;