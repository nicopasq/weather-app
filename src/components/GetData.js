import { Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import API_KEY from "./secret";

export default function GetData() {
    const [location, setLocation] = useState({
        city:'',
        state:''
    })
    const [key, setKey] = useState('')
    const [weather, setWeather] = useState({})

    function handleChange(e){
        setLocation({...location, [e.target.name] : e.target.value})
    }

    function getLocationKey(){
        fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${location.city},${location.state}`)
        .then(r => r.json())
        .then(data => setKey(data[0]?.Key))
    }

    function getWeather(){
        fetch(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${API_KEY}&details=true`)
        .then(r => r.json())
        .then(data => setWeather(data))
    }

    useEffect(() => {
        if (key.length > 0){
            getWeather()
        }
    }, [key])

    console.log(weather)



    return (
        <div>
            <TextField value={location.city} onChange={handleChange} name='city' placeholder="Enter City Name"/>
            <TextField value={location.state} onChange={handleChange} name='state' placeholder="Enter State Name"/>
            <Button variant="contained" onClick={getLocationKey}>Get Weather</Button>
        </div>
    )
}