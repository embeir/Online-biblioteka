import React from 'react';
import classes from './Style/Navbar.module.css'
import Item from './Item';
import Logout from './Auth/Logout';
import { useAuth0 } from "@auth0/auth0-react";



const NavigationItems = () => {

    const { isAuthenticated } = useAuth0();
    return (


        <ul className={classes.NavigationItems}>
            <Item
                className={classes.NavigationItem}
                link="/" exact >Početna</Item>

            {(isAuthenticated) ?
                <>
                    <Item
                        className={classes.NavigationItem}

                        link="/na-citanju">Na Čitanju</Item>
                    <Item
                        className={classes.NavigationItem}
                        link="/procitano">Pročitano</Item>
                    <Item
                        className={classes.NavigationItem}
                        link="/korpa">Korpa</Item>
                </>
                : null
            }
            <Item
                className={classes.NavigationItem}
                link="/login" >Login</Item>
            <Logout
                className={classes.NavigationItem} />
        </ul>
    )
}

export default NavigationItems;