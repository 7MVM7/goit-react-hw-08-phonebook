import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isAuth } from "../redux/auth/auth-selectors";

export default function PublicRoute({
  children,
  redirectTo = "/",
  restricted = false,
  ...routeProps
}) {
  const isLoggedin = useSelector(isAuth);

  const shouldRedirect = isLoggedin && restricted;

  return <div>{shouldRedirect ? <Navigate to={redirectTo} /> : children}</div>;
}
