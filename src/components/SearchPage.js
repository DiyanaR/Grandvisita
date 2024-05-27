// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function SearchPage() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     navigate(`/search-results?query=${searchTerm}`);
//   };

//   return (
//     <div className="search-container">
//       <h1 className="section-title">SearchPage</h1>
//       <form className="search-form" onSubmit={handleSearchSubmit}>
//         <input
//           className="search-input"
//           type="text"
//           placeholder="Sök efter rum..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//         <button className="search-button" type="submit">
//           Search
//         </button>
//       </form>
//     </div>
//   );
// }

// export default SearchPage;
//------------------------------
// import React, { useState, useEffect } from "react";
// import roomsData from "../Rooms.json";

// function SearchPage() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [results, setResults] = useState([]);

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     const filteredRooms = roomsData.filter(
//       (room) =>
//         room.location?.city?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         room.location?.country?.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setResults(filteredRooms);
//   };

//   return (
//     <div className="search-container">
//       <h1 className="section-title">SearchPage</h1>
//       <form className="search-form" onSubmit={handleSearchSubmit}>
//         <select
//           className="search-input"
//           placeholder="Sök efter rum..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//         >
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
//         <button className="search-button" type="submit">
//           Search
//         </button>
//       </form>

//       <div className="roomslist">
//         <div className="roomslist-center">
//           {results.length > 0
//             ? results.map((room) => (
//                 <div key={room.id} className="result-item">
//                   <h2>{room.name}</h2>
//                   <p>{room.description}</p>

//                   <div className="img-container">
//                     {room.images && room.images.length > 0 && (
//                       <img src={room.images[0]} alt={room.name} />
//                     )}
//                     <p className="room-info">
//                       Location: {room.location.city}, {room.location.country}
//                     </p>
//                   </div>
//                 </div>
//               ))
//             : null}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SearchPage;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function SearchPage() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     navigate(`/search-results?query=${searchTerm}`);
//   };

//   return (
//     <div className="search-container">
//       <h1 className="section-title">SearchPage</h1>
//       <form className="search-form" onSubmit={handleSearchSubmit}>
//         <input
//           className="search-input"
//           type="text"
//           placeholder="Sök efter rum..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//         <button className="search-button" type="submit">
//           Search
//         </button>
//       </form>
//     </div>
//   );
// }

// export default SearchPage;
//------------------------------
import React, { useState } from "react";
import roomsData from "../Rooms.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const filteredRooms = roomsData.filter(
      (room) =>
        room.location?.city?.toLowerCase() === searchTerm.toLowerCase() ||
        room.location?.country?.toLowerCase() === searchTerm.toLowerCase()
    );

    setResults(filteredRooms);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="search-container">
      <h1 className="section-title">SearchPage</h1>
      <form className="search-form" onSubmit={handleSearchSubmit}>
        <select
          className="search-input"
          placeholder="Sök efter rum..."
          value={searchTerm}
          onChange={handleSearchChange}
        >
          <option value="Cyprus">Cyprus</option>
          <option value="France">France</option>
          <option value="Greece">Greece</option>
          <option value="Italy">Italy</option>
          <option value="Croatia">Croatia</option>
          <option value="Malta">Malta</option>
          <option value="Portugal">Portugal</option>
          <option value="Slovakia">Slovakia</option>
          <option value="Spain">Spain</option>
          <option value="Germany">Germany</option>
        </select>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      <div className="roomslist">
        <div className="roomslist-center">
          {results.length > 0
            ? results.map((room) => (
                // <div key={room.id} className="result-item">
                //   <h2>{room.name}</h2>
                //   <p>{room.description}</p>
                <Slider {...settings}>
                  {room.images &&
                    room.images.length > 0 &&
                    room.images.map((image, index) => (
                      <div key={index} className="img-container">
                        <img src={image} alt={room.name} />
                        <p className="room-info">
                          Location: {room.location.city},{" "}
                          {room.location.country}
                        </p>
                      </div>
                    ))}
                </Slider>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
