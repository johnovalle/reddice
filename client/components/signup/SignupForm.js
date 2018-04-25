import React from 'react';
import timezones from '../../data/timezones';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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

  onSubmit(event) {
    this.setState({errors: {}, isLoading: true});
    event.preventDefault();
    this.props.userSignupRequest(this.state).then(
      () => {}
    )
    .catch(error => this.setState({errors: error.response.data, isLoading:false}));
  }

  render() {
    const options = Object.keys(timezones).map((key) => {
      return <option key={timezones[key]} value={timezones[key]}>{key}</option>
    });
    const {errors, validated} = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community!</h1>

        <div className='form-group'>
          <label className='control-label'>Username</label>
          <input
            value={this.state.username}
            onChange={this.onChange}
            type='text'
            name='username'
            className={classnames('form-control', {'is-invalid': errors.username})}
          />
          {errors.username && <div className='invalid-feedback'>{errors.username}</div>}
        </div>

        <div className='form-group'>
          <label className='control-label'>Email</label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            type='text'
            name='email'
            className={classnames('form-control', {'is-invalid': errors.email})}
          />
          {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
        </div>

        <div className='form-group'>
          <label className='control-label'>Password</label>
          <input
            value={this.state.password}
            onChange={this.onChange}
            type='password'
            name='password'
            className={classnames('form-control', {'is-invalid': errors.password})}
          />
          {errors.password && <div className='invalid-feedback'>{errors.password}</div>}
        </div>

        <div className='form-group'>
          <label className='control-label'>Password Confirmation</label>
          <input
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
            type='password'
            name='passwordConfirmation'
            className={classnames('form-control', {'is-invalid': errors.passwordConfirmation})}
          />
          {errors.passwordConfirmation && <div className='invalid-feedback'>{errors.passwordConfirmation}</div>}
        </div>

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