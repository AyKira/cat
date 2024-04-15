import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import "@testing-library/jest-dom";
import { MemoryRouter } from 'react-router-dom';





test('Drawer toggles visibility correctly', async () => {
  const user = userEvent.setup();
  const { debug } = render(<Website />);

  // Open the Drawer
  await user.click(screen.getByTestId('app-bar'));
  expect(screen.getByTestId('side-bar')).not.toHaveAttribute('aria-hidden', 'true');


  // Close the Drawer
  debug(); // tohle je bullshit proč se drawner neschova ale je misto toho hidden
  await user.click(screen.getByTestId('app-bar'));
  expect(screen.getByTestId('side-bar')).toHaveAttribute('aria-hidden', 'true');

  // Open the Drawer last time
  await user.click(screen.getByTestId('app-bar'));
  expect(screen.getByTestId('side-bar')).not.toHaveAttribute('aria-hidden', 'true');

});

// App.test.jsx


test('navigates to /vote', async () => {
  const user = userEvent.setup();

  //nechapu pro4 se to to tadz sekne na provideru
  render(
    <MemoryRouter initialEntries={['/']}>
      <App useInternalRouter={false} />
    </MemoryRouter>
  );

  await user.click(screen.getByTestId('app-bar'));
  await user.click(screen.getByTestId('VOTE'));


  expect(screen.getByText('SAVE IT!')).toBeInTheDocument();
});

