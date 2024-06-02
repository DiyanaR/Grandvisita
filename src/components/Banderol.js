import React from "react";
import { Link } from "react-router-dom";

function Banderol({ children, title, subtitle }) {
  return (
    <div className="banderol">
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      <Link to="/questionnaire" className="btn-primary">
        No plans yet? Get recommendations!
      </Link>
      {/* <div>{children}</div> */}
    </div>
  );
}

export default Banderol;
