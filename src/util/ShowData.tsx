import React from 'react'
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";
import classes from './ShowData.module.css'

interface TypeColors {
    cases: ColorsHex,
    recovered: ColorsHex,
    deaths: ColorsHex
}

interface ColorsHex {
    hex: any,
    multiplier: number
}

const casesTypeColors:TypeColors = {
    cases: {
        hex: "#3d85c6",
        multiplier: 280,
    },
    recovered: {
        hex: "#7dd71d",
        multiplier: 240,
    },
    deaths: {
        hex: "#fb4443",
        multiplier: 400,
    },
};  

type T = keyof typeof casesTypeColors;

//Show Data is used to display the data over the leaflet Map

export const ShowData = (countries:any, casesType:string) => 
    countries.map((country:any) => (
        <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            color={casesTypeColors[casesType as T].hex}
            fillColor={casesTypeColors[casesType as T].hex}
            fillOpacity={0.2}
            radius={Math.sqrt(country[casesType]) * casesTypeColors[casesType as T].multiplier}
            key={country.country}
        >
            <Popup>
                <div className={classes.infocontainer}>
                <div
                    className={classes.infoflag}
                    style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
                ></div>
                <div className={classes.infoname}>{country.country}</div>
                <div className={classes.confirmed}>
                    Cases: {numeral(country.cases).format("0,0")}
                </div>
                <div className={classes.recovered}>
                    Recovered: {numeral(country.recovered).format("0,0")}
                </div>
                <div className={classes.death}>
                    Deaths: {numeral(country.deaths).format("0,0")}
                </div>
                </div>
            </Popup>
        </Circle>
    ))

