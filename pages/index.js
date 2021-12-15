import classNames from 'classnames';
import Link from 'next/link';
import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.title}>
        <h1
          className={classNames(
            'fs-xl',
            'fw-400',
            'uppercase',
            'color-light',
            'letter-spacing-1',
          )}
        >
          so, you want to travel to
          <span
            className={classNames(
              'fs-5xl',
              'd-block',
              'ff-Bellefair',
              'uppercase',
              'color-white',
              'text-center',
            )}
          >
            space
          </span>
        </h1>

        <p className={classNames('fs-lg', 'ff-Barlow', 'color-light')}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className={styles.linkWrapper}>
        <Link href="/destination">
          <a className={classNames(styles.link, 'uppercase')}>explore</a>
        </Link>
      </div>
    </>
  );
}
