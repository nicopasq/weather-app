import React, { useEffect, useState } from "react";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './currentConditions.css'
import { Button, Icon } from "@mui/material";
import { Conditions } from "./Conditions";

export default function CurrentWeather() {
    const [coords, setCoords] = useState({})
    const [unit, setUnit] = useState('F')
    const [currentWeather, setCurrentWeather] = useState({})
    const [temp, setTemp] = useState(0)
    const weatherIcon = currentWeather.weather_icons ? currentWeather.weather_icons[0] : undefined
    const weatherDesc = currentWeather.weather_descriptions ? currentWeather.weather_descriptions[0] : undefined

    function success(position) {
        const lat = position.coords.latitude
        const long = position.coords.longitude
        setCoords({ lat: lat, long: long })
    }

    function error() {
        console.log('Could not find location')
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error)
        }
    }, [])

    useEffect(() => {
        if (coords.lat){
            fetch(`http://api.weatherstack.com/current?access_key=aa910403a3986ea5c8f5d408af34ec6f&query=${coords.lat},${coords.long}&units=F`)
            .then(r => r.json())
            .then(data => {
                setCurrentWeather(data.current)
                setTemp(data.current.temperature)
            })
        }
    }, [coords])

    function changeUnit() {
        if (unit === 'F') {
            setUnit('C')
            const temp = (currentWeather.temperature - 32) * (5/9) 
            setTemp(Math.round(temp))
        } else if (unit === 'C') {
            setUnit('F')
            setTemp(currentWeather.temperature)
        }
    }
console.log(currentWeather)
    const weatherIconStyle = {
        fontSize: '100px',
        borderRadius:'100%',
        height:'7vh',
        position: 'relative',
        bottom: '33vh',
        right: '10%',
        float: 'right',
        backgroundColor:'white'
    }

    const unitButtonStyle = {
        color: 'white',
        border: '1px solid white',
        margin: '2%'
    }

    const conditionsObj = {
        precip : currentWeather.precip,
        humidity : currentWeather.humidity,
        wind_dir : currentWeather.wind_dir,
        wind_speed : currentWeather.wind_speed
    }

    return (
        <div className="currentWeatherComp">
            <div className="currentWeather">
                <h1>Current</h1>
                <div className="unitButtons">
                    <Button onClick={changeUnit} variant="outlined" sx={unitButtonStyle}>Change Unit</Button>
                </div>
                <h1 className="currentTemp">{temp}{'\u00B0'}{unit}</h1>
                <h1 style={{position:'relative', bottom:'65%', color:'eggshell'}}>{weatherDesc}</h1>
                <img src={weatherIcon} style={weatherIconStyle} />
            </div>
            <Conditions conditionsObj={conditionsObj}/>
            <div className="hourlyForecast">

            </div>

        </div>
    )
}