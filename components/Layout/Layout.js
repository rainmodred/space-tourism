import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';

import Head from 'next/head';

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
      case '/technology':
        setBodyClass('bg-tech');
        break;

      default:
        setBodyClass('bg-home');
    }
  }, [pathname]);

  const createMainClassnames = () => {
    switch (pathname) {
      case '/destination':
        return classNames(
          styles.main,
          styles.mainCommon,
          styles.mainDestination,
        );
      case '/crew':
        return classNames(styles.main, styles.mainCommon, styles.mainCrew);
      case '/technology':
        return classNames(styles.main, styles.mainCommon, styles.mainTech);
      default:
        return classNames(styles.main, styles.mainHome);
    }
  };

  function getTitle(pathname) {
    if (pathname === '/') {
      return 'Home';
    }

    return pathname.slice(1);
  }

  let mainClassnames = createMainClassnames();

  return (
    <>
      <Head>
        <title>{getTitle(pathname)}</title>
      </Head>
      <div className={styles.layout}>
        <Navbar />
        <main className={mainClassnames}>{children}</main>
      </div>
    </>
  );
}
