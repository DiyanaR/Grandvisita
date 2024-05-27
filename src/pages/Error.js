import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banderol";
import { Link } from "react-router-dom";
function Errorpage() {
  return (
    <Hero>
      <Banner title="404" subtitle="page not found">
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
      </Banner>
    </Hero>
  );
}

export default Errorpage;
