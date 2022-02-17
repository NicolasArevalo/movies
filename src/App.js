import React, { Suspense, useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Home } from "./components/Home/Home";
import { Loading } from "./components/Loading/Loading";

import PrivateRoute from "./PrivateRoute";

import "./global.scss";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Suspense fallback={Loading}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<PrivateRoute />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
