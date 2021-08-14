import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Style/Navbar.module.css'

const menuItem = (props) => (
    <li className={classes.NavigationItem}>
        <Link
             to={props.link}>
             {props.children}
        </Link>
    </li>
);

export default menuItem;