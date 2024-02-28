import styles from "./page.module.css";
import LoginFormComponent from "./Components/LoginFormComponent";

export default function Home() {
  return (
    <main className={styles.main}>
      <LoginFormComponent />
    </main>
  );
}
