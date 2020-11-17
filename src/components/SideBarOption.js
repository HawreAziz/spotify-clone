import React from "react";
import "./SideBarOption.css";

function SideBarOption({ option, Icon, keyProp }) {
  return (
    <div className="sidebaroption">
      {Icon && <Icon className="sidebaroption__icon" />}
      {Icon ? <h2>{option}</h2> : <p>{option}</p>}
    </div>
  );
}

export default SideBarOption;
