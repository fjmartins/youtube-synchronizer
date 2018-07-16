import React, { Component } from 'react';

export default class Home extends Component {

  constructor() {
    super();

    this.state = {
      url: "",
    }

    this.handleChange = this.handleChange.bind(this);
  }

  start() {

  }
  
  handleChange(evt) {
      this.setState({ url: evt.target.value });
  }

  render() {
    return (
      <div className="container">
        <input type="text" value={this.state.url} onChange={this.handleChange} />
        <button onClick={this.start}>
          Go
        </button>
      </div>
    );
  }
}
