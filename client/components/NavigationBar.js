import React from 'react';
import {Link} from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">

      <Link to='/' className="navbar-brand">Red Dice</Link>
      {/*<ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link">Left Link 1</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Left Link 2</a>
        </li>
      </ul>*/}
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to='/signup' className="nav-link">Sign up</Link>
        </li>
        {/*<li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">            Dropdown on Right</a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action with a lot of text inside of an item</a>
          </div>
        </li>*/}
      </ul>
    </nav>
  );
};

export default NavigationBar;