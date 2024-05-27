import React from "react";

function Banderol({ children, title, subtitle }) {
  return (
    <div className="banderol">
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
}

export default Banderol;
