import classNames from 'classnames';
import Image from 'next/image';
import styles from '../styles/destination.module.css';

import moon from '../public/destination/image-moon.webp';
import mars from '../public/destination/image-mars.webp';
import europa from '../public/destination/image-europa.webp';
import titan from '../public/destination/image-titan.webp';

import { Tabs, TabList, TabPanels, TabPanel, Tab } from '../components/Tabs/';
import { useState } from 'react';

const images = [moon, mars, europa, titan];

export default function Destination() {
  const [imageIndex, setImageIndex] = useState(0);

  function onChange(index) {
    setImageIndex(index);
  }

  return (
    <>
      <h1 className={classNames(styles.heading, 'letter-spacing-1')}>
        <span className={styles.headingSpan}>01</span> pick your destination
      </h1>

      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image src={images[imageIndex]} alt="moon planet" />
        </div>
      </div>
      <div className={styles.tabsWrapper}>
        <Tabs onChange={onChange}>
          <TabList>
            <Tab>moon</Tab>
            <Tab>mars</Tab>
            <Tab>europa</Tab>
            <Tab>titan</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <h2
                className={classNames(
                  'fs-4xl',
                  'uppercase',
                  'fw-400',
                  'ff-Bellefair',
                  styles.tabPanelHeading,
                )}
              >
                moon
              </h2>
              <p className={classNames('fs-lg', styles.infoText)}>
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>
              <div className={styles.meta}>
                <div>
                  <h3 className={styles.metaHeading}>avg. distance</h3>
                  <p className={classNames(styles.metaText, 'ff-Bellefair')}>
                    384,400 km
                  </p>
                </div>
                <div>
                  <h3 className={styles.metaHeading}>est. travel time</h3>
                  <p className={classNames(styles.metaText, 'ff-Bellefair')}>
                    3 days
                  </p>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <h2
                className={classNames(
                  'fs-4xl',
                  'uppercase',
                  'fw-400',
                  'ff-Bellefair',
                  styles.tabPanelHeading,
                )}
              >
                mars
              </h2>
              <p className={classNames('fs-lg', styles.infoText)}>
                Don’t forget to pack your hiking boots. You’ll need them to
                tackle Olympus Mons, the tallest planetary mountain in our solar
                system. It’s two and a half times the size of Everest!
              </p>
              <div className={styles.meta}>
                <div>
                  <h3 className={styles.metaHeading}>avg. distance</h3>
                  <p className={classNames(styles.metaText, 'ff-Bellefair')}>
                    225 MIL. km
                  </p>
                </div>
                <div>
                  <h3 className={styles.metaHeading}>est. travel time</h3>
                  <p className={classNames(styles.metaText, 'ff-Bellefair')}>
                    9 months
                  </p>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <h2
                className={classNames(
                  'fs-4xl',
                  'uppercase',
                  'fw-400',
                  'ff-Bellefair',
                  styles.tabPanelHeading,
                )}
              >
                europa
              </h2>
              <p className={classNames('fs-lg', styles.infoText)}>
                The smallest of the four Galilean moons orbiting Jupiter, Europa
                is a winter lover’s dream. With an icy surface, it’s perfect for
                a bit of ice skating, curling, hockey, or simple relaxation in
                your snug wintery cabin.
              </p>
              <div className={styles.meta}>
                <div>
                  <h3 className={styles.metaHeading}>avg. distance</h3>
                  <p className={classNames(styles.metaText, 'ff-Bellefair')}>
                    628 MIL. km
                  </p>
                </div>
                <div>
                  <h3 className={styles.metaHeading}>est. travel time</h3>
                  <p className={classNames(styles.metaText, 'ff-Bellefair')}>
                    3 years
                  </p>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <h2
                className={classNames(
                  'fs-4xl',
                  'uppercase',
                  'fw-400',
                  'ff-Bellefair',
                  styles.tabPanelHeading,
                )}
              >
                titan
              </h2>
              <p className={classNames('fs-lg', styles.infoText)}>
                See our planet as you've never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you're there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>
              <div className={styles.meta}>
                <div>
                  <h3 className={styles.metaHeading}>avg. distance</h3>
                  <p className={classNames(styles.metaText, 'ff-Bellefair')}>
                    1.6 BIL. km
                  </p>
                </div>
                <div>
                  <h3 className={styles.metaHeading}>est. travel time</h3>
                  <p className={classNames(styles.metaText, 'ff-Bellefair')}>
                    7 years
                  </p>
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
}
