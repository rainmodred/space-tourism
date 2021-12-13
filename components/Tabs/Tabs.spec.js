import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tabs, TabList, TabPanel, TabPanels, Tab } from './';
import { makeId } from './useTabs';

describe('Tabs', () => {
  beforeEach(() => {
    render(
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>Panel 1</p>
          </TabPanel>
          <TabPanel>
            <p>Panel 2</p>
          </TabPanel>
          <TabPanel>
            <p>Panel 3</p>
          </TabPanel>
        </TabPanels>
      </Tabs>,
    );
  });
  it('renders', () => {
    expect(
      screen.getByRole('tab', {
        name: /Tab 1/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('tab', {
        name: /Tab 2/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('tab', {
        name: /Tab 3/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText('Panel 1')).toBeVisible();
    expect(screen.getByText('Panel 2')).not.toBeVisible();
    expect(screen.getByText('Panel 3')).not.toBeVisible();
  });

  it('select correct tab with keyboard navigation', () => {
    const tabList = screen.getByRole('tablist');

    const tab1 = screen.getByText('Tab 1');
    const panel1 = screen.getByText('Panel 1');

    const tab2 = screen.getByText('Tab 2');
    const panel2 = screen.getByText('Panel 2');

    const tab3 = screen.getByText('Tab 3');
    const panel3 = screen.getByText('Panel 3');

    userEvent.click(tab1);

    fireEvent.keyDown(tabList, { key: 'ArrowRight', code: 39 });

    expect(tab2).toHaveFocus();
    expect(tab2).toHaveAttribute('aria-selected', 'true');

    expect(panel2).toBeVisible();
    expect(panel1).not.toBeVisible();

    fireEvent.keyDown(tabList, { key: 'ArrowLeft', code: 37 });

    expect(tab1).toHaveFocus();
    expect(tab1).toHaveAttribute('aria-selected', 'true');
    expect(tab2).toHaveAttribute('aria-selected', 'false');

    expect(panel1).toBeVisible();
    expect(panel2).not.toBeVisible();

    fireEvent.keyDown(tabList, { key: 'Home', code: 36 });

    expect(tab1).toHaveFocus();
    expect(tab1).toHaveAttribute('aria-selected', 'true');
    expect(panel1).toBeVisible();

    fireEvent.keyDown(tabList, { key: 'End', code: 37 });

    expect(tab3).toHaveFocus();
    expect(tab3).toHaveAttribute('aria-selected', 'true');
    expect(panel3).toBeVisible();
  });
});

describe('Utils', () => {
  it('makeId returns id', () => {
    expect(makeId('tab', 0)).toBe('tabs--tab--0');
  });
});
