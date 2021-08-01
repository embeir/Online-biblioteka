import React from 'react';
import classes from './Navbar.module.css'
import Item from './Item';
import Logout from './Auth/Logout'



const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <Item
            className={classes.NavigationItem}
            link="/" exact >Početna</Item>
        <Item
            className={classes.NavigationItem}
            link="/login" >Login</Item>
        <Logout
            className={classes.NavigationItem} />
    </ul>
)

export default NavigationItems;