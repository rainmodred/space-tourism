import React from 'react';
import { useTabs } from '../useTabs';
import styles from './TabList.module.css';

function nextTab(selectedTabIndex, tabsCount) {
  return selectedTabIndex + 1 < tabsCount ? selectedTabIndex + 1 : 0;
}

function prevTab(selectedTabIndex, tabsCount) {
  return selectedTabIndex - 1 < 0 ? tabsCount - 1 : selectedTabIndex - 1;
}

export function TabList({ children }) {
  const { selectedTabIndex, orientation, onSelect } = useTabs();

  const isHorizontal = orientation === 'horizontal';

  const tabsCount = React.Children.count(children);

  function handleKeyDown(e) {
    if (e.key === 'ArrowRight' && isHorizontal) {
      onSelect(nextTab(selectedTabIndex, tabsCount));
    }

    if (e.key === 'ArrowLeft' && isHorizontal) {
      onSelect(prevTab(selectedTabIndex, tabsCount));
    }

    if (e.key === 'ArrowUp' && !isHorizontal) {
      onSelect(prevTab(selectedTabIndex, tabsCount));
    }

    if (e.key === 'ArrowDown' && !isHorizontal) {
      onSelect(nextTab(selectedTabIndex, tabsCount));
    }

    if (e.key === 'Home') {
      onSelect(0);
    }

    if (e.key === 'End') {
      onSelect(tabsCount - 1);
    }
  }

  return (
    <div
      data-tab-list=""
      role="tablist"
      onKeyDown={handleKeyDown}
      className={`${styles.tabList} ${
        orientation === 'vertical' ? styles.vertical : ''
      }`}
    >
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { tabIndex: index }),
      )}
    </div>
  );
}
