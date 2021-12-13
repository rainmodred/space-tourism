import { makeId, useTabs } from '../useTabs';

export function TabPanel({ children, tabPanelIndex }) {
  const { selectedTabIndex } = useTabs();

  const isSelected = selectedTabIndex === tabPanelIndex;

  const id = makeId('tab', tabPanelIndex);
  return (
    <div
      data-tab-panel=""
      hidden={isSelected ? false : true}
      tabIndex={isSelected ? 0 : -1}
      role="tabpanel"
      id={id}
      aria-labelledby={id}
    >
      {children}
    </div>
  );
}
