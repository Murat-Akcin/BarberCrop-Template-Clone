import React from 'react';
import logo from './1.png';
import { Link } from 'react-router-dom';

const NavbarLeft = () => {
  return (
    <div className="navl">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </div>
  );
};

export default NavbarLeft;
