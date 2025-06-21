import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    console.log("log out");
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img
          className="w-[41px] h-[41px] rounded-full"
          src={`${user ? user.photoURL : userIcon}`}
          alt=""
        />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-10">
            Log Out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
