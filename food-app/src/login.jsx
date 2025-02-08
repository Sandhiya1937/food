import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.message === "Login Successful") {
        alert("✅ Login Successful!");
        navigate("/dashboard"); // Redirect to Dashboard
      } else {
        alert("❌ Invalid Credentials!");
      }
    } catch (error) {
      console.error("❌ Error:", error);
      alert("Server error! Please try again.");
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundImage: `url('https://cdn.photoroom.com/v2/image-cache?path=gs://background-7ef44.appspot.com/backgrounds_v3/christmas/05_-_christmas.jpg')`, // Background Image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Login Box */}
      <Box
        sx={{
          width: "400px",
          bgcolor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
          backdropFilter: "blur(10px)", // Glassmorphic effect
          p: 4,
          boxShadow: 3,
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h4">Login</Typography>
        <TextField fullWidth label="Email" margin="normal" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField fullWidth label="Password" margin="normal" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={handleLogin}>Login</Button>
      </Box>
    </Box>
  );
};

export default Login;
