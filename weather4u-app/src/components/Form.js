import React from "react";

const Form = props => (
    <form className="form-inline active-purple weather-search" onSubmit={props.getWeather}>
        <input className="form-control form-control-sm ml-3 w-75" type="text" name="city" placeholder="City..." />
        <input className="form-control form-country form-control-sm ml-3 w-75" type="text" name="country" placeholder="Country..." />
        <button className="btn btn-search">Search Weather</button>
    </form>
);

export default Form;