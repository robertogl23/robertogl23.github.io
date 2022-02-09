import styles from '../styles/card.module.css';
export const Card = () => {
  return (
    <>
      <div className={styles['title-layout']}>
        <h2>Perfil</h2>
      </div>
      <div className={styles.layout}>
        <p>
          Cuento con experiencia en el desarrollo de aplicaciones web y móviles
          con integraciones a servicios web.
        </p>
      </div>
      <div className={styles['title-layout']}>
        <h2>Contacto</h2>
      </div>
      <div className={styles.layout}>
        <ul className={styles.list}>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles['icon']}
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                clipRule="evenodd"
              />
            </svg>
            dev.robertgl@gmail.com
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles['icon']}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            5959579716
          </li>
        </ul>
      </div>
    </>
  );
};
