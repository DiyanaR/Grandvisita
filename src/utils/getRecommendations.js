const getRecommendations = (formData) => {
  console.log("Form data in getRecommendations:", formData);
  const { budget, interests, travelDuration, climatePreference } = formData;

  const recommendations = [];

  console.log("Interests:", interests);
  console.log("Climate Preference:", climatePreference);
  console.log("Budget:", budget);
  console.log("Travel Duration:", travelDuration);

  if (interests === "beach") {
    if (climatePreference === "hot") {
      if (budget === "low") {
        recommendations.push({
          country: "Thailand",
          hotel: "Phuket Beach Resort",
        });
      } else if (budget === "high") {
        recommendations.push({
          country: "Maldives",
          hotel: "Luxury Island Resort",
        });
      }
    } else {
      // If climate preference is not specified, provide general beach recommendations
      recommendations.push(
        {
          country: "Thailand",
          hotel: "Phuket Beach Resort",
        },
        {
          country: "Maldives",
          hotel: "Luxury Island Resort",
        },
        {
          country: "Spain",
          hotel: "Costa del Sol Beach Hotel",
        }
      );
    }
  }

  if (interests === "mountains") {
    if (climatePreference === "cold") {
      if (budget === "low") {
        recommendations.push({
          country: "Nepal",
          hotel: "Budget Mountain Lodge",
        });
      } else if (budget === "high") {
        recommendations.push({
          country: "Switzerland",
          hotel: "Alpine Lodge",
        });
      }
    } else {
      // If climate preference is not specified, provide general mountains recommendations
      recommendations.push(
        {
          country: "Nepal",
          hotel: "Budget Mountain Lodge",
        },
        {
          country: "Switzerland",
          hotel: "Alpine Lodge",
        },
        {
          country: "Canada",
          hotel: "Rocky Mountain Retreat",
        }
        // Add more general mountains recommendations here
      );
    }
  }

  // City recommendations
  if (interests === "city") {
    if (climatePreference === "warm") {
      if (budget === "low") {
        recommendations.push({
          country: "Spain",
          city: "Barcelona",
          hotel: "City Center Hotel",
        });
      } else if (budget === "high") {
        recommendations.push({
          country: "Italy",
          city: "Rome",
          hotel: "Luxury Downtown Hotel",
        });
      }
    } else {
      // If climate preference is not specified, provide general city recommendations
      recommendations.push(
        {
          country: "Spain",
          city: "Barcelona",
          hotel: "City Center Hotel",
        },
        {
          country: "Italy",
          city: "Rome",
          hotel: "Luxury Downtown Hotel",
        },
        {
          country: "France",
          city: "Paris",
          hotel: "City Boutique Hotel",
        }
        // Add more general city recommendations here
      );
    }
  }

  // Add more recommendations for other interests and preferences

  return recommendations;
};

export default getRecommendations;
