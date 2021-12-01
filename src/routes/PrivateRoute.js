import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { isAuth } from "../redux/auth/auth-selectors";

export default function PrivateRoute({
  children,
  redirectTo = "/",
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(isAuth);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
