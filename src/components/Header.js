import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <h3>
      <NavLink to='/' activeClassName='is-active' exact={true}>Home </NavLink>
      <NavLink to='/create' activeClassName ='is-active'>Create Expense </NavLink>
    
    </h3>
  </header>
);

export default Header;
