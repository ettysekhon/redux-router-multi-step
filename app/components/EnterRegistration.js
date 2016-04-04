import React, { PropTypes, Component } from 'react';
import SubmitButton from './SubmitButton';
import TextInput from './TextInput';

class EnterRegistration extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      registration: ''
    };
    this._handleChange = this._handleChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onSubmit() {
    this.props.onSubmit(this.state.registration);
  }

  _handleChange(text) {
    /* eslint-disable react/no-set-state */
    this.setState({ registration: text });
    /* eslint-enable react/no-set-state */
  }

  render() {
    return (
      <div>
        <label>Enter registration:</label>
        <TextInput
          handleChange={this._handleChange}
          placeholder={'Enter Registration'}
          value={this.state.registration}
        />
        <SubmitButton
          onSubmit={this._onSubmit}
        />
      </div>
    );
  }
}

EnterRegistration.propTypes = {
  onSubmit: PropTypes.func,
};

export default EnterRegistration;
