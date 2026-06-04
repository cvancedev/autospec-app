import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import VehicleSelector from "../VehicleSelector";

function renderWithQueryClient() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return render(
    <QueryClientProvider client={queryClient}>
      <VehicleSelector />
    </QueryClientProvider>
  );
}

describe("VehicleSelector", () => {
  it("renders the vehicle selector heading", () => {
    renderWithQueryClient();

    expect(screen.getByText("Select a Vehicle")).toBeInTheDocument();
  });
});