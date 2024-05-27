// import React, { useEffect, useState } from "react";
// import roomsData from "../Rooms.json";

// function FilterForm() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [roomType, setRoomType] = useState("");
//   const [results, setResults] = useState([]);
//   const [filterError, setFilterError] = useState(false);

//   useEffect(() => {
//     setResults([]);
//   }, []);
//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleRoomTypeChange = (e) => {
//     setRoomType(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     setFilterError(false);

//     if (!searchTerm && !roomType) {
//       setFilterError(true);
//       setResults([]);
//       return;
//     }

//     console.log("searchTerm:", searchTerm);
//     console.log("roomType:", roomType);

//     const filteredRooms = roomsData.filter((room) => {
//       const cityMatched =
//         !searchTerm ||
//         room.location.city.toLowerCase().includes(searchTerm.toLowerCase());
//       const countryMatches =
//         !searchTerm ||
//         room.location.country.toLowerCase().includes(searchTerm.toLowerCase());
//       const typeMatches = !roomType || room.type === roomType;
//       return (cityMatched || countryMatches) && typeMatches;
//     });

//     console.log("filtered rooms:", filteredRooms);

//     setResults(filteredRooms);
//   };

//   return (
//     <div className="search-container">
//       <h1 className="section-title">Popular destinations</h1>
//       <form className="search-form" onSubmit={handleSearchSubmit}>
//         <select
//           className="search-input"
//           value={searchTerm}
//           onChange={handleSearchChange}
//         >
//           <option>Popular destinations</option>
//           <option value="Cyprus">Cyprus</option>
//           <option value="France">France</option>
//           <option value="Greece">Greece</option>
//           <option value="Italy">Italy</option>
//           <option value="Croatia">Croatia</option>
//           <option value="Malta">Malta</option>
//           <option value="Portugal">Portugal</option>
//           <option value="Slovakia">Slovakia</option>
//           <option value="Spain">Spain</option>
//           <option value="Germany">Germany</option>
//         </select>
//         <select
//           className="search-input"
//           value={roomType}
//           onChange={handleRoomTypeChange}
//         >
//           <option value="">Select Room Type</option>
//           <option value="Single Deluxe">Single Deluxe</option>
//           <option value="Double Deluxe">Double Deluxe</option>
//           <option value="Family Deluxe">Family Deluxe</option>
//         </select>
//         <button className="search-button" type="submit">
//           Search
//         </button>
//       </form>

//       <div className="roomslist">
//         <div className="roomslist-center">
//           {results.length > 0 ? (
//             results.map((room) => (
//               <div key={room.id}>
//                 {room.images && room.images.length > 0 && (
//                   <img src={room.images[0]} alt={room.name} />
//                 )}
//                 <p className="room-info">
//                   location: {room.location.city}, {room.location.country}
//                 </p>
//               </div>
//             ))
//           ) : (
//             <p>
//               {filterError
//                 ? "Please select search criteria"
//                 : "no results found"}
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FilterForm;
