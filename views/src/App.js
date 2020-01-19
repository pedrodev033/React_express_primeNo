import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { PARAM_VALUE_GT2 } from '../../constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      error: '',
      result: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: ''});
    let self = this;

    if(self.state.value && self.state.value > 2) {
      axios.get('http://localhost:3000/medianPrime', {
        params: {
          num: this.state.value
        }
      }).then(res => {
        if(typeof res.data.median != 'number')
          self.setState({ result: `Median: [${res.data.median.join()}]`});
        else
        self.setState({ result: `Median: ${res.data.median}`});
      }).catch(err => {
        console.log(err.response.data.status);
        self.setState({ error: `Error: ${err.response.data.description}` });
      });
    } else {
      self.setState({ error: `Error: ${PARAM_VALUE_GT2}` });
    }
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="numVal" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" className="submitBtn" value="Submit" />
        </form>
        <p>{this.state.error || this.state.result}</p>
      </div>
    );
  }
}

export default App;
