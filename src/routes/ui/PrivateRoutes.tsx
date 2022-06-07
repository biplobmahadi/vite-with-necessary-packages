import { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../../components/Dashboard";
import Profile from "../../components/Profile";
import PrivateRouter from "../../helpers/PrivateRouter";
import useAuth from "../../hooks/useAuth";

export default function PrivateRoutes() {
  const config = {};

  const { loggedIn, setLoggedIn } = useAuth();
  if (!loggedIn) return <Navigate to="/login" />;

  return (
    <Fragment>
      <PrivateRouter
        path="/dashboard"
        element={<Dashboard />}
        config={{ userRole: "ADMINn" }}
      />
      <PrivateRouter
        path="/profile"
        element={<Profile />}
        config={{ userRole: "DEVELOPER" }}
      />
    </Fragment>
  );
}
