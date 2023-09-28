import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MyAppBar from "./AppBar";
import "@testing-library/jest-dom";

test("AppBar is visible ", () => {
  const toggleDrawer = jest.fn();
  const { getByTestId } = render(<MyAppBar toggleDrawer={toggleDrawer} />);

  const appBar = getByTestId("app-bar");
  expect(appBar).toBeVisible();
});

test("clicking to appbar will trigger toggleDrawer ", async () => {
  const toggleDrawer = jest.fn();
  const user = userEvent;
  const { getByTestId } = render(<MyAppBar toggleDrawer={toggleDrawer} />);
  const appBar = getByTestId("app-bar");

  await user.click(appBar);
  expect(toggleDrawer).toHaveBeenCalledTimes(1);
  expect(toggleDrawer).toHaveBeenCalledWith(true);
});
