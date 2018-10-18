import React from 'react'
import { NavLink } from 'react-router-dom';
import '../stylesheets/menus.scss'

const selectedStyle = {
    backgroundColor: 'white',
    color: 'slategray'
}

export const MainMenu = () => {
    return (
        <nav className='main-menu'>
            <NavLink to="/">
                [Home]
            </NavLink>
            <NavLink to="/about" activeStyle={selectedStyle}>
                [About]
            </NavLink>
            <NavLink to="/events" activeStyle={selectedStyle}>
                [Events]
            </NavLink>
            <NavLink to="/products" activeStyle={selectedStyle}>
                [products]
            </NavLink>
            <NavLink to="/contact" activeStyle={selectedStyle}>
                [contact]
            </NavLink>
        </nav>
    )
}

export const AboutMenu = ({ match }) =>
    <div className="about-menu">
        <li>
            <NavLink to="/about"
                  style={match.isExact && selectedStyle}>
                [회사]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/history"
                  activeStyle={selectedStyle}>
                [연혁]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/services"
                  activeStyle={selectedStyle}>
                [서비스]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/location"
                  activeStyle={selectedStyle}>
                [위치]
            </NavLink>
        </li>
    </div>