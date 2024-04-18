import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import "@testing-library/jest-dom";

describe('component SideBar', () => {
  test("is visible and 3 button and picture of car", () => {
    render(<BrowserRouter><Sidebar isOpen={true} /></BrowserRouter>);

    expect(screen.getByTestId('side-bar')).toBeVisible();
    expect(screen.getByTestId('cat')).toBeVisible();
    expect(screen.getByTestId('VOTE')).toBeVisible();
    expect(screen.getByTestId('BREEDS')).toBeVisible();
    expect(screen.getByTestId('IMAGE/SEARCH')).toBeVisible();
  });

  test('toggleDrawer should be called after clicking on buttons', async () => {
    const toggleDrawer = jest.fn();
    const user = userEvent.setup();

    render(
      <BrowserRouter><Sidebar isOpen={true} toggleDrawer={toggleDrawer} /></BrowserRouter>);

    // kliknu na tlačítko
    await user.click(screen.getByTestId('VOTE'));

    // it should close
    expect(toggleDrawer).toHaveBeenCalledTimes(1);
    // expect(screen.getAllByTestId("side-bar")).toBeVisible(false); proč tenhle test nefunguje když kliknu na button
  });

  test('is not rendered when isOpen=false', () => {
    render(
      <BrowserRouter><Sidebar isOpen={false} toggleDrawer={() => { }} /></BrowserRouter>
    );

    expect(screen.queryAllByTestId("side-bar")).toHaveLength(0);
  });
});









