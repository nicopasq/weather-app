import React, { useState } from "react";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './currentConditions.css'
import { Button, Icon } from "@mui/material";

export default function CurrentWeather() {
    const [unit, setUnit] = useState('F')
    const [temp, setTemp] = useState(57)

    function changeUnit(){
        if (unit === 'F'){
            setUnit('C')
            setTemp(Math.round(13.89))
        } else if (unit === 'C'){
            setUnit('F')
            setTemp(57)
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
        <div className="currentWeatherComp">
            <div className="currentWeather">
                <h1>Current</h1>
                <div className="unitButtons">
                    <Button variant='outlined' sx={unitButtonStyle} onClick={changeUnit}>F</Button>
                    <Button variant='outlined' sx={unitButtonStyle} onClick={changeUnit}>C</Button>
                </div>
                <h1 className="currentTemp">{temp}{'\u00B0'}{unit}</h1>
                <WbSunnyIcon sx={weatherIconStyle} />
            </div>
            <div className="hourlyForecast">

            </div>

        </div>
    )
}