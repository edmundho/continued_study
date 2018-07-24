import React from 'react';

class Autocomplete extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      inputVal: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }
    
  handleChange (event) {
    this.setState({ inputVal: event.target.value });
  }

  render () {
    const names = this.props.names
      .filter((name, idx) => name.toLowerCase().includes(this.state.inputVal.toLowerCase()))
      .map((name, idx) => {
        return (
          <li key={idx}>{name}</li>
        );
      })
      .sort((a, b) => a - b);


    return (
      <div id="autocomplete">
        <div id="autocomplete-inner">
          <input type="text" 
            onChange={this.handleChange} 
            value={this.state.inputVal}/>
          <ul>
            {names}
          </ul>
        </div>
      </div>
    );

  }
}

export default Autocomplete;