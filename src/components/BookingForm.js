import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

function BookingForm({ price, handleBooking }) {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);

  let location = useLocation();

  function checkSingle() {
    if (location.pathname.includes("single")) {
      let singleRoom = document.getElementById("kids");
      let singleRoom2 = document.getElementById("kids2");
      singleRoom.style.display = "none";
      singleRoom2.style.display = "none";
    }
  }

  useEffect(() => {
    console.log(location.pathname);
    checkSingle();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div className="booking-form">
      <h3>Book this room</h3>
      <form onSubmit={handleBooking}>
        <div className="form-group">
          <label htmlFor="check-in">Check in Date</label>
          <input
            type="date"
            id="check-in"
            className="form-control"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="check-out">Check-out Date</label>
          <input
            type="date"
            id="check-out"
            className="form-control"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="adults">Adults</label>
          <input
            type="number"
            id="adults"
            className="form-control"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label id="kids2" htmlFor="kids">
            Kids
          </label>
          <input
            type="number"
            id="kids"
            className="form-control"
            value={kids}
            onChange={(e) => setKids(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-primary">
          {" "}
          Book now for €{price}
        </button>
      </form>
    </div>
  );
}
export default BookingForm;
