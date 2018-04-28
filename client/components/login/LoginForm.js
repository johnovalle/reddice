import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { login } from '../../actions/loginActions';

import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../../server/shared/validations/login';

class LoginForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  isValid() {
    const { errors, isValid }  = validateInput(this.state);

    if (!isValid) {
      this.setState({errors});
    }

    return isValid;
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.isValid()) {
      this.setState({errors: {}, isLoading: true});
      this.props.login(this.state).then(
        res => this.props.history.push('/'),
        err => this.setState({ errors: err.response.data.errors, isLoading: false})
      );
    }
  }

  render() {
    const {errors, identifier, password, isLoading} = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login!</h1>

        { errors.form && <div className='alert alert-danger'>{errors.form}</div> }

        <TextFieldGroup
          label='Username / Email'
          value={identifier}
          name='identifier' onChange={this.onChange}
          error={errors.identifier} 
        />

        <TextFieldGroup label='Password' value={password}
          name='password' type='password' onChange={this.onChange} error={errors.password} />

        <div className='form-group'>
          <button className='btn btn-primary btn-lg' disabled={isLoading}>
            Login up
          </button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
}

export default withRouter(connect(null, { login })(LoginForm));