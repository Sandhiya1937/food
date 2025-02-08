import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard";
import CourseDetails from "./courseDetails";
import Login from "./login";
import Register from "./register";
import { Container, Button } from "@mui/material";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/course/:courseName" element={<CourseDetails />} />
      </Routes>
    </Router>
  );
}

// Component for toggling between Login and Register
const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Container>
      {showLogin ? <Login /> : <Register />}
      <Button fullWidth sx={{ mt: 2 }} onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? "Go to Register" : "Go to Login"}
      </Button>
    </Container>
  );
};
