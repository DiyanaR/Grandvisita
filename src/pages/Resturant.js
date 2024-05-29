import React from "react";

function RestaurantList({ restaurants }) {
  return (
    <section className="restaurants-list">
      <h2>Restaurants</h2>
      <div className="restaurants-list-center">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant, index) => (
            <article key={index} className="restaurant">
              <div className="img-container">
                <img src={restaurant.image} alt={restaurant.name} />
              </div>
              <div className="restaurant-info">
                <h3>{restaurant.name}</h3>
                <p>{restaurant.address}</p>
              </div>
            </article>
          ))
        ) : (
          <div>No restaurants available</div>
        )}
      </div>
    </section>
  );
}

export default RestaurantList;
