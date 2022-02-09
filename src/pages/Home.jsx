import { Card } from '../components/Card';
import { Header } from '../components/Header';
import styles from '../styles/home.module.css';

export function Home() {
  return (
    <>
      <Header />
      <main className={styles.layout}>
        <Card/>
      </main>
      <footer></footer>
    </>
  );
}
