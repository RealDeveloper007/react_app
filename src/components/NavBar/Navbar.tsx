import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavItem, NavbarToggler } from 'reactstrap';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions";

export default function NavBar() {

    const [isCollapsed, setIsCollapsed] = useState(false);
    const [t] = useTranslation('common');
    const dispatch = useDispatch();
    const loginStore = useSelector((state: any) => state.loginStore)
    const isLoggedIn = loginStore.isLoggedIn;

    const handleLogout = (e: any) => {    
          dispatch(logout());
      }
    
    return (
        <>
            <Navbar container={true}
                color="light"
                expand="md"
                light
            >
                <NavbarBrand tag="div">
                    <NavLink to="/">
                    </NavLink>
                </NavbarBrand>
                <NavbarToggler onClick={() => setIsCollapsed(!isCollapsed)} />
                <Collapse navbar isOpen={isCollapsed}>
                    <Nav
                        className="me-2"
                        navbar
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    >
                        {!isLoggedIn ? (
                            <>
                                <NavItem >
                                    <NavLink to="login" className="btn btn-warning">
                                        {t('navbar.login')}
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="signup" className="btn btn-primary">
                                        {t('navbar.signup')}
                                    </NavLink>
                                </NavItem>
                            </>
                        ) : (
                            <>
                            <NavItem>
                                <NavLink to="profile" className="btn btn-primary">
                                    {t('navbar.profile')}
                                </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink to="login" className="btn btn-primary" onClick={handleLogout}>
                                {t('navbar.logout')}
                            </NavLink>
                        </NavItem>
                        </>
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
        </>);
}