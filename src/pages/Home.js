import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banderol";
import { Link } from "react-router-dom";
import Benefit from "../components/Benefit";
import PopularRooms from "../components/PopularRooms";

function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="luxourius rooms"
          subtitle="deluxe rooms starting at €100"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>

      <Benefit />
      <PopularRooms />
    </>
  );
}

export default Home;
