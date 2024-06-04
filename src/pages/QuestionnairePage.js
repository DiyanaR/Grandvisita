import React, { useState } from "react";
import Questionnaire from "../components/Questionnaire";
import Recommendations from "../components/Recommendations";
import getRecommendations from "../utils/getRecommendations";

const QuestionnairePage = () => {
  const [recommendations, setRecommendations] = useState([]);

  const handleFormSubmit = (formData) => {
    console.log("Form data:", formData);
    const recs = getRecommendations(formData);
    console.log("Recommendations in handleFormSubmit:", recs);
    setRecommendations(recs);
  };

  console.log("Recommendations in QuestionnairePage:", recommendations);

  return (
    <div>
      {recommendations.length === 0 ? (
        <Questionnaire onSubmit={handleFormSubmit} />
      ) : (
        <Recommendations recommendations={recommendations} />
      )}
    </div>
  );
};

export default QuestionnairePage;
