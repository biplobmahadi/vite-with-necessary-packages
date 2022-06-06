import { Fragment } from "react";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

export default function AppRoutes() {
  return (
    <Fragment>
      <PublicRoutes />
      <PrivateRoutes />
    </Fragment>
  );
}
