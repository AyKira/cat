import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Sidebar from "./Sidebar";
import "@testing-library/jest-dom";

// že sidebar není vidět když isOpen je false
// že zavření sidebaru vyvolá funkci toggleDrawer
// že kliknutí na jednotlivá tlačítka pushne do historie a vyvolá toggleDrawer (možná jest.spyOn())

test("Sidebar is visible and toggleDrawer i called with false  ", () => {
  render(<MemoryRouter><Sidebar toggleDrawer={() => {}} isOpen={true} /></MemoryRouter>);
  
  expect(screen.getByTestId('side-bar')).toBeVisible();
});
