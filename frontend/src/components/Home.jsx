import React from "react";
import { Typography, Container } from "@mui/material";

const Home = () => {
  return (
    <Container style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Food Saver!
      </Typography>
      <Typography variant="body1">
        Our platform connects food donors with collection teams to ensure no food goes to waste.
      </Typography>
    </Container>
  );
};

export default Home;
