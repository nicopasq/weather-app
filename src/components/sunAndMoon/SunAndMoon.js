import React from "react";
import NightlightRoundSharpIcon from '@mui/icons-material/NightlightRoundSharp';
import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';
import { Typography } from '@mui/material';

export default function SunAndMoon() {

    const sunMoonIcon = {
        fontSize: '100px'
    }
    const astroData = {
        marginLeft: '8%'
    }

    return (
        <div className='sunAndMoon'>
            <div className='dataDiv sunData'>
                <Typography variant='h6' sx={astroData}>
                    Sun Rise: 6:30 am
                </Typography>
                <Typography variant='h6' sx={astroData}>
                    Sun Set: 7:30pm
                </Typography>

            </div>
            <LightModeSharpIcon sx={sunMoonIcon} className='sunIcon' />
            <div className='line' />
            <NightlightRoundSharpIcon sx={sunMoonIcon} className='moonIcon' />
            <div className='dataDiv moonData'>
                <Typography variant='h6' sx={astroData}>
                    Moon Rise: 10:00pm
                </Typography>
                <Typography variant='h6' sx={{ marginLeft: '4%' }}>
                    Moon Set: 3:00am
                </Typography>
            </div>
        </div>
    )
}