import React from "react";
import { getByTestId, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import "@testing-library/jest-dom";
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Router, Route, Routes } from 'react-router-dom';


jest.mock('./components/SideBar/Sidebar', () => ({ isOpen, toggleDrawer }) => (<div data-testid="sideBarMock" onClick={toggleDrawer}>{'SideBarMockDiv ' + isOpen.toString()}</div>))
jest.mock('react-router-dom', () => ({ ...jest.requireActual('react-router-dom'), useNavigate: () => jest.fn(), }));

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

    await user.click(screen.getByTestId('sideBarMock'));
    expect(screen.getByText('SideBarMockDiv true')).toBeInTheDocument();
    await user.click(screen.getByTestId('sideBarMock'));
    expect(screen.getByText('SideBarMockDiv false')).toBeInTheDocument();
  });
  test.only('clicking on each Sidebar button navigates correctly', async () => {
    const user = userEvent.setup();
    render(<App />);

    // jak ted dál? nedostanu se k buttonům v SideBaru, protože je to mocknutý
    await user.click(screen.getByTestId('app-bar'));
    screen.debug();



  });




});