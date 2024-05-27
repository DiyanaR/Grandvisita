import React, { useCallback, useEffect, useState } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banderol";
import { Link } from "react-router-dom";
import roomsData from "../Rooms.json";

function FilterForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [roomType, setRoomType] = useState("");
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    setRooms(roomsData);
    setFilteredRooms(roomsData);
  }, []);

  const filterRooms = useCallback(() => {
    const filtered = rooms.filter((room) => {
      const cityMatched =
        !searchTerm ||
        room.location.city.toLowerCase().includes(searchTerm.toLowerCase());
      const countryMatches =
        !searchTerm ||
        room.location.country.toLowerCase().includes(searchTerm.toLowerCase());
      const typeMatches = !roomType || room.type === roomType;
      return (cityMatched || countryMatches) && typeMatches;
    });

    setFilteredRooms(filtered);
  }, [rooms, searchTerm, roomType]);

  useEffect(() => {
    filterRooms();
  }, [searchTerm, roomType, filterRooms]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRoomTypeChange = (e) => {
    setRoomType(e.target.value);
  };

  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Search Rooms">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>

      <div className="search-container">
        <h1 className="section-title">Our Most Popular Destinations</h1>
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <select
            className="dropdown"
            value={searchTerm}
            onChange={handleSearchChange}
          >
            <option>Popular destinations</option>
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
          <select
            className="search-input"
            value={roomType}
            onChange={handleRoomTypeChange}
          >
            <option value="">Select Room Type</option>
            <option value="Single Deluxe">Single Deluxe</option>
            <option value="Double Deluxe">Double Deluxe</option>
            <option value="Family Deluxe">Family Deluxe</option>
          </select>
        </form>

        <section className="roomslist">
          <div className="roomslist-center">
            {filteredRooms.length > 0 || searchTerm || roomType ? (
              filteredRooms.map((room) => (
                <article key={room.id} className="room">
                  <Link to={`/rooms/${room.id}`} className="img-container">
                    <img src={`/${room.images[0]}`} alt={room.name} />

                    <div className="pricetop-list">
                      <h5>${room.price}</h5>
                      <p>per night</p>
                    </div>
                  </Link>
                  <p className="room-info">{room.name}</p>
                </article>
              ))
            ) : (
              <div>No rooms available</div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default FilterForm;