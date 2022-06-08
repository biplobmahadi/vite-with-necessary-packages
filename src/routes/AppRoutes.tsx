import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Dashboard from "../components/Dashboard";
import Editor from "../components/Editor";
import Home from "../components/Home";
import Login from "../components/Login";
import NotFound from "../components/NotFound";
import Profile from "../components/Profile";
import { Users } from "../consts/Users";
import AppPaths from "../paths/AppPaths";
import Private from "./Private";

export default function AppRoutes() {
  return (
    <Fragment>
      <Routes>
        <Route path={AppPaths.Home} element={<Home />} />
        <Route path={AppPaths.About} element={<About />} />
        <Route path={AppPaths.Contact} element={<Contact />} />
        <Route path={AppPaths.Login} element={<Login />} />
        <Route path={AppPaths.NotFound} element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<Private allowedRoles={[Users.Admin]} />}>
          <Route path={AppPaths.Dashboard} element={<Dashboard />} />
        </Route>

        <Route element={<Private allowedRoles={[Users.Editor]} />}>
          <Route path={AppPaths.Editor} element={<Editor />} />
        </Route>

        <Route element={<Private allowedRoles={[Users.User]} />}>
          <Route path={AppPaths.Profile} element={<Profile />} />
        </Route>
      </Routes>
    </Fragment>
  );
}
