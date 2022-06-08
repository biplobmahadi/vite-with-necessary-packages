import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { userRoles } from "../consts/Users";
import useAuth from "../hooks/useAuth";
import IAllowedRoles from "../interfaces/allowedRoles";
import AppPaths from "../paths/AppPaths";

export default function Private({ allowedRoles }: IAllowedRoles) {
  const { loggedIn } = useAuth();
  const location = useLocation();

  const valid = allowedRoles.some((roles) => userRoles.includes(roles));

  return loggedIn && valid ? (
    <Outlet />
  ) : loggedIn ? (
    <Navigate to={AppPaths.NotFound} state={{ from: location }} replace />
  ) : (
    <Navigate to={AppPaths.Login} state={{ from: location }} replace />
  );
}
