import { Globe } from "../components/Globe";
import styles from "../styles/home.module.css";

export function Home() {
  return (
    <main className={styles["main-layout"]}>
      <header>
        <div className="title-layout">
          <h1>Hola soy roberto</h1>
          <p>Desarrollador web</p>
        </div>
        {/* <Globe /> */}
      </header>
    </main>
  );
}
