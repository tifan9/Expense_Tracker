import React, { Component } from 'react'
import { Outlet } from 'react-router-dom';
import {Nav,Navbar,NavItem,NavbarBrand, NavLink} from 'reactstrap';


class AppNav extends Component {
    state = {  }
    render() {
        return (
          <div>
            <Navbar color="dark" dark  expand="md">
              <NavbarBrand href="/">Expense Tracker</NavbarBrand>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/expenses">Expenses</NavLink>
                  </NavItem>
                
                </Nav>
          
            </Navbar>
            <main className="py-8 px-2">
                <Outlet />
            </main>
                
          </div>
        );
      }
}
 
export default AppNav;

