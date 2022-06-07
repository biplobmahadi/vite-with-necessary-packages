import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import AppPaths from "../paths/AppPaths";

export default function Navbar() {
  return (
    <Fragment>
      <NavLink to={AppPaths.Home}>Home</NavLink>
      <NavLink to={AppPaths.About}>About</NavLink>
      <NavLink to={AppPaths.Contact}>Contact</NavLink>
      <NavLink to={AppPaths.Dashboard}>Dashboard</NavLink>
      <NavLink to={AppPaths.Editor}>Editor</NavLink>
      <NavLink to={AppPaths.Login}>Login</NavLink>
      <NavLink to={AppPaths.NotFound}>NotFound</NavLink>
      <NavLink to={AppPaths.Profile}>Profile</NavLink>
    </Fragment>
  );
}
