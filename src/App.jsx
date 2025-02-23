import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Course from "./pages/Course";
import Assignment from "./pages/Assignment";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound"; 
 

function App() {
  return (
 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/course" element={<Course />} />
          <Route path="/outline" element={<Course />} />
          <Route path="/assignment" element={<Assignment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login/lecturer" element={<Login  />} />
          <Route path="/login/student" element={<Login />} />
  
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
 
  );
}

export default App;
