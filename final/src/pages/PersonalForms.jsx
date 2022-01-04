import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setPersonalValue } from '../redux/action/action';
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
    const { dispatchSetValue } = this.props;
    dispatchSetValue(this.state);
  }

  render() {
    const { email, password } = this.state;
    const { email: emailInfo, password: passwordInfo } = this.props;
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
          {emailInfo}
        </div>
        <div>
          Password:
          {' '}
          {passwordInfo}
        </div>
      </div>
      </fieldset>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (valueAndName) => dispatch(setPersonalValue(valueAndName)),
} 
);

const mapStateToProps = (state) => ({ email: state.login.email,  password: state.login.password});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalForm);
