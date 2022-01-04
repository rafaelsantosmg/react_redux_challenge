import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { type, name, label, onChange, value, id } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <input
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
          id={ id }
        />
      </label>
    );
  }
}

export default Input;
