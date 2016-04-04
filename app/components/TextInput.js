import React, { Component, PropTypes } from 'react';

class TextInput extends Component {
  constructor(props, context) {
    super(props, context);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(e) {
    this.props.handleChange(e.target.value);
  }

  render() {
    return (
      <input
        autoFocus={'true'}
        onChange={this._handleChange}
        placeholder={this.props.placeholder}
        type={'text'}
        value={this.props.value}
      />
    );
  }
}

TextInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

TextInput.defaultProps = {
  value: ''
};

export default TextInput;
