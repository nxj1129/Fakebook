import React from "react";
import "./css/CustomRow.css";

function CustomRow({ Icon }) {
  return <div className="customRow">{Icon && <Icon />}</div>;
}

export default CustomRow;
