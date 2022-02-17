import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Home } from "./components/Home/Home";

const PrivateRoute = () => {
  const userDetails = localStorage.getItem("userDetails");
  var isAuthenticated;

  function isLogged() {
    if (userDetails) {
        isAuthenticated = true;
    } else {
      alert('You must be loged in to see the home.')
        isAuthenticated = false;
    }
  
  }
  
  isLogged()

  return isAuthenticated ?  <Home /> : <Navigate to="/login" /> ;
};

export default PrivateRoute;
