import React from 'react'
import Titles from './components/titles'
import Form from './components/form'
import Weather from './components/weather'

const API_KEY = '233b67f3faa88633ccfa789d8f790966'


class App extends React.Component {

    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        pressure: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
        const zipcode = e.target.elements.zipcode.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},${country}&appid=${API_KEY}`);
        const weatherData = await api_call.json();
        if (zipcode && country) {
            this.setState({
                temperature: weatherData.main.temp,
                city: weatherData.name,
                country: weatherData.sys.country,
                humidity: weatherData.main.humidity,
                pressure: weatherData.main.pressure,
                description: weatherData.weather[0].description,
                error: ""
            })
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                pressure: undefined,
                description: undefined,
                error: "Please enter a valid zipcode and country to get the weather."
            })
        }
        
    }
    render() {
        return(
            <div>
                <Titles />
                <Form getWeather={this.getWeather}/>
                <Weather 
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    pressure={this.state.pressure}
                    error={this.state.error}
                />
            </div>
        );
    }
}

export default App;