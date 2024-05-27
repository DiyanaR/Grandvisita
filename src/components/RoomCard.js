import React from "react";
import { Link } from "react-router-dom";

function RoomCard({ room }) {
  if (!room) return null;

  const { name, id, images, price } = room;

  return (
    <article className="room">
      <Link to={`/rooms/${id}`} className="img-container">
        <img src={`/${images[0]}`} alt={name} />
        <div className="pricetop-list">
          <h5>${price}</h5>
          <p>per night</p>
        </div>
      </Link>
      <p className="room-info">{name}</p>
    </article>
  );
}

export default RoomCard;
