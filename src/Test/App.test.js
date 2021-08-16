import React from 'react';
import App from '../App';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

test("header renders with correct text", () => {
    const { getByTestId } = render(<App />);
    const headerEl = getByTestId("header");

    expect(headerEl.textContent).toBe("Online-biblioteka");
})

test("Login renders correctly", () => {
    const { getByTestId } = render(<App />);
    const buttonEl = getByTestId("loginBtn");

    expect(buttonEl.textContent).toBe("Log in");
})

test("Logout renders correcty", () => {
    const { getByTestId } = render(<App />);
    const buttonEl = getByTestId("logoutBtn");

    expect(buttonEl.textContent).toBe("Logout");
})