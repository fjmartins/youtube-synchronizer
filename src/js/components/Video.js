import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';

export default class Video extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Panel>
          <iframe width="720" height="480"
          src="https://www.youtube.com/embed/"+this.props.videoID+"?controls=0">
          </iframe>
        </Panel>
      </div>
    );
  }
}
