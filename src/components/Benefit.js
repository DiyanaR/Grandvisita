import React from "react";
import Title from "./Title";
import {
  FaShuttleVan,
  FaCoffee,
  FaUtensils,
  FaMapMarkedAlt,
} from "react-icons/fa";

function Benefit() {
  const offers = [
    {
      icon: <FaUtensils />,
      Title: "Breakfast",
      info: "start your day with a delicious breakfast featuring a variety of fresh options",
    },
    {
      icon: <FaCoffee />,
      Title: "Coffe",
      info: "Enjoy our coffe every morning, brewed from the finest beans.",
    },
    {
      icon: <FaShuttleVan />,
      Title: "shuttle Service",
      info: "We offer convenient trasport to and from the airport for all our guest",
    },
    {
      icon: <FaMapMarkedAlt />,
      Title: "Nearby Restaurants",
      info: (
        <>
          We have partnerships with several nearby resturants where you ca enjoy
          discounted prices.
          <a href="/resturant" target="_blank" rel="nopper noreferrer">
            Learn more and navigate to them
          </a>
        </>
      ),
    },
  ];

  return (
    <section className="benefits">
      <Title title="Our Offers" />
      <div className="benefit-center">
        {offers.map((item, index) => {
          return (
            <article key={index} className="benefit">
              <span>{item.icon}</span>
              <h4>{item.Title}</h4>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Benefit;
