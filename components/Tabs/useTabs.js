import { createContext, useContext } from 'react';

const TabsContext = createContext(null);

export function TabsProvider({ children, value }) {
  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
}

export function useTabs() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('useTabs must be used withing a TabsProvider');
  }

  return context;
}
