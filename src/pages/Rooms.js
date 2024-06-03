import React, { useCallback, useEffect, useState } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banderol";
import Select from "react-select";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Link } from "react-router-dom";
import roomsData from "../Rooms.json";
import Footer from "../components/Footer";

function FilterForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [rooms, setRooms] = useState([]);
  const [maxPrice, setMaxPrice] = useState(1000);

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
      const priceMatches = room.price <= maxPrice;

      return cityMatched && countryMatches && priceMatches;
    });

    setFilteredRooms(filtered);
  }, [rooms, searchTerm, maxPrice]);

  useEffect(() => {
    filterRooms();
  }, [searchTerm, maxPrice, filterRooms]);

  const handleSearchChange = (selectedOption) => {
    setSearchTerm(selectedOption ? selectedOption.value : "");
    setSelectedLocation(selectedOption ? selectedOption.label : "");
  };

  const handlePriceChange = (value) => {
    setMaxPrice(value);
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
          <Select
            className="dropdown"
            options={[
              { label: "Popular destinations" },
              { label: "France - Paris", value: "France, Paris" },
              { label: "Greece - Athen", value: "Greece, Athen" },
              { label: "Italy - Rome", value: "Italy, Rome" },
              { label: "Switzerland - Lucerne", value: "Switzerland, Lucerne" },
              { label: "Maldives - Male", value: "Maldives, Male" },
              { label: "Nepal - Pokhara", value: "Nepal, Pokhara" },
              { label: "Thailand - Phuket", value: "Thailand, Phuket" },
              { label: "Spain - Marbella", value: "Spain, Marbella" },
              { label: "Canada - Whistler", value: "Canada, Whistler" },
            ]}
            value={
              selectedLocation
                ? { label: selectedLocation, value: searchTerm }
                : null
            }
            onChange={handleSearchChange}
            placeholder="Popular destinations"
          />

          <div className="price-filter">
            <label>Max price per night: ${maxPrice}</label>
            <Slider
              min={0}
              max={1000}
              step={10}
              value={maxPrice}
              onChange={handlePriceChange}
            />
          </div>
        </form>

        <p className="selected-location"> {selectedLocation}</p>

        <section className="roomslist">
          <div className="roomslist-center">
            {console.log("Filtered Rooms:", filteredRooms)}
            {filteredRooms.length > 0 || searchTerm ? (
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
      <Footer />
    </>
  );
}

export default FilterForm;
