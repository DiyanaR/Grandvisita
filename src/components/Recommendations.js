import React from "react";
import { Container, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Recommendations = ({ recommendations }) => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Your Travel Recommendations
      </Typography>
      {recommendations.map((rec, index) => (
        <Paper key={index} style={{ padding: 16, marginBottom: 16 }}>
          <Link to={`/rooms/${rec.country}`} style={{ textDecoration: "none" }}>
            <Typography variant="h6">{rec.country}</Typography>
            <Typography>Recommended Hotel: {rec.hotel}</Typography>
            <img
              src={rec.image}
              alt={rec.country}
              style={{ maxWidth: "100%" }}
            />
          </Link>
        </Paper>
      ))}
    </Container>
  );
};

export default Recommendations;
