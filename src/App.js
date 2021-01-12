import React, { useState } from "react";
import Login from "./Components/Login";
import DashbordPage from "./Components/DashbordPage";
import "./style.css";

export default function App() {
  return (
    <div>
      <Login />
      <DashbordPage />
    </div>
  );
}
