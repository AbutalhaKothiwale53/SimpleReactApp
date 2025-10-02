import { render, screen } from "@testing-library/react";
import App from "./App";

// Test 1: App renders without crashing
test("App renders without crashing", () => {
  render(<App />);
});

// Test 2: App renders an element with text 'Home'
test("renders Home text", () => {
  render(<App />);
  expect(screen.getByText(/home/i)).toBeInTheDocument();
});
