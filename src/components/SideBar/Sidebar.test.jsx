import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "@testing-library/jest-dom";


jest.mock('react-router-dom', () => ({ ...jest.requireActual('react-router-dom'), useNavigate: jest.fn(), }));

describe('component Sidebar', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("Sidebar is visible after render with all buttons with isOpen={true}", () => {
    render(<BrowserRouter><Sidebar isOpen={true} /></BrowserRouter>);
    expect(screen.getByTestId('side-bar')).toBeVisible();
    expect(screen.getByTestId('cat')).toBeVisible();
    expect(screen.getByTestId('VOTE')).toBeVisible();
    expect(screen.getByTestId('BREEDS')).toBeVisible();
    expect(screen.getByTestId('IMAGE/SEARCH')).toBeVisible();
  });

  test('Sidebar is not visible when isOpen={false}', () => {
    render(<BrowserRouter><Sidebar isOpen={false} /></BrowserRouter>);
    expect(screen.queryByTestId("side-bar")).toBeNull();
  });

  test('Clicking on buttons will trigger navigation and toggleDrawer', async () => {
    let mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    const toggleDrawer = jest.fn();
    const user = userEvent.setup();

    render(
      <BrowserRouter><Sidebar isOpen={true} toggleDrawer={toggleDrawer} /></BrowserRouter>);

    await user.click(screen.getByTestId('CAT-BUTTON'));
    expect(toggleDrawer).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/');

    await user.click(screen.getByTestId('VOTE'));
    expect(toggleDrawer).toHaveBeenCalledTimes(2);
    expect(mockNavigate).toHaveBeenCalledWith('/vote');

    await user.click(screen.getByTestId('BREEDS'));
    expect(toggleDrawer).toHaveBeenCalledTimes(3);
    expect(mockNavigate).toHaveBeenCalledWith('/breeds');

    await user.click(screen.getByTestId('IMAGE/SEARCH'));
    expect(toggleDrawer).toHaveBeenCalledTimes(4);
    expect(mockNavigate).toHaveBeenCalledWith('/favorites');
  });
});
