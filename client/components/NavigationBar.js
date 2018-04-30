import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/authActions';

class NavigationBar extends React.Component {

  logout(event) {
    event.preventDefault();
    this.props.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <ul className="navbar-nav flex-row">
        <li className="nav-item">
          <a className="nav-link" href='#' onClick={this.logout.bind(this)}>Logout</a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav flex-row">
          <li className="nav-item">
            <Link to='/signup' className="nav-link">Sign up &nbsp;</Link>
          </li>
          <li className="nav-item">
            <Link to='/login' className="nav-link">Login</Link>
          </li>
        </ul>
    );

    return (
      <nav className="navbar navbar-dark bg-primary">
  
        <Link to='/' className="navbar-brand">Red Dice</Link>
        { isAuthenticated ? userLinks : guestLinks }
      </nav>
    );
  }
};

NavigationBar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { logout })(NavigationBar);