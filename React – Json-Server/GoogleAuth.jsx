import React, { useState } from "react";
import { auth } from "./Firebase-config";
import { GoogleAuthProvider, signInWithPopup, signOut } from "Firebase/auth";

const GoogleAuth = () => {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);
    } catch (error) {
      console.error("Error during sign-in:", error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error during sign-out:", error.message);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <h3>Welcome, {user.displayName}</h3>
          <button onClick={handleLogout}>Sign Out</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Sign In with Google</button>
      )}
    </div>
  );
};

export default GoogleAuth;
