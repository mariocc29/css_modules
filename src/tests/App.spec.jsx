import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

jest.mock("../TestComponent", () => {
  return jest.fn(() => <div>Mocked Component</div>);
});

describe("App", () => {
  it("should render APP correctly", () => {
    const { container, getByText } = render(<App />);
    const element = container.querySelector("div");
    expect(element).toHaveClass("layout");
    expect(getByText("Mocked Component")).toBeInTheDocument();
  });
});
