import React, { useState } from 'react';
import './sidebar.css';

import { Link, NavLink } from "react-router-dom";
const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
    <Link to="/" className="title">
      Expense Tracker
    </Link>
    <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
      <span></span>
      <span></span>  
      <span></span>
    </div>
    <ul className={menuOpen ? "open" : ""}>
      <li>
        <NavLink to="/acount">Wallet</NavLink>
      </li>
      <li>
        <NavLink to="/category">Category</NavLink>
      </li>
      <li>
        <NavLink to="/expense">Expense</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </ul>
  </nav>
  );
};

export default Sidebar;