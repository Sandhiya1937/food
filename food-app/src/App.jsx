import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Food from "./food";
import Login from "./login";
import Register from "./register"
import Dashboard from "./dashboard"

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Food is the Home Page */}
        <Route path="/" element={<Food />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
