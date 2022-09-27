import React from "react";
import {
  MapContainer,
  TileLayer,
  ZoomControl,
  Marker,
  Popup,
  LayersControl,
  LayerGroup,
} from "react-leaflet";
import L from "leaflet";
import useSwr from "swr";
import Header from "./Header";
import { Container } from "@mui/material";

import "./Map.css";
const fetcher = (...args) => fetch(...args).then((response) => response.json());

function Map() {
  const url = "https://plovput.li-st.net/getObjekti/";

  const { data, error } = useSwr(url, { fetcher });

  const features = data && !error ? data.features.slice(0, 100) : [];

  const icon = new L.Icon({
    iconUrl: require("./location.png"),
    iconSize: [35, 35],
  });

  return (
    <Container>
      <Header />
      <div className="map">
        <MapContainer
          center={[44.4738, 16.5]}
          zoom={6}
          minZoom={6}
          maxZoom={20}
          zoomControl={false}
          dragging={false}
          touchZoom={false}
          doubleClickZoom={false}
          scrollWheelZoom={false}
          boxZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <LayersControl position="bottomright">
            <LayersControl.Overlay checked name="On/Off">
              <LayerGroup>
                {features.map((feature) => (
                  <Marker
                    icon={icon}
                    key={feature.id}
                    position={[
                      feature.geometry.coordinates[1],
                      feature.geometry.coordinates[0],
                    ]}
                  >
                    <Popup
                      key={feature.id}
                      position={[
                        feature.geometry.coordinates[1],
                        feature.geometry.coordinates[0],
                      ]}
                    >
                      {feature.properties.naziv_objekta}
                      {feature.properties.ps_br}
                      {feature.properties.e_br}
                      {feature.properties.tip_objekta}
                      {feature.properties.lucka_kapetanija}
                    </Popup>
                  </Marker>
                ))}
              </LayerGroup>
            </LayersControl.Overlay>
          </LayersControl>

          <ZoomControl position="bottomright" />
        </MapContainer>
      </div>
    </Container>
  );
}

export default Map;
