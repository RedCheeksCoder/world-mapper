import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";
import useGeolocation from "../hooks/UseGeolocation";
import Button from "./Button";
import UseURLPosition from "../hooks/UseURLPosition";

function Map() {
  const [mapPosition, setMapPosition] = useState([40, 0]);

  const { cities } = useCities();

  const {
    isLoading: isLoadingPosition,
    position: userPosition,
    getPosition,
  } = useGeolocation();

  const [mapLat, mapLng] = UseURLPosition();

  useEffect(
    function () {
      if (userPosition) setMapPosition([userPosition.lat, userPosition.lng]);
    },
    [userPosition]
  );

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );
  return (
    <div className={styles.mapContainer}>
      {!userPosition && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition ? "Loading..." : "Use your location"}
        </Button>
      )}
      <MapContainer
        center={mapPosition}
        zoom={17}
        scrollWheelZoom={true}
        className={styles.map}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}>
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
              <br />
              <span>{city.notes}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeMap position={mapPosition} />
        <ClickDetection />
      </MapContainer>
    </div>
  );
}
function ChangeMap({ position }) {
  const map = useMap();
  map.setView(position);
}

function ClickDetection() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}
export default Map;
