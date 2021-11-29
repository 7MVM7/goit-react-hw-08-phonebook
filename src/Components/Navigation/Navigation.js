import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav style={styles.nav}>
      <NavLink to="/" exact="true" style={styles.a}>
        Home
      </NavLink>

      <NavLink to="/contacts" style={styles.link}>
        Contacts
      </NavLink>
    </nav>
  );
}

export default Navigation;
