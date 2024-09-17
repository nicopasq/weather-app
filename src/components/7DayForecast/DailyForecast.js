import { Card, CardContent, colors, Grid } from '@mui/material'
import React from 'react'
import ThunderstormSharpIcon from '@mui/icons-material/ThunderstormSharp';
import './dailyForecast.css'

export default function DailyForecast() {
    const forecastArr = [
        {
            day: "Mon",
            high: 85,
            low: 52,
            conditionIcon: <ThunderstormSharpIcon />
        },
        {
            day: "Tue",
            high: 85,
            low: 52,
            conditionIcon: <ThunderstormSharpIcon />
        },
        {
            day: "Wed",
            high: 85,
            low: 52,
            conditionIcon: <ThunderstormSharpIcon />
        },
        {
            day: "Thur",
            high: 85,
            low: 52,
            conditionIcon: <ThunderstormSharpIcon />
        },
        {
            day: "Fri",
            high: 85,
            low: 52,
            conditionIcon: <ThunderstormSharpIcon />
        },
        {
            day: "Sat",
            high: 85,
            low: 52,
            conditionIcon: <ThunderstormSharpIcon />
        },
        {
            day: "Sun",
            high: 85,
            low: 52,
            conditionIcon: <ThunderstormSharpIcon />
        }
    ]


    const cardSX = {
        bgcolor: 'transparent',
        color: 'white'
    }

    const cards = forecastArr.map((data) => {
        return (
            < div className='cardContainer' key={data.day} >
                <h1 >{data.day}</h1>
                <Card sx={cardSX} elevation={20}>
                    <CardContent>
                        <h3>
                            H: {data.high}
                        </h3>
                        <h3>
                            L: {data.low}
                        </h3>
                        {data.conditionIcon}
                    </CardContent>
                </Card>
            </div >
        )
    })
    return (
        <div className='dailyForecastDiv'>
            {cards}
        </div>
    )
}