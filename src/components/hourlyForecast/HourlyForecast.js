import React, { useState } from "react";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './hourly.css'
import { Button, Icon } from "@mui/material";
import HourlyConditions from "./HourlyConditions";

export default function HourlyForecast() {
    const [unit, setUnit] = useState('F')
    const [temp, setTemp] = useState(85)

    function changeUnit() {
        if (unit === 'F') {
            setUnit('C')
            setTemp(Math.round(29.44))
        } else if (unit === 'C') {
            setUnit('F')
            setTemp(85)
        }
    }

    const weatherIconStyle = {
        fontSize: '100px',
        position: 'relative',
        bottom: '29vh',
        right: '2%',
        float: 'right',
    }

    const unitButtonStyle = {
        color: 'white',
        border: '1px solid white',
        margin: '2%'
    }


    return (
        <div className="hourlyForecastComp">
            <div className="hourlyWeather">
                <h1>3:00 PM</h1>
                <div className="unitButtons">
                    <Button onClick={changeUnit} variant="outlined" sx={unitButtonStyle}>Change Unit</Button>
                </div>
                <h1 className="hourlyTemp">{temp}{'\u00B0'}{unit}</h1>
                <WbSunnyIcon sx={weatherIconStyle} />
            </div>
            <HourlyConditions />
        </div>
    )
}