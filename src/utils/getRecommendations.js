const getRecommendations = (formData) => {
  const { budget, interests, climatePreference } = formData;
  const recommendations = [];

  if (interests === "beach") {
    if (climatePreference === "hot") {
      if (budget === "low") {
        recommendations.push({
          country: "Thailand",
          city: "Phuket",
          hotel: "Phuket Beach Resort",
          image: "/Recomend-images/pukhet.png",
        });
        recommendations.push({
          country: "Spain",
          city: "Marbella",
          hotel: "City Center Hotel",
          image: "/Recomend-images/marbellahotel.png",
        });
      } else if (budget === "medium") {
        recommendations.push({
          country: "Spain",
          city: "Marbella",
          hotel: "Coastal Resort",
          image: "/Recomend-images/marbellaresort.png",
        });
      } else if (budget === "high") {
        recommendations.push({
          country: "Maldives",
          hotel: "Luxury Island Resort",
          image: "/Recomend-images/maldivesresort.png",
        });
      }
    } else {
      //generel
      recommendations.push(
        {
          country: "Thailand",
          hotel: "Phuket Beach Resort",
          image: "/Recomend-images/",
        },
        {
          country: "Maldives",
          hotel: "Luxury Island Resort",
          image: "/Recomend-images/maldives_luxury_island_resort.jpg",
        },
        {
          country: "Spain",
          hotel: "Costa del Sol Beach Hotel",
          image: "/Recomend-images/spain_costa_del_sol_beach_hotel.jpg",
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
          image: "/Recomend-images/nepalbudget.png",
        });
      } else if (budget === "high") {
        recommendations.push({
          country: "Switzerland",
          hotel: "Alpine Lodge",
          image: "/Recomend-images/SwissAlpine.png",
        });
      }
    } else {
      // generel
      recommendations.push(
        {
          country: "Nepal",
          hotel: "Budget Mountain Lodge",
          image: "/Recomend-images/nepal_budget_mountain_lodge.jpg",
        },
        {
          country: "Switzerland",
          hotel: "Alpine Lodge",
          image: "/Recomend-images/switzerland_alpine_lodge.jpg",
        },
        {
          country: "Canada",
          hotel: "Rocky Mountain Retreat",
          image: "/Recomend-images/canada_rocky_mountain_retreat.jpg",
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
          image: "/Recomend-images/canada.png",
        });
      } else if (budget === "high") {
        recommendations.push({
          country: "Italy",
          city: "Rome",
          hotel: "Luxury Downtown Hotel",
          image: "/Recomend-images/italy.png",
        });
      }
    } else {
      // generel
      recommendations.push(
        {
          country: "Spain",
          city: "Barcelona",
          hotel: "City Center Hotel",
          image: "/Recomend-images/barcelona.png",
        },
        {
          country: "Italy",
          city: "Rome",
          hotel: "Luxury Downtown Hotel",
          image: "/Recomend-images/canada_rocky_mountain_retreat.jpg",
        },
        {
          country: "France",
          city: "Paris",
          hotel: "City Boutique Hotel",
          image: "/Recomend-images/paris.png",
        }
      );
    }
  }

  if (climatePreference === "warm") {
    recommendations.push({
      country: "Greece",
      city: "Athens",
      hotel: "Athenian Riviera Hotel",
      image: "/Recomend-images/greece.png",
    });
  }

  if (climatePreference === "warm") {
    recommendations.push({
      country: "Spain",
      city: "Marbella",
      hotel: "Beachfront Resort",
      image: "/Recomend-images/marbellabeachfont",
    });
  }

  return recommendations;
};

export default getRecommendations;
