import React from "react";
import { Button, Typography, Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Food = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "fixed", // Ensures it covers the full screen
        top: 0,
        left: 0,
        width: "100vw", // Full width
        height: "100vh", // Full height
        backgroundImage: `url('https://cdn.photoroom.com/v2/image-cache?path=gs://background-7ef44.appspot.com/backgrounds_v3/christmas/05_-_christmas.jpg')`, // Background Image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Top-Right Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 2,
          width: "100%",
          position: "absolute",
          top: 20,
          right: 20,
        }}
      >
        <Button variant="contained" color="primary" onClick={() => navigate("/login")}>Login</Button>
        <Button variant="contained" color="secondary" onClick={() => navigate("/register")}>Register</Button>
        <Button variant="contained" color="success" onClick={() => navigate("/food-choice")}>Food Choice</Button>
        <Button variant="contained" color="error" onClick={() => navigate("/cart")}>Cart</Button>
      </Box>

      {/* Centered Welcome Message with Background Blur Effect */}
      <Box
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
          backdropFilter: "blur(10px)", // Blur effect
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <Typography variant="h3">Welcome to Food App</Typography>
      </Box>
    </Box>
  );
};

export default Food;
