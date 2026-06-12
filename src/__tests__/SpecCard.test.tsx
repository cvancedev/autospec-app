import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SpecCard from "@/components/SpecCard";
import { vehicleSpecs } from "@/data/vehicleSpecs";

describe("SpecCard", () => {
  it("renders the SpecCard component", () => {
    render(<SpecCard vehicle={vehicleSpecs[0]} />);

    expect(screen.getByText(/engine/i)).toBeInTheDocument();
  });
});