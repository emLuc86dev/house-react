import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

type UserType = {
  name: string;
  email: string;
};

const Profile = () => {
  const auth = getAuth();
  const [formData, setFormData] = useState<UserType>({
     name: auth.currentUser?.displayName!,
     email: auth.currentUser?.email! });

     const navigate = useNavigate()


     const logOut = () => {
       auth.signOut()
       navigate('/sign-in')

     }

  

  return (<div className="profile">
      <header className="profileHeader">
        <p className="ageHeader">My Profile</p>
        <button type="button" className="logOut" onClick={logOut}>Logout</button>
      </header>
    </div>)
  

};

export default Profile;

