import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Course from "./pages/Course";
import Assignment from "./pages/Assignment";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound"; // Import 404 page
import { UserProvider } from "./UserContext";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/course" element={<Course />} />
          <Route path="/outline" element={<Course />} />
          <Route path="/assignment" element={<Assignment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login/lecturer" element={<Login val={true} />} />
          <Route path="/login/student" element={<Login val={false} />} />
          {/* Catch-all route for 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
