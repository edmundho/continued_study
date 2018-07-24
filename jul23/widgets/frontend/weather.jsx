import React from 'react';

class Weather extends React.Component {
  componentDidMount () {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
    });

  }
  
  render () {
    return (
      <div>

      </div>
    );
  }
}

export default Weather;