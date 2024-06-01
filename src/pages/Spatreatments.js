import React, { useState, useEffect } from "react";
import SpaData from "../SpaData.json";

function Spatreatments() {
  const [treatments, setTreatments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setTreatments(SpaData);
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
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
        {searchTerm && searchTerm.trim() !== "" && (
          <div className="treatments-grid">
            {filteredTreatments.map((treatment) => (
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
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Spatreatments;
