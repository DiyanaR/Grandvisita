// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import SpaData from "../SpaData.json";
// import Swal from "sweetalert2";

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

// function Spatreatments() {
//   const [treatments, setTreatments] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [hasBooked, setHasBooked] = useState(false);
//   const [showAllTreatments, setShowAllTreatments] = useState(true);
//   const query = useQuery();
//   const bookingNumber = query.get("bookingNumber");

//   useEffect(() => {
//     setTreatments(SpaData);
//     const bookedTreatment = localStorage.getItem(
//       `bookedTreatment-${bookingNumber}`
//     );
//     if (bookedTreatment) {
//       setHasBooked(true);
//     }
//   }, [bookingNumber]);

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//     setShowAllTreatments(false);
//   };

//   const handleBookingSubmit = (treatment) => {
//     if (!bookingNumber) {
//       alert("Booking number is missing. Please book a room first.");
//       return;
//     }

//     if (hasBooked) {
//       Swal.fire({
//         icon: "warning",
//         title: "You have already booked a treatment.",
//         text: "You can only book one treatment per room booking.",
//         showConfirmButton: true,
//       });
//       return;
//     }

//     localStorage.setItem(
//       `bookedTreatment-${bookingNumber}`,
//       JSON.stringify(treatment)
//     );
//     setHasBooked(true);

//     Swal.fire({
//       icon: "success",
//       title: "Your spa treatment booking is successful!",
//       text: `Treatment: ${treatment.name}\nBooking Number: ${bookingNumber}`,
//       showConfirmButton: true,
//     });
//   };

//   const filteredTreatments = treatments.filter((treatment) =>
//     treatment.name.toLowerCase().startsWith(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="spa-page">
//       <div className="title-spa">
//         <h2 className="title-spa">Spa Treatments</h2>
//       </div>
//       <div className="search-container">
//         <input
//           type="text"
//           className="search-input-spa"
//           placeholder="Search for a treatment..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//       </div>
//       <div className="spa-content">
//         <div className="treatments-grid">
//           {(showAllTreatments ? treatments : filteredTreatments).map(
//             (treatment) => (
//               <div key={treatment.id} className="treatment-item">
//                 <h3 className="treatment-name">{treatment.name}</h3>
//                 <p className="treatment-description">{treatment.description}</p>
//                 <p className="treatment-duration">
//                   Duration: {treatment.duration}
//                 </p>
//                 <img
//                   src={treatment.image}
//                   alt={treatment.name}
//                   className="treatment-image"
//                 />
//                 <button
//                   onClick={() => handleBookingSubmit(treatment)}
//                   className="btn-primary"
//                   disabled={hasBooked}
//                 >
//                   {hasBooked ? "Treatment Booked" : "Book Treatment"}
//                 </button>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Spatreatments;
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SpaData from "../SpaData.json";
import Swal from "sweetalert2";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Spatreatments() {
  const [treatments, setTreatments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [hasBooked, setHasBooked] = useState(false);
  const [showAllTreatments, setShowAllTreatments] = useState(true);
  const query = useQuery();
  const bookingNumber = query.get("bookingNumber");

  useEffect(() => {
    setTreatments(SpaData);
    if (bookingNumber) {
      const bookedTreatment = localStorage.getItem(
        `bookedTreatment-${bookingNumber}`
      );
      if (bookedTreatment) {
        setHasBooked(true);
      }
    }
  }, [bookingNumber]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setShowAllTreatments(false);
  };

  const handleBookingSubmit = (treatment) => {
    if (!bookingNumber) {
      Swal.fire({
        icon: "error",
        title: "Booking number is missing",
        text: "Please book a room first.",
        showConfirmButton: true,
      });
      return;
    }

    if (hasBooked) {
      Swal.fire({
        icon: "warning",
        title: "You have already booked a treatment.",
        text: "You can only book one treatment per room booking.",
        showConfirmButton: true,
      });
      return;
    }

    localStorage.setItem(
      `bookedTreatment-${bookingNumber}`,
      JSON.stringify(treatment)
    );
    setHasBooked(true);

    Swal.fire({
      icon: "success",
      title: "Your spa treatment booking is successful!",
      text: `Treatment: ${treatment.name}\nBooking Number: ${bookingNumber}`,
      showConfirmButton: true,
    });
  };

  const filteredTreatments = treatments.filter((treatment) =>
    treatment.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div className="spa-page">
      <div className="title-spa">
        <h2 className="title-spa">Spa Treatments</h2>
      </div>
      <div className="search-container">
        <input
          type="text"
          className="search-input-spa"
          placeholder="Search for a treatment..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="spa-content">
        <div className="treatments-grid">
          {(showAllTreatments ? treatments : filteredTreatments).map(
            (treatment) => (
              <div key={treatment.id} className="treatment-item">
                <h3 className="treatment-name">{treatment.name}</h3>
                <p className="treatment-description">{treatment.description}</p>
                <p className="treatment-duration">
                  Duration: {treatment.duration}
                </p>
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  className="treatment-image"
                />
                <button
                  onClick={() => handleBookingSubmit(treatment)}
                  className="btn-primary"
                  disabled={hasBooked}
                >
                  {hasBooked ? "Treatment Booked" : "Book Treatment"}
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Spatreatments;
