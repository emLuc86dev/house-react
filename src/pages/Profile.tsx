import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

type UserType = {
  displayName: string;
  email: string;
};

const Profile = () => {
  const [user, setUser] = useState<UserType>({ displayName: "", email: "" });
  const auth = getAuth();
  const displayName = auth.currentUser!.displayName;
  const email = auth.currentUser!.email;
  useEffect(() => {
    if (displayName! && email!) {
      setUser({ displayName, email });
    }
  }, []);
  console.log(user)

  return <h1>user</h1>;
};

export default Profile;
