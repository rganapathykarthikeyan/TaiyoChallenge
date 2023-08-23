import React from 'react';
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import classes from './LeafletMap.module.css'
import {ShowData} from '../util/ShowData';

interface Countrytype {
  countries: any,
  casesType: string
}

const LeafletMap: React.FC<Countrytype> = ({countries, casesType}) => {
  return (
    <div>
      <MapContainer center={[48.253,10.452]} zoom={2} className={classes.mapArea}>
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {ShowData(countries, casesType)}
      </MapContainer>
    </div>
  )
}

export default LeafletMap;