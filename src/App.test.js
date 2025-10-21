import { render, screen } from "@testing-library/react";
import App from "./App";

// Test 1: App renders without crashing
test("App renders without crashing", () => {
  render(<App />);
});