import { makeId, useTabs } from '../useTabs';
import styles from './Tab.module.css';

export function Tab({ children, tabIndex }) {
  const { selectedTabIndex, onSelect } = useTabs();

  const isSelected = tabIndex === selectedTabIndex;

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
    >
      {children}
    </button>
  );
}
