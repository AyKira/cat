import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Sidebar from "./Sidebar";
import "@testing-library/jest-dom";

test("Sidebar is visible and toggleDrawer i called with false  ", async () => {
  const toggleDrawer = jest.fn();
  const user = userEvent;
  const { getByTestId } = render(<Sidebar toggleDrawer={toggleDrawer} isOpen={true} />);
  // jak zkontroluju že je sidebar otevřený? 
  
  const sideBar = getByTestId("side-bar");

  expect(sideBar).toBeVisible();

  await user.click(sideBar);
  expect(toggleDrawer).toHaveBeenCalledTimes(1);
  expect(toggleDrawer).toHaveBeenCalledWith(false);
});
