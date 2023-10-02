import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase.ts";
import { useAuthState } from "react-firebase-hooks/auth";
import "../styles/nav.css"; // Import the CSS file
import { signOut } from "firebase/auth";
export const Navbar = () => {
  const [user] = useAuthState(auth);
  const out = async () =>{
    await signOut(auth);
}
  return (
    <div className="navbar-container">
      <div>
        <Link to="/" className="navbar-link">
          Home
        </Link>
        {!user ? <Link to="/login" className="navbar-link"> Login</Link> :
        <Link to="/createpost" className="navbar-link">
          createpost
        </Link>}
      </div>
      <div className="user-info">
        {user && (
        <>
        <p>{user?.displayName}</p>
        {user?.photoURL && (
          <img src={user?.photoURL} alt="User" width="100" height="100" />
        )}
        <button onClick={out} >Sign Out</button>
        </>
        )}
      </div>
    </div>
  );
};
