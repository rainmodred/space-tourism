import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';

import styles from './Layout.module.css';

function setBodyClass(newClass) {
  document.body.className = 'bg';
  document.body.classList.add(newClass);
}

export default function Layout({ children }) {
  const { pathname } = useRouter();

  useEffect(() => {
    switch (pathname) {
      case '/destination':
        setBodyClass('bg-destination');
        break;
      case '/crew':
        setBodyClass('bg-crew');
        break;

      default:
        setBodyClass('bg-home');
    }
  }, [pathname]);

  const createMainClassnames = () => {
    switch (pathname) {
      case '/destination':
        return classNames(styles.main, styles.mainDestination);
      case '/crew':
        return classNames(styles.main, styles.mainCrew);
      default:
        return classNames(styles.main, styles.mainHome);
    }
  };

  let mainClassnames = createMainClassnames();

  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={mainClassnames}>{children}</main>
    </div>
  );
}
