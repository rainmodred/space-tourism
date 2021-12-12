import React from 'react';

export function TabPanels({ children }) {
  return (
    <div data-tab-panels="">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { tabPanelIndex: index }),
      )}
    </div>
  );
}
