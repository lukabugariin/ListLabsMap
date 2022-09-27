import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import useSwr from "swr";
import Map from "./components/Map";
import Table from "./components/Table";
import Header from "./components/Header";
import { Container } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Map />}></Route>
        </Routes>
        <Routes>
          <Route path="/table" element={<Table />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
