import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isAuth } from "../redux/auth/auth-selectors";

export default function PrivateRoute({
  children,
  redirectTo = "/",
  restricted = false,
  ...routeProps
}) {
  const isLoggedin = useSelector(isAuth);

  return <div>{isLoggedin ? children : <Navigate to={redirectTo} />}</div>;
}
