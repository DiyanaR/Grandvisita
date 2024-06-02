import React from "react";
import Title from "./Title";
import { FaShuttleVan, FaMap, FaRegGem, FaSpa } from "react-icons/fa";

function Benefit() {
  const offers = [
    {
      icon: <FaRegGem />,
      Title: "Luxury",
      info: "Commence your day in the lap of luxury with an exclusive morning offering.",
    },

    {
      icon: <FaMap />,
      Title: "Travel Planner",
      info: "Plan your trips with ease and discover new destinations.",
    },
    {
      icon: <FaShuttleVan />,
      Title: "shuttle Service",
      info: "We offer convenient trasport to and from the airport for all our guest",
    },
    {
      icon: <FaSpa />,
      Title: "Spa Treatments",
      info: (
        <>
          If you book one of our luxurious rooms, you will always get to choose
          a complimentary spa treatment.
          <a href="/spatreatments" target="_blank" rel="noreferrer">
            Learn more and book your spa
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
