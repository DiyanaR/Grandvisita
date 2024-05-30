import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RoomContext } from "../RoomProvider";
import { FaWifi, FaUtensils, FaTv } from "react-icons/fa";
import BookingForm from "../components/BookingForm";
import Review from "../components/Review";

function SingleRoom() {
  const { slug } = useParams();
  const { rooms } = useContext(RoomContext);

  const room = rooms.find((room) => room.id === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!room) {
    return <h3>No such room could be found...</h3>;
  }

  const { name, description, capacity, size, price, pets, breakfast, images } =
    room;

  console.log(images);

  const handleBooking = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${name}. Total cost: $${price}`);
  };

  return (
    <section className="single-room">
      <div className="single-room-content">
        <div className="single-room-images">
          <img src={`/${images[0]}`} alt={name} />

          <BookingForm
            price={price}
            handleBooking={handleBooking}
            room={room}
          />
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>Details</h3>
            <p>{description}</p>
            <div className="benefit">
              <span className="icon">
                <FaWifi title="WiFi included" />
              </span>
              <span className="icon">
                <FaUtensils title="Meals included" />
              </span>
              <span className="icon">
                <FaTv title="TV included" />
              </span>
            </div>
          </article>

          <article className="info">
            <h3>Info</h3>
            <h6>Price: ${price}</h6>
            <h6>Size: {size} SQFT</h6>
            <h6>
              Max Capacity:{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "Pets allowed" : "No pets allowed"}</h6>
            <h6>{breakfast && "Free breakfast included"}</h6>

            <Review />
          </article>
        </div>
      </div>
    </section>
  );
}

export default SingleRoom;
