import styles from '../styles/header.module.css';
import {Globe} from '../components/Globe';
export const Header = () => {
  return (
    <header className={styles.layout}>
      <h1> Hola me llamo Roberto! </h1>
      <p className='title-animation'>Programador Web.</p>
      <section className={styles.globe}>
        <Globe />
      </section>
    </header>
  );
};
