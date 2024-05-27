import React from "react";
import Title from "./Title";
import { FaCocktail, FaShuttleVan, FaBeer, FaCoffee } from "react-icons/fa";

function Benefit() {
  const offers = [
    {
      icon: <FaCoffee />,
      Title: "coctails",
      info: "hhahhahahhahahahhah",
    },
    {
      icon: <FaShuttleVan />,
      Title: "coctails",
      info: "hhahhahahhahahahhah",
    },
    {
      icon: <FaBeer />,
      Title: "coctails",
      info: "hhahhahahhahahahhah",
    },
    {
      icon: <FaCocktail />,
      Title: "coctails",
      info: "hhahhahahhahahahhah",
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
