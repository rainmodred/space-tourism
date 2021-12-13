import { useEffect, useRef } from 'react';
import { makeId, useTabs } from '../useTabs';
import styles from './Tab.module.css';

export function Tab({ children, tabIndex }) {
  const { selectedTabIndex, onSelect } = useTabs();

  const ref = useRef(null);

  const isSelected = tabIndex === selectedTabIndex;

  useEffect(() => {
    if (tabIndex === selectedTabIndex) {
      ref.current.focus();
    }
  }, [selectedTabIndex, tabIndex]);

  return (
    <button
      onClick={() => onSelect(tabIndex)}
      data-tab=""
      data-selected={isSelected ? '' : undefined}
      aria-selected={isSelected}
      role="tab"
      aria-controls={makeId('tab', tabIndex)}
      tabIndex={isSelected ? 0 : -1}
      className={`${isSelected ? styles.selected : ''}`}
      ref={ref}
    >
      {children}
    </button>
  );
}
