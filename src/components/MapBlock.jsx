import {
  Marker, Polyline, TileLayer, MapContainer,
} from 'react-leaflet';
import Leaflet from 'leaflet';
import './MapContainer.css';
import { useSelector } from 'react-redux';
import { Empty } from 'antd';

export const MapBlock = () => {
  const coordinates = useSelector((state) => state.routeData);

  return (
    <div>
      {coordinates.from && (
        <MapContainer
          zoom={14}
          scrollWheelZoom={false}
          bounds={
            Leaflet.latLngBounds(
              [coordinates.from.latitude, coordinates.from.longitude],
              [coordinates.to.latitude, coordinates.to.longitude],
            )
          }
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[coordinates.from.latitude, coordinates.from.longitude]} />
          <Marker position={[coordinates.to.latitude, coordinates.to.longitude]} />
          <Polyline
            color="#220bb9"
            positions={coordinates.route}
          />
        </MapContainer>
      )}
      {!coordinates.from && (
        <Empty />
      )}
    </div>
  );
};
