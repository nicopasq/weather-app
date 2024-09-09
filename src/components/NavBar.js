import { Button, Icon, TextField } from "@mui/material";
import React, { useState } from "react";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
export default function NavBar() {
    const [city, setCity] = useState('')

    const cityInput = { border: '1px solid white', borderRadius: '10px', height: '4vh', width: '25%', input: { color: 'white', textIndent: '11%', marginTop: '1%' } }

    return (
        <div className="navBar">
            <Icon>
                <LocationOnOutlinedIcon className="locationIcon" />
            </Icon>
            <form autoComplete="off">
                <TextField className="cityInput" variant="standard" InputProps={{ disableUnderline: true }} placeholder='City Name' value={city} onChange={(e) => setCity(e.target.value)} sx={cityInput} />
                <Button type="submit"><TravelExploreOutlinedIcon className="searchIcon"/></Button>                    
            </form>
            <div className="glowingBorder" />
        </div>
    )
}