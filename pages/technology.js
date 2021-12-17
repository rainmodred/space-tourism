import { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from '../styles/technology.module.css';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';

const images = ['vehicle-image', 'spaceport-image', 'capsule-image'];

export default function Technology() {
  const [imageIndex, setImageIndex] = useState(0);

  const [orientation, setOriientation] = useState('vertical');

  useEffect(() => {
    let { matches } = window.matchMedia('(max-width: 768px)');
    console.log(matches);
    if (matches) {
      setOriientation('horizontal');
    }
  }, []);

  function onChange(index) {
    setImageIndex(index);
  }

  const imageClasses = classNames(styles.imageWrapper, images[imageIndex]);

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
        <span aria-hidden="true" className="heading-number">
          03
        </span>
        SPACE LAUNCH 101
      </h1>

      <div className={imageClasses}></div>

      <div className={styles.tabsWrapper}>
        <Tabs onChange={onChange} orientation={orientation}>
          <TabList>
            <Tab>1</Tab>
            <Tab>2</Tab>
            <Tab>3</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p className={classNames('color-light', 'letter-spacing-2')}>
                THE TERMINOLOGY…
              </p>
              <h2
                className={classNames(
                  'fs-3xl',
                  'uppercase',
                  'fw-400',
                  'ff-Bellefair',
                  'lh-1',
                  styles.tabPanelHeading,
                )}
              >
                LAUNCH VEHICLE
              </h2>

              <p
                className={classNames('fs-lg', 'color-light', styles.infoText)}
              >
                A launch vehicle or carrier rocket is a rocket-propelled vehicle
                used to carry a payload from Earth's surface to space, usually
                to Earth orbit or beyond. Our WEB-X carrier rocket is the most
                powerful in operation. Standing 150 metres tall, it's quite an
                awe-inspiring sight on the launch pad!
              </p>
            </TabPanel>
            <TabPanel>
              <p className={classNames('color-light', 'letter-spacing-2')}>
                THE TERMINOLOGY…
              </p>
              <h2
                className={classNames(
                  'fs-3xl',
                  'uppercase',
                  'fw-400',
                  'ff-Bellefair',
                  'lh-1',
                  styles.tabPanelHeading,
                )}
              >
                SPACEPORT
              </h2>

              <p
                className={classNames('fs-lg', 'color-light', styles.infoText)}
              >
                A spaceport or cosmodrome is a site for launching (or receiving)
                spacecraft, by analogy to the seaport for ships or airport for
                aircraft. Based in the famous Cape Canaveral, our spaceport is
                ideally situated to take advantage of the Earth’s rotation for
                launch.
              </p>
            </TabPanel>
            <TabPanel>
              <p className={classNames('color-light', 'letter-spacing-2')}>
                THE TERMINOLOGY…
              </p>
              <h2
                className={classNames(
                  'fs-3xl',
                  'uppercase',
                  'fw-400',
                  'ff-Bellefair',
                  'lh-1',
                  styles.tabPanelHeading,
                )}
              >
                SPACE CAPSULE
              </h2>

              <p
                className={classNames('fs-lg', 'color-light', styles.infoText)}
              >
                A space capsule is an often-crewed spacecraft that uses a
                blunt-body reentry capsule to reenter the Earth's atmosphere
                without wings. Our capsule is where you'll spend your time
                during the flight. It includes a space gym, cinema, and plenty
                of other activities to keep you entertained.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
}
