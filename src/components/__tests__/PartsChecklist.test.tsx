import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import PartsChecklist from "../PartsChecklist";

describe("PartsChecklist", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders component", () => {
    render(<PartsChecklist />);

    expect(screen.getByText("Parts Checklist")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Add a part/i),
    ).toBeInTheDocument();
  });

  it("adds a part", () => {
    render(<PartsChecklist />);

    fireEvent.change(screen.getByPlaceholderText(/Add a part/i), {
      target: { value: "Oil Filter" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Add/i }));

    expect(screen.getByText("Oil Filter")).toBeInTheDocument();
  });

  it("toggles completed state", () => {
    render(<PartsChecklist />);

    fireEvent.change(screen.getByPlaceholderText(/Add a part/i), {
      target: { value: "Brake Pads" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Add/i }));

    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkbox.checked).toBe(false);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(false);
  });

  it("clears completed items", () => {
    render(<PartsChecklist />);

    fireEvent.change(screen.getByPlaceholderText(/Add a part/i), {
      target: { value: "Spark Plugs" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Add/i }));

    fireEvent.change(screen.getByPlaceholderText(/Add a part/i), {
      target: { value: "Cabin Filter" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Add/i }));

    const checkboxes = screen.getAllByRole("checkbox") as HTMLInputElement[];
    fireEvent.click(checkboxes[0]);

    fireEvent.click(screen.getByRole("button", { name: /Clear Completed/i }));

    expect(screen.queryByText("Spark Plugs")).not.toBeInTheDocument();
    expect(screen.getByText("Cabin Filter")).toBeInTheDocument();
  });

  it("clears all items", () => {
    render(<PartsChecklist />);

    fireEvent.change(screen.getByPlaceholderText(/Add a part/i), {
      target: { value: "Wiper Blades" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Add/i }));

    fireEvent.change(screen.getByPlaceholderText(/Add a part/i), {
      target: { value: "Air Filter" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Add/i }));

    fireEvent.click(screen.getByRole("button", { name: /Clear All/i }));

    expect(screen.queryByText("Wiper Blades")).not.toBeInTheDocument();
    expect(screen.queryByText("Air Filter")).not.toBeInTheDocument();
    expect(screen.getByText(/No parts added yet/i)).toBeInTheDocument();
  });

  it("verifies localStorage persistence behavior", () => {
    const storedParts = [
      {
        id: "persisted-1",
        name: "Fuel Pump",
        completed: false,
      },
    ];

    localStorage.setItem("parts-checklist", JSON.stringify(storedParts));

    const { unmount } = render(<PartsChecklist />);

    expect(screen.getByText("Fuel Pump")).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText(/Add a part/i), {
      target: { value: "Timing Belt" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Add/i }));

    unmount();
    render(<PartsChecklist />);

    expect(screen.getByText("Fuel Pump")).toBeInTheDocument();
    expect(screen.getByText("Timing Belt")).toBeInTheDocument();

    const saved = localStorage.getItem("parts-checklist");
    expect(saved).not.toBeNull();

    const parsed = JSON.parse(saved as string) as Array<{
      id: string;
      name: string;
      completed: boolean;
    }>;

    expect(parsed).toHaveLength(2);
    expect(parsed.map((item) => item.name)).toEqual(
      expect.arrayContaining(["Fuel Pump", "Timing Belt"]),
    );
  });
});
