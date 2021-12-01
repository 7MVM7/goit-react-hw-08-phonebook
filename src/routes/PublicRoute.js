import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { isAuth } from "../redux/auth/auth-selectors";

export default function PublicRoute({
  children,
  redirectTo = "/",
  restricted = false,
  ...routeProps
}) {
  const isLoggedin = useSelector(isAuth);

  const shouldRedirect = isLoggedin && restricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
