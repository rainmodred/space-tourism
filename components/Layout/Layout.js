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
    if (pathname == '/') {
      setBodyClass('bg-home');
    } else if (pathname == '/destination') {
      setBodyClass('bg-destination');
    }
  }, [pathname]);

  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
