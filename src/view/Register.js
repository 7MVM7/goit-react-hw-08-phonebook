import { useState } from "react";
import { register } from "../redux/auth/auth-back-end";
import { useDispatch } from "react-redux";

const styles = {
  div: {
    margin: "20px",
  },

  form: {
    width: 320,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
  h1: {
    margin: 20,
  },
  span: {
    marginBottom: 15,
    fontWeight: 700,
    fontSize: "20px",
  },
  button: {
    display: "inline-flex",
    margin: "0 4px",
    padding: "8px 24px",
    border: 0,
    borderRadius: "10px",
    color: "#ffffff",
    fontSize: "14px",
    fontFamily: "inherit",
    backgroundColor: "#2196f3",
    fontWeight: 700,
    cursor: "pointer",
  },
};

function RegisterView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div style={styles.div}>
      <h1 style={styles.h1}>Регистрация</h1>
      <form autoComplete="off" onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          <span style={styles.span}>Имя</span>
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label style={styles.label}>
          <span style={styles.span}>Почта</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          <span style={styles.span}>Пароль</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit" style={styles.button}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}

export default RegisterView;
