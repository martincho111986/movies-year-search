import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("should render an input", () => {
    render(<App />);
    const linkElement = screen.getByTestId("app-input");
    expect(linkElement).toBeInTheDocument();
  });

  test("should render a button", () => {
    render(<App />);
    const linkElement = screen.getByTestId("submit-button");
    expect(linkElement).toBeInTheDocument();
  });

  test("should render a div with no-data class", () => {
    render(<App />);
    const linkElement = screen.getByTestId("no-result");
    expect(linkElement).toBeInTheDocument();
  });

  test("should render a ul with results if the API call is ok", () => {
    render(<App />);
    const linkElement = screen.queryByTestId("movieList");
    expect(linkElement).not.toBeInTheDocument();
  });
 
});
