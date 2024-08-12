import React from "react";
import { render } from "@testing-library/react";
import App from "@/App";

jest.mock("@/TestComponent", () => {
  return jest.fn(() => <div>Mocked Component</div>);
});

const mockedClasses = {
  layout: "mock-layout-class",
};

describe("App", () => {
  it("should render APP correctly", () => {
    const { container, getByText, debug } = render(
      <App classes={mockedClasses} />
    );
    const element = container.querySelector("div");
    debug();
    expect(element).toHaveClass("mock-layout-class");
    expect(getByText("Mocked Component")).toBeInTheDocument();
  });
});
