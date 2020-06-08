import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.nav}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/1024px-Volkswagen_logo_2019.svg.png"
          alt="."
        ></img>
        <div className={classes.loginBlock}>
          {props.isAuth ? (
            <div>
              {" "}
              {props.login} - <button onClick={props.logout}>Logout</button>
            </div>
          ) : (
            <NavLink to={"/login"}>Login</NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
