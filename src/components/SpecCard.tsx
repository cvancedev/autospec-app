"use client";

import { useState } from "react";
import { VehicleSpec } from "@/types/vehicle";

type SpecCardProps = {
  vehicle: VehicleSpec;
};

export default function SpecCard({
  vehicle,
}: SpecCardProps) {
  const [activeTab, setActiveTab] = useState<
    "engine" | "filters" | "fluids"
  >("engine");

  return (
    <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">
        {vehicle.year} {vehicle.make} {vehicle.model}
      </h2>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => setActiveTab("engine")}
          className="rounded-lg border px-4 py-2"
        >
          Engine
        </button>

        <button
          onClick={() => setActiveTab("filters")}
          className="rounded-lg border px-4 py-2"
        >
          Filters
        </button>

        <button
          onClick={() => setActiveTab("fluids")}
          className="rounded-lg border px-4 py-2"
        >
          Fluids
        </button>
      </div>

      <div className="mt-6">
        {activeTab === "engine" && (
          <div>
            <p>
              <strong>Size:</strong>{" "}
              {vehicle.engine.size}
            </p>

            <p>
              <strong>Horsepower:</strong>{" "}
              {vehicle.engine.horsepower}
            </p>

            <p>
              <strong>Torque:</strong>{" "}
              {vehicle.engine.torque}
            </p>
          </div>
        )}

        {activeTab === "filters" && (
          <div>
            <p>
              <strong>Air Filter:</strong>{" "}
              {vehicle.filters.airFilter}
            </p>

            <p>
              <strong>Cabin Filter:</strong>{" "}
              {vehicle.filters.cabinFilter}
            </p>
          </div>
        )}

        {activeTab === "fluids" && (
          <div>
            <p>
              <strong>Oil Type:</strong>{" "}
              {vehicle.fluids.oilType}
            </p>

            <p>
              <strong>Oil Capacity:</strong>{" "}
              {vehicle.fluids.oilCapacity}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}