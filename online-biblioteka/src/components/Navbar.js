import React from 'react';
import classes from './Navbar.module.css'
import Item from './Item';



const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <Item
            className={classes.NavigationItem} 
            link="/" exact >Početna</Item>
        <Item 
            className={classes.NavigationItem} 
            link="/login" >Login</Item>
        <Item 
            className={classes.NavigationItem} 
            link="/sign-up" >Sign up</Item>
    </ul>
)

export default NavigationItems;