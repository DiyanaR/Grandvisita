import React, { useContext } from "react";
import { RoomContext } from "../RoomProvider";
import Room from "./RoomCard";

function PopularRooms() {
  const { popularRooms } = useContext(RoomContext);

  if (!popularRooms || popularRooms.length === 0) {
    return <div>No featured rooms available</div>;
  }

  return (
    <section className="popular-rooms">
      <div className="popular-rooms-center">
        {popularRooms.map((room) => (
          <Room key={room.id} room={room} />
        ))}
      </div>
    </section>
  );
}

export default PopularRooms;
