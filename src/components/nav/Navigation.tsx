import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import style from './Navigation.module.css'

const Navigation = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <nav className={style.nav}>
      <button onClick={logoutHandler}>Logout</button>
    </nav>
  );
};

export default Navigation;
