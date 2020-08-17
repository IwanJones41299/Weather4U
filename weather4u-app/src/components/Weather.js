import React from "react";

const Weather = props => (
    <div>
        {props.city && props.country && <p>Location : {props.city}, {props.country}</p>}
        {props.temperature && <p>Temperature : {props.temperature}C</p>}
        {props.humidity && <p>Humidity : {props.humidity}%</p>}
        {props.pressure && <p>Pressure : {props.pressure}hPa</p>}
        {props.wind && <p>Wind : {props.wind}mph</p>}
        {props.condition && <p>Conditions : {props.description}</p>}
        {props.error && <p>{props.error}</p>}
    </div>
);

export default Weather;