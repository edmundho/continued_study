import React from 'react';

class Weather extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      weather: null
    };

    this.getWeather = this.getWeather.bind(this);
  }

  getWeather (location) {
    let lat = location.coords.latitude;
    let lng = location.coords.longitude;
    let request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState === XMLHttpRequest.DONE) {
        // console.log('success');
        const data = JSON.parse(request.responseText);
        this.setState({ weather: data });
      } else {
        console.log('error');
      }
    };
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=570f55e8019da8479eb126712120b85d`;
    request.open("GET", url, true);
    request.send();
  }
  
  componentDidMount () {
    navigator.geolocation.getCurrentPosition(this.getWeather);

  }
  
  render () {
    let content = <div></div>;

    if (this.state.weather) {
      let weather = this.state.weather;
      let temp = (weather.main.temp - 273.15) * 1.8 + 32;
      content = <div>
        <p><i className="fas fa-sun"></i></p>
        <p>|</p>
        <p>{weather.name}</p>
        <p>|</p>
        <p>{temp.toFixed(1)}&deg;F</p>
      </div>;
    } else {
      content = <div className='loading'>Loading weather...</div>;
    }
    return (
      <div id="weather">
        <div id="weather-inner">
          {/* <h1>Local Weather</h1> */}
          {content}
        </div>
      </div>
    );
  }
}

export default Weather;