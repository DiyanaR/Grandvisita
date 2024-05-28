import React, { useCallback, useEffect, useState } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banderol";
import { Link } from "react-router-dom";
import roomsData from "../Rooms.json";
import resturantData from "../Resturant.json";

function FilterForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [roomType, setRoomType] = useState("");
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    setRooms(roomsData);
    setFilteredRooms(roomsData);
  }, []);

  const filterRooms = useCallback(() => {
    const [searchCountry, searchCity] = searchTerm.includes(", ")
      ? searchTerm.split(", ")
      : [searchTerm, ""];
    const filtered = rooms.filter((room) => {
      const cityMatched =
        !searchCity ||
        room.location.city.toLowerCase().includes(searchCity.toLowerCase());
      const countryMatches =
        !searchCountry ||
        room.location.country
          .toLowerCase()
          .includes(searchCountry.toLowerCase());
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
            <option value="Cyprus, Ayia Napa">Cyprus - Ayia Napa</option>
            <option value="France, Paris">France - Paris</option>
            <option value="Greece, Athen">Greece - Athen</option>
            <option value="Italy, Rome">Italy - Rome</option>
            <option value="Croatia, Zagreb">Croatia - Zagreb </option>
            <option value="Malta, Valletta">Malta - Valletta</option>
            <option value="Portugal, Lisbon">Portugal - Lisbon</option>
            <option value="Slovakia, Poprad">Slovakia - Poprad</option>
            <option value="Spain, Marbella">Spain - Marbella</option>
            <option value="Germany, Munich">Germany - Munich</option>
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
        <section className="restaurants-list">
          <h2>Restaurants</h2>
          <div className="restaurants-list-center">
            {filteredRestaurants.length > 0 ? (
              filteredRestaurants.map((restaurant) => (
                <article key={restaurant.id} className="restaurant">
                  <Link
                    to={`/restaurants/${restaurant.id}`}
                    className="img-container"
                  >
                    <img
                      src={`/${restaurant.images[0]}`}
                      alt={restaurant.name}
                    />
                  </Link>
                  <p className="restaurant-info">{restaurant.name}</p>
                </article>
              ))
            ) : (
              <div>No restaurants available</div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default FilterForm;
