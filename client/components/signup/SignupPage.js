import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import SignupForm from './SignupForm';
import { userSignupRequest, doesUserExist } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages';

class SignupPage extends React.Component {
  render() {
    const { userSignupRequest, addFlashMessage, doesUserExist } = this.props;
    return (
      <div className='row'>
        <div className='col-md-4 offset-md-4'>
          <SignupForm
            userSignupRequest={userSignupRequest}
            addFlashMessage={addFlashMessage}
            doesUserExist={doesUserExist}
          />
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  doesUserExist: PropTypes.func.isRequired,
};

export default connect(null, { userSignupRequest, addFlashMessage, doesUserExist })(SignupPage);