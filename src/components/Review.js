import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StarRating = () => {
  const [rating, setRating] = useState(() => {
    const storedRating = localStorage.getItem("rating");
    return storedRating ? parseInt(storedRating) : 0;
  });

  const [ratingCount, setRatingCount] = useState(() => {
    const storedRatingCount = localStorage.getItem("ratingCount");
    return storedRatingCount
      ? JSON.parse(storedRatingCount)
      : { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  });

  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  useEffect(() => {
    localStorage.setItem("rating", rating.toString());
  }, [rating]);

  useEffect(() => {
    localStorage.setItem("ratingCount", JSON.stringify(ratingCount));
  }, [ratingCount]);

  useEffect(() => {
    const storedRating = localStorage.getItem("rating");
    if (storedRating) {
      setRating(parseInt(storedRating));
    } else {
      setRating(0);
    }
  }, []);

  const handleStarClick = (value) => {
    if (!reviewSubmitted) {
      if (value === rating) {
        setRating(0);
      } else {
        setRating(value);
        setRatingCount((prevCount) => ({
          ...prevCount,
          [value]: prevCount[value] + 1,
        }));
      }
    }
  };

  const handleSubmit = () => {
    setReviewSubmitted(true);
  };

  const data = {
    labels: ["1 star", "2 stars", "3 stars", "4 stars", "5 stars"],
    datasets: [
      {
        label: "Ratings Count",
        data: [
          ratingCount[1],
          ratingCount[2],
          ratingCount[3],
          ratingCount[4],
          ratingCount[5],
        ],
        backgroundColor: [
          "#ff4d4d",
          "#ffa64d",
          "#ffff4d",
          "#b3ff4d",
          "#4dff4d",
        ],
      },
    ],
  };

  return (
    <div className="star-rating-container">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
            size="2x"
            onClick={() => handleStarClick(ratingValue)}
            className={reviewSubmitted ? "inactive" : ""}
          />
        );
      })}
      <p>Your rating is: {rating}</p>
      {!reviewSubmitted && (
        <button className="submit-button" onClick={handleSubmit}>
          Submit Review
        </button>
      )}
      <div className="rating-distribution">
        <h4>Rating distribution:</h4>
        <Bar data={data} />
      </div>
    </div>
  );
};

export default StarRating;
