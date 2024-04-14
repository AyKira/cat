import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import "@testing-library/jest-dom";








test("Sidebar is visible and 3 button and picture of car", () => {
  render(<MemoryRouter><Sidebar isOpen={true} /></MemoryRouter>);

  expect(screen.getByTestId('side-bar')).toBeVisible();
  expect(screen.getByTestId('cat')).toBeVisible();
  expect(screen.getByTestId('VOTE')).toBeVisible();
  expect(screen.getByTestId('BREEDS')).toBeVisible();
  expect(screen.getByTestId('IMAGE/SEARCH')).toBeVisible();
});

test('toggleDrawer sjould be called after clicking on buttons', async () => {
  const toggleDrawer = jest.fn();
  const user = userEvent.setup();

  render(
    <MemoryRouter>
      <Sidebar isOpen={true} toggleDrawer={toggleDrawer} />
    </MemoryRouter>
  );

  // kliknu na tlačítko
  await user.click(screen.getByTestId('VOTE'));

  // it should close
  expect(toggleDrawer).toHaveBeenCalledTimes(1);
  // expect(screen.getAllByTestId("side-bar")).toBeVisible(false); proč tenhle test nefunguje
});








