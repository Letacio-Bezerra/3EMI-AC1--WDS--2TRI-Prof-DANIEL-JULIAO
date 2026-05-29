import styles from "./page.module.css";
import Formulario from "./components/Formulario";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Formulario />
      </main>
    </div>
  );
}
