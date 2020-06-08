import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link className='navbar-brand' to='/'>
          Vidly
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <div className='navbar-nav mr-auto'>
            <NavLink className='nav-item nav-link' to='/movies'>
              Movies <span className='sr-only'>(current)</span>
            </NavLink>
            <NavLink className='nav-item nav-link' to='/customers'>
              Customers
            </NavLink>
            <NavLink className='nav-item nav-link' to='/rentals'>
              Rentals
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
