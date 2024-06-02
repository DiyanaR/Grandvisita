// import React from "react";
// import { Container, Paper, Typography } from "@mui/material";
// import { Link } from "react-router-dom";

// const Recommendations = ({ recommendations }) => {
//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Your Travel Recommendations
//       </Typography>
//       {recommendations.map((rec, index) => (
//         <Paper key={index} style={{ padding: 16, marginBottom: 16 }}>
//           <Link to="/rooms" style={{ textDecoration: "none" }}>
//             <Typography variant="h6">{rec.country}</Typography>
//             {rec.city && <Typography>City: {rec.city}</Typography>}
//             <Typography>Recommended Hotel: {rec.hotel}</Typography>
//           </Link>
//         </Paper>
//       ))}
//     </Container>
//   );
// };

// export default Recommendations;
import React from "react";
import { Container, Paper, Typography, Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Recommendations = ({ recommendations }) => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Your Travel Recommendations
        </Typography>
        <Grid container spacing={2}>
          {recommendations.map((rec, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper style={{ padding: 16, marginBottom: 16 }}>
                <Link
                  to="/rooms"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography variant="h6">{rec.country}</Typography>
                  {rec.city && <Typography>City: {rec.city}</Typography>}
                  <Typography>Recommended Hotel: {rec.hotel}</Typography>
                </Link>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Recommendations;
