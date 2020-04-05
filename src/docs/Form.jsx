import React, { PureComponent } from 'react';
import ChildWithHandler from './ChildWithHandler';
import { SnackBar } from '../lib';


class Form extends PureComponent {
  constructor() {
    super();
    this.state = {
      text: 'Hello World!!',
      buttonText: 'ACK',
      enableButton: 'false',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="root">
        <div className="header">Simple SnackBar</div>
        <div className="inputContainer">
          <div><b>Information: </b> <input name="text" value={this.state.text} onChange={this.handleChange} /></div>
          <div><b>Action: </b><input name="buttonText" value={this.state.buttonText} onChange={this.handleChange} /></div>
          <div>
            Enable Button
            <span><input
              checked={this.state.enableButton === 'true'}
              type="radio"
              value="true"
              name="enableButton"
              onChange={this.handleChange}
            />
                True
            </span>
            <span><input
              checked={this.state.enableButton === 'false'}
              type="radio"
              value="false"
              name="enableButton"
              onChange={this.handleChange}
            />
                False
            </span>
          </div>
        </div>
        <ChildWithHandler
          text={this.state.text}
          buttonText={this.state.buttonText}
        />
        <SnackBar
          enableButton={this.state.enableButton === 'true'}
          primary
        />
      </div>
    );
  }
}

export default Form;
