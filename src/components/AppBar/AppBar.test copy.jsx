import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AppBar from "./AppBar";
import "@testing-library/jest-dom";

test("AppBar is visible ", () => {
  render(<AppBar toggleDrawer={false} />);

  expect(screen.getByTestId('app-bar')).toBeVisible();
});



test("clicking the AppBar will trigger toggleDrawer with true", async () => {
  const toggleDrawer = jest.fn();
  const user = userEvent.setup();
  render(<AppBar toggleDrawer={toggleDrawer} />);

  await user.click(screen.getByTestId('app-bar'));
  expect(toggleDrawer).toHaveBeenCalledTimes(1);
  expect(toggleDrawer).toHaveBeenCalledWith(true);
});
