import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Sidebar from "./Sidebar";
import "@testing-library/jest-dom";

//side bar ukazije 3 tlačitka a 1 kočičku, každa ma link někam

test("Sidebar is visible and toggleDrawer and 3 button and picture of car", () => {
  render(<MemoryRouter><Sidebar toggleDrawer={() => { }} isOpen={true} /></MemoryRouter>);

  expect(screen.getByTestId('side-bar')).toBeVisible();
  expect(screen.getByTestId('cat')).toBeVisible();
  expect(screen.getByTestId('VOTE')).toBeVisible();
  expect(screen.getByTestId('BREEDS')).toBeVisible();
  expect(screen.getByTestId('IMAGE/SEARCH')).toBeVisible();
});


test("Test link vote", async () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter initialEntries={["/"]}><Sidebar toggleDrawer={() => { }} isOpen={true} /></MemoryRouter>
  );
  console.log(window.location.pathname)
  await user.click(screen.getByTestId('VOTE'));
  console.log(window.location.pathname)
  await expect(window.location.pathname).toBe("/vote"); // wtf dopiči už proč jsem poříd na / 

});



