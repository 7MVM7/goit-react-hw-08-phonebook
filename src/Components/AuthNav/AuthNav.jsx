import { NavLink, Link } from 'react-router-dom';

const styles = {
  link: {
    padding: 10,
    fontWeight: 900,
    color: '#ffffff',
  },
  linkLog:{
 
    fontWeight: 900,
    color: '#ffffff',
  },

  activeLink: {
    color: '#E84A5F',
  },
};

function AuthNav() {
  return (
    <div>
      <Link to="/register" style={styles.link}>
        Register
      </Link>
      <NavLink to="/login" exact="true" style={styles.linkLog}>
        Login
      </NavLink>
    </div>
  );
}

export default AuthNav;
