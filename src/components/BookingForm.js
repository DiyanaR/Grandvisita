// import React, { useState } from "react";

// function BookingForm({ price, handleBooking, room }) {
//   const [checkInDate, setCheckInDate] = useState("");
//   const [checkOutDate, setCheckOutDate] = useState("");
//   const [adults, setAdults] = useState(1);
//   const [kids, setKids] = useState(0);
//   const [showModal, setShowModal] = useState(false);

//   console.log("Room object", room);

//   const showKidsInput = room && room.capacity > 1;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Anropa handleBooking-funktionen här om all validering är klar
//     // Visar modalen när bokningen lyckas
//     setShowModal(true);
//   };

//   return (
//     <div className="booking-form">
//       <h3>Book this room</h3>
//       <form onSubmit={handleBooking}>
//         <div className="form-group">
//           <label htmlFor="check-in">Check in Date</label>
//           <input
//             type="date"
//             id="check-in"
//             className="form-control"
//             value={checkInDate}
//             onChange={(e) => setCheckInDate(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="check-out">Check-out Date</label>
//           <input
//             type="date"
//             id="check-out"
//             className="form-control"
//             value={checkOutDate}
//             onChange={(e) => setCheckOutDate(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="adults">Adults</label>
//           <input
//             type="number"
//             id="adults"
//             className="form-control"
//             value={adults}
//             onChange={(e) => setAdults(e.target.value)}
//             required
//           />
//         </div>
//         {showKidsInput && (
//           <div className="form-group">
//             <label id="kids2" htmlFor="kids">
//               Kids
//             </label>
//             <input
//               type="number"
//               id="kids"
//               className="form-control"
//               value={kids}
//               onChange={(e) => setKids(e.target.value)}
//               required
//             />
//           </div>
//         )}

//         <button type="submit" className="btn-primary">
//           {" "}
//           Book now for €{price}
//         </button>
//       </form>
//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={() => setShowModal(false)}>
//               &times;
//             </span>
//             <p>Your booking is successful!</p>
//             {/* You can add more details about the booking here */}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// export default BookingForm;
import React, { useState } from "react";
import Swal from "sweetalert2";

function BookingForm({ price, handleBooking, room }) {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);
  const [showModal, setShowModal] = useState(false);

  console.log("Room object", room);

  const showKidsInput = room && room.capacity > 1;

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "success",
      title: "Your booking is successful!",
      showConfirmButton: false,
      timer: 5000, // Visa modalen i 5 sekunder
    });

    setShowModal(true);
  };

  return (
    <div className="booking-form">
      <h3>Book this room</h3>
      <form onSubmit={handleSubmit}>
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
        {showKidsInput && (
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
        )}

        <button type="submit" className="btn-primary">
          {" "}
          Book now for €{price}
        </button>
      </form>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <p>Your booking is successful!</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default BookingForm;
