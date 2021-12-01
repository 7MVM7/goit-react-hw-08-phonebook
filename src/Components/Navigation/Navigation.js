import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Navigation.module.css";
import { isAuth } from "../../redux/auth/auth-selectors";

function Navigation() {
  const isLoggedIn = useSelector(isAuth);
  return (
    <nav style={styles.nav}>
      <NavLink to="/" exact="true" style={styles.a}>
        Home
      </NavLink>

      {isLoggedIn && (
        <>
          <NavLink to="/contacts" exact style={styles.link}>
            Contacts
          </NavLink>
        </>
      )}
    </nav>
  );
}

export default Navigation;
