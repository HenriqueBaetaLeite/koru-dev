// app/iss/page.tsx
"use client";

// NECESSÁRIO EXECUTAR O COMANDO NO TERMINAL PARA INSTALAR AS DEPENDENCIAS DO MAPA:
// npm install react-leaflet leaflet


import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const issIcon = new L.Icon({
  iconUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d0/International_Space_Station.svg",
  iconSize: [50, 32],
  iconAnchor: [25, 16],
});

type ISSPosition = {
  latitude: string;
  longitude: string;
};

export default function ISSPage() {
  const [position, setPosition] = useState<ISSPosition | null>(null);

  async function fetchISSPosition() {
    try {
      const res = await fetch("http://api.open-notify.org/iss-now.json");
      const data = await res.json();
      setPosition({
        latitude: data.iss_position.latitude,
        longitude: data.iss_position.longitude,
      });
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchISSPosition();
    const interval = setInterval(fetchISSPosition, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">🌍 ISS Tracker</h1>
      <p className="text-gray-700 mb-4">
        Acompanhe a posição atual da Estação Espacial Internacional em tempo real.
      </p>

      <div className="w-full h-[500px] md:h-[600px]">
        <MapContainer
          center={[0, 0]}
          zoom={2}
          scrollWheelZoom={true}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          {position && (
            <Marker
              position={[parseFloat(position.latitude), parseFloat(position.longitude)]}
              icon={issIcon}
            >
              <Popup>
                ISS está aqui! <br />
                Latitude: {position.latitude} <br />
                Longitude: {position.longitude}
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </div>
  );
}
