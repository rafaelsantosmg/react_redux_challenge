import React, { Component } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

class PersonalForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  onSubmitForm() {

  }

  render() {
    const { email, password } = this.state;
    
    return (
      <>
      <fieldset>
        <Input
          label="email: "
          type="text"
          onChange={ this.handleChange }
          value={ email }
          name="email"
          required
        />
        <Input
          label="password: "
          type="password"
          onChange={ this.handleChange }
          value={ password }
          name="password"
          required
        />
        <Button type="button" label="Enviar" onClick={ this.onSubmitForm } />
      </fieldset>
      <fieldset>
        <div>
        <h2>Dados de Login</h2>
        <div>
          Email:
          {' '}
        </div>
        <div>
          Password:
          {' '}
        </div>
      </div>
      </fieldset>
      </>
    );
  }
}


export default PersonalForm;
