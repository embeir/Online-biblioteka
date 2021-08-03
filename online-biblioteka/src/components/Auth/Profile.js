import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import classes from './Profile.module.css'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  
  
  return (
    isAuthenticated && (
      <div>
        {isAuthenticated}
        <img src={user.picture} alt={user.name} className={classes.Profile} />
        <h2 className={classes.Name} >{user.name}</h2>
        <p className={classes.Email} >{user.email}</p>
      </div>
    )
    );
  };
  
export default Profile;