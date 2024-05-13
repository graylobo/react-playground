// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/auth/LoginForm";
import ProtectedPage from "./components/auth/ProtectedPage";
import ResetPassword from "./components/auth/ResetPassword";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/protected" element={<ProtectedPage />} />
        <Route path="/passwordReset" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
