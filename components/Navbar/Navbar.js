import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import styles from './Navbar.module.css';

export default function Navbar() {
  const router = useRouter();

  const isActive = path =>
    path === router.pathname ? styles.active : styles.item;

  const [menuOpened, setMenuOpened] = useState(false);

  const menuButtonStyles = `${styles.menuButton} ${
    menuOpened ? styles.menuButton__opened : ''
  }`;
  const navStyles = `${styles.nav} ${menuOpened ? '' : styles.nav__closed}`;

  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <Image src="/shared/logo.svg" width="48" height="48" alt="logo" />
        </a>
      </Link>

      <button
        className={menuButtonStyles}
        onClick={() => setMenuOpened(!menuOpened)}
      ></button>
      <nav className={navStyles}>
        <ul className={styles.menu}>
          <li className={isActive('/')}>
            <Link href="/">
              <a className={styles.link}>
                <span className={styles.number}>00</span> home
              </a>
            </Link>
          </li>
          <li className={isActive('')}>
            <Link href="/">
              <a className={styles.link}>
                <span className={styles.number}>01</span> destination
              </a>
            </Link>
          </li>
          <li className={isActive('')}>
            <Link href="/">
              <a className={styles.link}>
                <span className={styles.number}>02</span> crew
              </a>
            </Link>
          </li>
          <li className={isActive('')}>
            <Link href="/">
              <a className={styles.link}>
                <span className={styles.number}>03</span> technology
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
