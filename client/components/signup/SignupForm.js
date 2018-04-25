import React from 'react';
import timezones from '../../data/timezones';
import PropTypes from 'prop-types';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.userSignupRequest(this.state);
    
    console.log(this.state);
  }

  render() {
    const options = Object.keys(timezones).map((key) => {
      return <option key={timezones[key]} value={timezones[key]}>{key}</option>
    });
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
            className='form-control'
          />
        </div>

        <div className='form-group'>
          <label className='control-label'>Email</label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            type='text'
            name='email'
            className='form-control'
          />
        </div>

        <div className='form-group'>
          <label className='control-label'>Password</label>
          <input
            value={this.state.password}
            onChange={this.onChange}
            type='password'
            name='password'
            className='form-control'
          />
        </div>

        <div className='form-group'>
          <label className='control-label'>Password Confirmation</label>
          <input
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
            type='password'
            name='passwordConfirmation'
            className='form-control'
          />
        </div>

        <div className='form-group'>
          <label className='control-label'>Timezone</label>
          <select
            value={this.state.timezone}
            onChange={this.onChange}
            name='timezone'
            className='form-control'
          >
            <option value='' disabled>Choose Your Timezone</option>
            {options}
          </select>
        </div>

        <div className='form-group'>
          <button className='btn btn-primary btn-lg'>
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