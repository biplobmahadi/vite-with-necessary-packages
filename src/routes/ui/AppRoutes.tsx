import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Dashboard from "../../components/Dashboard";
import Editor from "../../components/Editor";
import Home from "../../components/Home";
import Login from "../../components/Login";
import NotFound from "../../components/NotFound";
import Profile from "../../components/Profile";
import AppPaths from "../../paths/AppPaths";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

export default function AppRoutes() {
  return (
    <Fragment>
      <Routes>
        <Route path={AppPaths.Home} element={<Home />} />
        <Route path={AppPaths.About} element={<About />} />
        <Route path={AppPaths.Contact} element={<Contact />} />
        <Route path={AppPaths.Login} element={<Login />} />
        <Route path={AppPaths.NotFound} element={<NotFound />} />

        <Route path={AppPaths.Dashboard} element={<Dashboard />} />
        <Route path={AppPaths.Editor} element={<Editor />} />
        <Route path={AppPaths.Profile} element={<Profile />} />
      </Routes>
      {/* <PublicRoutes /> */}
      {/* <PrivateRoutes /> */}
    </Fragment>
  );
}
