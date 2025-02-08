import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error("❌ Error:", error);
      alert("Server error! Please try again.");
    }
  };

  return (
    <Container maxWidth="xl" justify-content="center">
      <Box sx={{ mt: -10, p: 7, boxShadow: 10, borderRadius: 8}}>
        <Typography variant="h4" textAlign="center">Register</Typography>
        <TextField fullWidth label="Email" margin="normal" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField fullWidth label="Password" margin="normal" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button fullWidth variant="contained" sx={{ mt: 10}} onClick={handleRegister}>Register</Button>
      </Box>
    </Container>
  );
};

export default Register;
