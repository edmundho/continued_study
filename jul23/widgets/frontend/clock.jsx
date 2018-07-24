import React from 'react';

class Clock extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      currentTime: new Date ()
    };

    this.tick = this.tick.bind(this);
  }

  tick () {
    this.setState({ currentTime: new Date () });
  }

  componentDidMount () {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount () {
    clearInterval(this.interval);
  }

  day (n) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    return days[n];
  }

  month (n) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

    return months[n];
  }
  
  render () {
    const currentTime = this.state.currentTime;
    const day = currentTime.getDay();
    const month = currentTime.getMonth();
    const date = currentTime.getDate();
    let hours = currentTime.getHours();
    hours = hours < 10 ? `0${hours}` : hours;
    let minutes = currentTime.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    let seconds = currentTime.getSeconds();
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
      <div id="clock">
        <h1>Today is {this.day(day)}, {this.month(month)} {date}</h1>
        <h3>{hours}
          <p>
            &bull;
          </p>
          {minutes}
          <p>
            &bull;
          </p>
          {seconds}</h3>
      </div>
    );
  }
}

export default Clock;
