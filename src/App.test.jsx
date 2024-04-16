import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import "@testing-library/jest-dom";
import { MemoryRouter } from 'react-router-dom';

jest.mock('./components/SideBar/Sidebar', () => ({ isOpen, toggleDrawer }) => (<div data-testid="sideBarMock" onClick={toggleDrawer}>{'SideBarMockDiv ' + isOpen.toString()}</div>))

describe('component App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('component SideBar is not displayed when rendered', () => {
    render(<App />);

    expect(screen.getByText('SideBarMockDiv false')).toBeInTheDocument();
  });

  test('component SideBar has prop toggleDrawer toggling isOpen', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByTestId('sideBarMock'));
    expect(screen.getByText('SideBarMockDiv true')).toBeInTheDocument();
    await user.click(screen.getByTestId('sideBarMock'));
    expect(screen.getByText('SideBarMockDiv false')).toBeInTheDocument();
  });

  test('Drawer toggles visibility correctly', async () => {
    const user = userEvent.setup();
    render(<App />);

    screen.debug();
  });

  // App.test.jsx


  test('navigates to /vote', async () => {
    const user = userEvent.setup();

    //nechapu pro4 se to to tadz sekne na provideru
    render(
      <MemoryRouter initialEntries={['/']}>
        <App useInternalRouter={false} />
      </MemoryRouter>
    );

    await user.click(screen.getByTestId('app-bar'));
    await user.click(screen.getByTestId('VOTE'));


    expect(screen.getByText('SAVE IT!')).toBeInTheDocument();
  });
});