import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AppBar from "./AppBar";
import "@testing-library/jest-dom";

test("AppBar is visible after render", () => {
  render(<AppBar />);
  screen.debug();
  expect(screen.getByTestId('app-bar')).toBeVisible();
});



test("clicking the AppBar will trigger toggleDrawer", async () => {
  const toggleDrawer = jest.fn();
  const user = userEvent.setup();
  render(<AppBar toggleDrawer={toggleDrawer} />);

  await user.click(screen.getByTestId('app-bar'));
  expect(toggleDrawer).toHaveBeenCalledTimes(1);
  expect(toggleDrawer).toHaveBeenCalledWith();

  await user.click(screen.getByTestId('app-bar'));
  expect(toggleDrawer).toHaveBeenCalledTimes(2);
});
