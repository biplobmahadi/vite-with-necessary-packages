import { PathRouteProps, Route, Routes } from "react-router-dom";

interface Props extends PathRouteProps {
  config?: Object;
}

export default function PrivateRouter({ config, ...rest }: Props) {
  return (
    <Routes>
      <Route {...rest} />
    </Routes>
  );
}
