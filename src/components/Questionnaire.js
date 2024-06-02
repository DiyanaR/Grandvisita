import React, { useState } from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Container,
} from "@mui/material";

const Questionnaire = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    budget: "",
    interests: "",
    travelDuration: "",
    climatePreference: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal">
          <InputLabel>Budget</InputLabel>
          <Select name="budget" value={formData.budget} onChange={handleChange}>
            <MenuItem value="low">Low</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="high">High</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Interests</InputLabel>
          <Select
            name="interests"
            value={formData.interests}
            onChange={handleChange}
          >
            <MenuItem value="beach">Beach</MenuItem>
            <MenuItem value="mountains">Mountains</MenuItem>
            <MenuItem value="city">City</MenuItem>
            <MenuItem value="nature">Nature</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Travel Duration (days)"
          name="travelDuration"
          type="number"
          value={formData.travelDuration}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Climate Preference</InputLabel>
          <Select
            name="climatePreference"
            value={formData.climatePreference}
            onChange={handleChange}
          >
            <MenuItem value="hot">Hot</MenuItem>
            <MenuItem value="cold">Cold</MenuItem>
            <MenuItem value="temperate">Temperate</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Get Recommendations
        </Button>
      </form>
    </Container>
  );
};

export default Questionnaire;
