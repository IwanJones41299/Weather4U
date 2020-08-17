import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "99cf19faac0d37b69a3f8e39a568ad0c"

class App extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        pressure: undefined,
        wind: undefined,
        windDirection: undefined,
        description: undefined,
        error: undefined
    }
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        if(city && country){
            // console.log(data); Line of code to allow us to see if the app works through the console.
            this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            wind: data.wind.speed,
            description: data.weather[0].description,
            error: ""
        });
        } else{
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                pressure: undefined,
                wind: undefined,
                description: undefined,
                error: "Please enter a City and Country"
        });
    }
    }
    render() {
        return(
            <div>
                <Titles />
                <Form getWeather={this.getWeather}/>
                <Weather 
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                pressure={this.state.pressure}
                wind={this.state.wind}
                description={this.state.description}
                error={this.state.error}
                />
            </div>
        );
    }
};

export default App;