import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" , fontSize: "50px" ,color : "#2b2b2b"}}>
      <h1 style={{ color : "#02274f"}}>404 - Page Not Found</h1>
      <p style={{ fontSize: "30px" , padding: "10px" , margin: "10px" }} >The page you are looking for does not exist.</p>
      <Link to="/" style={{ fontSize: "20px" , padding: "20px" , margin: "0px" , background: "#02274f" , color : "#fff"}}>Back to Home</Link>
    </div>
  );
};

export default NotFound;
