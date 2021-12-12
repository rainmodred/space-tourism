import { useTabs } from '../useTabs';

export function TabPanel({ children, tabPanelIndex }) {
  const { selectedTabIndex } = useTabs();

  const isSelected = selectedTabIndex === tabPanelIndex;

  return (
    <div
      data-tab-panel="j"
      hidden={isSelected ? false : true}
      tabIndex={isSelected ? 0 : -1}
      role="tabpanel"
    >
      {children}
    </div>
  );
}
