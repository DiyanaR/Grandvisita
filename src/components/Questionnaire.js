// import React, { useState } from "react";
// import {
//   Button,
//   TextField,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Container,
//   Typography,
//   FormHelperText,
// } from "@mui/material";
// import VideoBackground from "./VideoBackground";

// const Questionnaire = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     budget: "",
//     interests: "",
//     travelDuration: "",
//     climatePreference: "",
//   });

//   const [errors, setErrors] = useState({
//     budget: false,
//     interests: false,
//     travelDuration: false,
//     climatePreference: false,
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });

//     setErrors({
//       ...errors,
//       [e.target.name]: false,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newErrors = {
//       budget: formData.budget === "",
//       interests: formData.interests === "",
//       travelDuration: formData.travelDuration === "",
//       climatePreference: formData.climatePreference === "",
//     };

//     setErrors(newErrors);

//     const hasErrors = Object.values(newErrors).some((error) => error);

//     if (!hasErrors) {
//       onSubmit(formData);
//     }
//   };

//   return (
//     <>
//       <VideoBackground />
//       <Container
//         maxWidth="sm"
//         sx={{
//           paddingTop: "80px",
//           paddingBottom: "100px",
//           backgroundColor: "rgba(255, 255, 255, 0.8)",
//           borderRadius: "10px",
//         }}
//       >
//         <Typography variant="h4" gutterBottom align="center">
//           Travel Planner
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <FormControl
//             fullWidth
//             margin="normal"
//             error={errors.budget}
//             sx={{
//               "& .MuiInputLabel-root": { color: "black" },
//               "& .MuiInputBase-input": { backgroundColor: "white" },
//               "& .MuiSelect-select": { backgroundColor: "white" },
//             }}
//           >
//             <InputLabel>Budget</InputLabel>
//             <Select
//               name="budget"
//               value={formData.budget}
//               onChange={handleChange}
//             >
//               <MenuItem value="low">Low</MenuItem>
//               <MenuItem value="medium">Medium</MenuItem>
//               <MenuItem value="high">High</MenuItem>
//             </Select>
//             {errors.budget && (
//               <FormHelperText>Please select a budget</FormHelperText>
//             )}
//           </FormControl>
//           <FormControl fullWidth margin="normal" error={errors.interests}>
//             <InputLabel>Interests</InputLabel>
//             <Select
//               name="interests"
//               value={formData.interests}
//               onChange={handleChange}
//             >
//               <MenuItem value="beach">Beach</MenuItem>
//               <MenuItem value="mountains">Mountains</MenuItem>
//               <MenuItem value="city">City</MenuItem>
//               <MenuItem value="nature">Nature</MenuItem>
//             </Select>
//             {errors.interests && (
//               <FormHelperText>Please select an interest</FormHelperText>
//             )}
//           </FormControl>
//           <TextField
//             label="Travel Duration (days)"
//             name="travelDuration"
//             type="number"
//             value={formData.travelDuration}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             error={errors.travelDuration}
//             helperText={
//               errors.travelDuration ? "Please enter the travel duration" : ""
//             }
//           />
//           <FormControl
//             fullWidth
//             margin="normal"
//             error={errors.climatePreference}
//           >
//             <InputLabel>Climate Preference</InputLabel>
//             <Select
//               name="climatePreference"
//               value={formData.climatePreference}
//               onChange={handleChange}
//             >
//               <MenuItem value="hot">Hot</MenuItem>
//               <MenuItem value="cold">Cold</MenuItem>
//               <MenuItem value="temperate">Temperate</MenuItem>
//             </Select>
//             {errors.climatePreference && (
//               <FormHelperText>
//                 Please select a climate preference
//               </FormHelperText>
//             )}
//           </FormControl>
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             fullWidth
//             sx={{ mt: 2 }}
//             disabled={Object.values(errors).some((error) => error)}
//           >
//             Get Recommendations
//           </Button>
//         </form>
//       </Container>
//     </>
//   );
// };

// // export default Questionnaire;
// import React, { useState } from "react";
// import {
//   Button,
//   TextField,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Container,
//   Typography,
//   FormHelperText,
// } from "@mui/material";
// import VideoBackground from "./VideoBackground";

// const Questionnaire = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     budget: "",
//     interests: "",
//     travelDuration: "",
//     climatePreference: "",
//   });

//   const [errors, setErrors] = useState({
//     budget: false,
//     interests: false,
//     travelDuration: false,
//     climatePreference: false,
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });

//     setErrors({
//       ...errors,
//       [e.target.name]: false,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newErrors = {
//       budget: formData.budget === "",
//       interests: formData.interests === "",
//       travelDuration: formData.travelDuration === "",
//       climatePreference: formData.climatePreference === "",
//     };

//     setErrors(newErrors);

//     const hasErrors = Object.values(newErrors).some((error) => error);

//     if (!hasErrors) {
//       onSubmit(formData);
//     }
//   };

//   return (
//     <>
//       <VideoBackground />
//       <Container
//         maxWidth="sm"
//         sx={{
//           paddingTop: "80px",
//           paddingBottom: "100px",
//           backgroundColor: "rgba(255, 255, 255, 0.8)",
//           borderRadius: "10px",
//         }}
//       >
//         <Typography variant="h4" gutterBottom align="center">
//           Travel Planner
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <FormControl
//             fullWidth
//             margin="normal"
//             error={errors.budget}
//             sx={{
//               "& .MuiInputLabel-root": { color: "black" },
//               "& .MuiInputBase-input": { backgroundColor: "white" },
//               "& .MuiSelect-select": { backgroundColor: "white" },
//               "& .MuiOutlinedInput-root": {
//                 "& fieldset": {
//                   borderColor: "black",
//                 },
//                 "&:hover fieldset": {
//                   borderColor: "black",
//                 },
//                 "&.Mui-focused fieldset": {
//                   borderColor: "black",
//                 },
//               },
//             }}
//           >
//             <InputLabel>Budget</InputLabel>
//             <Select
//               name="budget"
//               value={formData.budget}
//               onChange={handleChange}
//             >
//               <MenuItem value="low">Low</MenuItem>
//               <MenuItem value="medium">Medium</MenuItem>
//               <MenuItem value="high">High</MenuItem>
//             </Select>
//             {errors.budget && (
//               <FormHelperText>Please select a budget</FormHelperText>
//             )}
//           </FormControl>
//           <FormControl
//             fullWidth
//             margin="normal"
//             error={errors.interests}
//             sx={{
//               "& .MuiInputLabel-root": { color: "black" },
//               "& .MuiInputBase-input": { backgroundColor: "white" },
//               "& .MuiSelect-select": { backgroundColor: "white" },
//               "& .MuiOutlinedInput-root": {
//                 "& fieldset": {
//                   borderColor: "black",
//                 },
//                 "&:hover fieldset": {
//                   borderColor: "black",
//                 },
//                 "&.Mui-focused fieldset": {
//                   borderColor: "black",
//                 },
//               },
//             }}
//           >
//             <InputLabel>Interests</InputLabel>
//             <Select
//               name="interests"
//               value={formData.interests}
//               onChange={handleChange}
//             >
//               <MenuItem value="beach">Beach</MenuItem>
//               <MenuItem value="mountains">Mountains</MenuItem>
//               <MenuItem value="city">City</MenuItem>
//               <MenuItem value="nature">Nature</MenuItem>
//             </Select>
//             {errors.interests && (
//               <FormHelperText>Please select an interest</FormHelperText>
//             )}
//           </FormControl>
//           <TextField
//             label="Travel Duration (days)"
//             name="travelDuration"
//             type="number"
//             value={formData.travelDuration}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             error={errors.travelDuration}
//             helperText={
//               errors.travelDuration ? "Please enter the travel duration" : ""
//             }
//             sx={{
//               "& .MuiInputBase-input": { backgroundColor: "white" },
//               "& .MuiOutlinedInput-root": {
//                 "& fieldset": {
//                   borderColor: "black",
//                 },
//                 "&:hover fieldset": {
//                   borderColor: "black",
//                 },
//                 "&.Mui-focused fieldset": {
//                   borderColor: "black",
//                 },
//               },
//             }}
//           />
//           <FormControl
//             fullWidth
//             margin="normal"
//             error={errors.climatePreference}
//             sx={{
//               "& .MuiInputLabel-root": { color: "black" },
//               "& .MuiInputBase-input": { backgroundColor: "white" },
//               "& .MuiSelect-select": { backgroundColor: "white" },
//               "& .MuiOutlinedInput-root": {
//                 "& fieldset": {
//                   borderColor: "black",
//                 },
//                 "&:hover fieldset": {
//                   borderColor: "black",
//                 },
//                 "&.Mui-focused fieldset": {
//                   borderColor: "black",
//                 },
//               },
//             }}
//           >
//             <InputLabel>Climate Preference</InputLabel>
//             <Select
//               name="climatePreference"
//               value={formData.climatePreference}
//               onChange={handleChange}
//             >
//               <MenuItem value="hot">Hot</MenuItem>
//               <MenuItem value="cold">Cold</MenuItem>
//               <MenuItem value="temperate">Temperate</MenuItem>
//             </Select>
//             {errors.climatePreference && (
//               <FormHelperText>
//                 Please select a climate preference
//               </FormHelperText>
//             )}
//           </FormControl>
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             fullWidth
//             sx={{ mt: 2 }}
//           >
//             Get Recommendations
//           </Button>
//         </form>
//       </Container>
//     </>
//   );
// };

// export default Questionnaire;
import React, { useState } from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Container,
  Typography,
  FormHelperText,
} from "@mui/material";
import VideoBackground from "./VideoBackground";

const Questionnaire = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    budget: "",
    interests: "",
    travelDuration: "",
    climatePreference: "",
  });

  const [errors, setErrors] = useState({
    budget: false,
    interests: false,
    travelDuration: false,
    climatePreference: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      budget: formData.budget === "",
      interests: formData.interests === "",
      travelDuration: formData.travelDuration === "",
      climatePreference: formData.climatePreference === "",
    };
    setErrors(newErrors);
    const hasErrors = Object.values(newErrors).some((error) => error);

    if (!hasErrors) {
      onSubmit(formData);
    }
  };

  return (
    <>
      <VideoBackground />
      <Container
        maxWidth="sm"
        sx={{
          paddingTop: "80px",
          paddingBottom: "100px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h4" gutterBottom align="center">
          Travel Planner
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl
            fullWidth
            margin="normal"
            error={errors.budget}
            sx={{
              "& .MuiInputLabel-root": { color: "black" },
              "& .MuiInputBase-input": { backgroundColor: "white" },
              "& .MuiSelect-select": { backgroundColor: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "black",
                },
                "&:hover fieldset": {
                  borderColor: "black",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "black",
                },
              },
            }}
          >
            <InputLabel>Budget</InputLabel>
            <Select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
            >
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </Select>
            {errors.budget && (
              <FormHelperText>Please select a budget</FormHelperText>
            )}
          </FormControl>
          <FormControl
            fullWidth
            margin="normal"
            error={errors.interests}
            sx={{
              "& .MuiInputLabel-root": { color: "black" },
              "& .MuiInputBase-input": { backgroundColor: "white" },
              "& .MuiSelect-select": { backgroundColor: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "black",
                },
                "&:hover fieldset": {
                  borderColor: "black",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "black",
                },
              },
            }}
          >
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
            {errors.interests && (
              <FormHelperText>Please select an interest</FormHelperText>
            )}
          </FormControl>
          <TextField
            label="Travel Duration (days)"
            name="travelDuration"
            type="number"
            value={formData.travelDuration}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={errors.travelDuration}
            helperText={
              errors.travelDuration ? "Please enter the travel duration" : ""
            }
            sx={{
              "& .MuiInputBase-input": { backgroundColor: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "black",
                },
                "&:hover fieldset": {
                  borderColor: "black",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "black",
                },
              },
            }}
          />
          <FormControl
            fullWidth
            margin="normal"
            error={errors.climatePreference}
            sx={{
              "& .MuiInputLabel-root": { color: "black" },
              "& .MuiInputBase-input": { backgroundColor: "white" },
              "& .MuiSelect-select": { backgroundColor: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "black",
                },
                "&:hover fieldset": {
                  borderColor: "black",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "black",
                },
              },
            }}
          >
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
            {errors.climatePreference && (
              <FormHelperText>
                Please select a climate preference
              </FormHelperText>
            )}
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: "black",
              color: "white",
              "&:hover": { backgroundColor: "brown" },
            }}
          >
            Get Recommendations
          </Button>
        </form>
      </Container>
    </>
  );
};

export default Questionnaire;
