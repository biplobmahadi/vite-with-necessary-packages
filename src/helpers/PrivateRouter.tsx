import {
  Navigate,
  PathRouteProps,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import NotFound from "../components/NotFound";
import { userRoles } from "../consts/Users";

interface Props extends PathRouteProps {
  config?: any;
}

export default function PrivateRouter({ config, ...rest }: Props) {
  const { userRole } = config;
  const isValid = userRoles.includes(userRole);

  const navigate = useNavigate();
  if (!isValid) return <Navigate to="/login" />;
  return (
    <Routes>
      <Route {...rest} />
    </Routes>
  );
}
