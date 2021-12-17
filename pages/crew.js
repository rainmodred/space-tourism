import { useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import styles from '../styles/crew.module.css';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';

import ansari from '../public/crew/image-anousheh-ansari.webp';
import hurley from '../public/crew/image-douglas-hurley.webp';
import shuttleworth from '../public/crew/image-mark-shuttleworth.webp';
import glover from '../public/crew/image-victor-glover.webp';

const images = [hurley, shuttleworth, glover, ansari];

export default function Crew() {
  const [imageIndex, setImageIndex] = useState(0);

  function onChange(index) {
    setImageIndex(index);
  }
  return (
    <>
      <h1
        className={classNames(
          styles.heading,
          'fs-xl',
          'fw-400',
          'uppercase',
          'letter-spacing-1',
        )}
      >
        <span aria-hidden="true" className={'heading-number'}>
          02
        </span>
        Meet your crew
      </h1>

      <div className={styles.imageWrapper}>
        <Image src={images[imageIndex]} alt="crew member image" />
      </div>

      <div className={styles.tabsWrapper}>
        <Tabs onChange={onChange}>
          <TabList>
            <Tab></Tab>
            <Tab></Tab>
            <Tab></Tab>
            <Tab></Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <h2
                className={classNames(
                  'fs-2xl',
                  'uppercase',
                  'fw-400',
                  'ff-Bellefair',
                  styles.tabPanelHeading,
                )}
              >
                Commander
              </h2>
              <h3
                className={classNames(
                  'fs-3xl',
                  'lh-1',
                  'fw-400',
                  'ff-Bellefair',
                  'uppercase',
                )}
              >
                Douglas Hurley
              </h3>
              <p className={classNames('fs-lg', styles.infoText)}>
                Douglas Gerald Hurley is an American engineer, former Marine
                Corps pilot and former NASA astronaut. He launched into space
                for the third time as commander of Crew Dragon Demo-2.
              </p>
            </TabPanel>
            <TabPanel>
              <h2
                className={classNames(
                  'fs-2xl',
                  'uppercase',
                  'fw-400',
                  'ff-Bellefair',
                  styles.tabPanelHeading,
                )}
              >
                Mission Specialist
              </h2>
              <h3
                className={classNames(
                  'fs-3xl',
                  'lh-1',
                  'fw-400',
                  'ff-Bellefair',
                  'uppercase',
                )}
              >
                MARK SHUTTLEWORTH
              </h3>
              <p className={classNames('fs-lg', styles.infoText)}>
                Mark Richard Shuttleworth is the founder and CEO of Canonical,
                the company behind the Linux-based Ubuntu operating system.
                Shuttleworth became the first South African to travel to space
                as a space tourist.
              </p>
            </TabPanel>
            <TabPanel>
              <h2
                className={classNames(
                  'fs-2xl',
                  'uppercase',
                  'fw-400',
                  'ff-Bellefair',
                  styles.tabPanelHeading,
                )}
              >
                PILOT
              </h2>
              <h3
                className={classNames(
                  'fs-3xl',
                  'lh-1',
                  'fw-400',
                  'ff-Bellefair',
                  'uppercase',
                )}
              >
                Victor Glover
              </h3>
              <p className={classNames('fs-lg', styles.infoText)}>
                Pilot on the first operational flight of the SpaceX Crew Dragon
                to the International Space Station. Glover is a commander in the
                U.S. Navy where he pilots an F/A-18.He was a crew member of
                Expedition 64, and served as a station systems flight engineer.
              </p>
            </TabPanel>
            <TabPanel>
              <h2
                className={classNames(
                  'fs-2xl',
                  'uppercase',
                  'fw-400',
                  'ff-Bellefair',
                  styles.tabPanelHeading,
                )}
              >
                Flight Engineer
              </h2>
              <h3
                className={classNames(
                  'fs-3xl',
                  'lh-1',
                  'fw-400',
                  'ff-Bellefair',
                  'uppercase',
                )}
              >
                Anousheh Ansari
              </h3>
              <p className={classNames('fs-lg', styles.infoText)}>
                Anousheh Ansari is an Iranian American engineer and co-founder
                of Prodea Systems. Ansari was the fourth self-funded space
                tourist, the first self-funded woman to fly to the ISS, and the
                first Iranian in space.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
}
