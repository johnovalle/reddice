import React from 'react';
import timezones from '../../data/timezones';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/singup';
import TextFieldGroup from '../common/TextFieldGroup';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: '',
      errors: {},
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onSubmit(event) {
    event.preventDefault();

    if (this.isValid()) {
      this.setState({errors: {}, isLoading: true});
      this.props.userSignupRequest(this.state).then(
        () => {}
      )
      .catch(error => this.setState({errors: error.response.data, isLoading:false}));
    }
  }

  render() {
    const options = Object.keys(timezones).map((key) => {
      return <option key={timezones[key]} value={timezones[key]}>{key}</option>
    });
    const {errors, validated} = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community!</h1>

        <TextFieldGroup label='Username' value={this.state.username}
          name='username' onChange={this.onChange} error={errors.username} />

        <TextFieldGroup label='Username' value={this.state.email}
          name='email' type='email' onChange={this.onChange} error={errors.email} />

        <TextFieldGroup label='Password' value={this.state.password}
          name='password' type='password' onChange={this.onChange} error={errors.password} />

        <TextFieldGroup label='Password' value={this.state.passwordConfirmation}
          name='passwordConfirmation' type='password' onChange={this.onChange} error={errors.passwordConfirmation} />

        <div className='form-group'>
          <label className='control-label'>Timezone</label>
          <select
            value={this.state.timezone}
            onChange={this.onChange}
            name='timezone'
            className={classnames('form-control', {'is-invalid': errors.timezone})}
          >
            <option value='' disabled>Choose Your Timezone</option>
            {options}
          </select>
          {errors.timezone && <div className='invalid-feedback'>{errors.timezone}</div>}
        </div>

        <div className='form-group'>
          <button className='btn btn-primary btn-lg' disabled={this.state.isLoading}>
            Sign up
          </button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

export default SignupForm;