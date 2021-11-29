import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/auth-back-end";
import styles from "./userMenu.module.css";

function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.user.email);

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.name}>Hello, {email}</h1>
      <button type="button" onClick={handleClick} className={styles.button}>
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
