import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("App renders without crashing", () => {
  window.location.hash = "#/admin";
  render(<App />);
});

// test("App applies dark theme styles", () => {
//   window.location.hash = "#/admin";
//   render(<App />);
//   expect(document.body.style.backgroundColor).toBe("rgb(24, 24, 24)");
//   expect(document.body.style.color).toBe("rgb(241, 241, 241)");
// });
