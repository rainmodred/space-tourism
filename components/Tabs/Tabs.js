import { useState } from 'react';
import { TabsProvider } from './useTabs';
import styles from './Tabs.module.css';

export function Tabs({ children, orientation = 'horizontal' }) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  function handleSelect(index) {
    setSelectedTabIndex(index);
  }

  return (
    <TabsProvider
      value={{ selectedTabIndex, orientation, onSelect: handleSelect }}
    >
      <div
        data-tabs=""
        role="tablist"
        className={`${styles.tabs} ${
          orientation === 'vertical' ? styles.vertical : ''
        }`}
      >
        {children}
      </div>
    </TabsProvider>
  );
}
