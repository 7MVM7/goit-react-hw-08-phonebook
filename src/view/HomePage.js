import { useSelector } from "react-redux";

import { isLoad } from "../redux/selectors";

const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 700,
    fontSize: 58,
  },
};

export default function HomePage() {
  const loader = useSelector(isLoad);
  return (
    <div style={styles.container}>
      {!loader && <h2 style={styles.title}>Вітаємо в Сontacts </h2>}
    </div>
  );
}
