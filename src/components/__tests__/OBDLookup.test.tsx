
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import OBDLookup from "../OBDLookup";

describe("OBDLookup", () => {
  it("renders search input", () => {
    render(<OBDLookup />);

    expect(
      screen.getByPlaceholderText(/obd-ii code/i)
    ).toBeInTheDocument();
  });

  it("finds a valid code", () => {
    render(<OBDLookup />);

    fireEvent.change(
      screen.getByPlaceholderText(/obd-ii code/i),
      {
        target: { value: "P0300" },
      }
    );

    expect(
      screen.getByText(/Random\/Multiple Cylinder Misfire/i)
    ).toBeInTheDocument();
  });

  it("shows code not found", () => {
    render(<OBDLookup />);

    fireEvent.change(
      screen.getByPlaceholderText(/obd-ii code/i),
      {
        target: { value: "P9999" },
      }
    );

    expect(
      screen.getByText(/Code not found/i)
    ).toBeInTheDocument();
  });
});