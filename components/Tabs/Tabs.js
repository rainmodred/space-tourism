import { useEffect, useState } from 'react';
import { TabsProvider } from './useTabs';
import styles from './Tabs.module.css';

export function Tabs({ children, orientation = 'horizontal', onChange }) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  function handleSelect(index) {
    setSelectedTabIndex(index);
  }

  useEffect(() => {
    if (!onChange || typeof onChange !== 'function') {
      return;
    }
    onChange(selectedTabIndex);
  }, [selectedTabIndex, onChange]);

  return (
    <TabsProvider
      value={{ selectedTabIndex, orientation, onSelect: handleSelect }}
    >
      <div
        data-tabs=""
        className={`${styles.tabs} ${
          orientation === 'vertical' ? styles.vertical : ''
        }`}
      >
        {children}
      </div>
    </TabsProvider>
  );
}
