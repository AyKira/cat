import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Router, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import "@testing-library/jest-dom";

describe('component SideBar', () => {
  test("Sidebar is visible after render with TRUE", () => {
    render(<MemoryRouter><Sidebar isOpen={true} /></MemoryRouter>);

    expect(screen.getByTestId('side-bar')).toBeVisible();
    expect(screen.getByTestId('cat')).toBeVisible();
    expect(screen.getByTestId('VOTE')).toBeVisible();
    expect(screen.getByTestId('BREEDS')).toBeVisible();
    expect(screen.getByTestId('IMAGE/SEARCH')).toBeVisible();
  });


});









