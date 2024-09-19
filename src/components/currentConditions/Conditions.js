import React from "react";

export function Conditions({ conditionsObj }) {

    console.log(conditionsObj)

    return (
        <div className="conditionsDiv">
            <h1 className="conditionLabel">
                Humidity : {conditionsObj.humidity}%
            </h1>
            <h1 className="conditionLabel">
                Chance of Percip: {conditionsObj.precip}%
            </h1>
            <h1 className="conditionLabel">
                Wind Direction {conditionsObj.wind_dir}
            </h1>
            <h1 className="conditionLabel">
                Wind Speed: {conditionsObj.wind_speed}mph
            </h1>
        </div>
    )
}