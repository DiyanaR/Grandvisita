const getRecommendations = (formData) => {
  const { budget, interests, climatePreference } = formData;
  const recommendations = [];

  if (interests === "beach") {
    if (climatePreference === "hot") {
      if (budget === "low") {
        recommendations.push({
          country: "Thailand",
          hotel: "Phuket Beach Resort",
        });
        recommendations.push({
          country: "Spain",
          city: "Marbella",
          hotel: "City Center Hotel",
        });
      } else if (budget === "medium") {
        recommendations.push({
          country: "Spain",
          city: "Marbella",
          hotel: "Coastal Resort",
        });
      } else if (budget === "high") {
        recommendations.push({
          country: "Maldives",
          hotel: "Luxury Island Resort",
        });
      }
    } else {
      //generel
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
      // generel
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
      );
    }
  }

  if (interests === "city") {
    if (climatePreference === "warm") {
      if (budget === "low") {
        recommendations.push({
          country: "Spain",
          city: "Marbella",
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
      // generel
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
      );
    }
  }

  if (climatePreference === "warm") {
    recommendations.push({
      country: "Greece",
      city: "Athens",
      hotel: "Athenian Riviera Hotel",
    });
  }

  if (climatePreference === "warm") {
    recommendations.push({
      country: "Spain",
      city: "Marbella",
      hotel: "Beachfront Resort",
    });
  }

  return recommendations;
};

export default getRecommendations;
