"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { vehicleSpecs } from "@/data/vehicleSpecs";
import SpecCard from "./SpecCard";

type NhtsaMake = {
  MakeName: string;
};

type NhtsaModel = {
  Model_Name: string;
};

async function fetchMakes() {
  const response = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch makes");
  }

  const data = await response.json();
  return data.Results.map((item: NhtsaMake) => item.MakeName).filter(Boolean).sort();
}


export default function VehicleSelector() {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");

  const {
    data: makes = [],
    isLoading: isLoadingMakes,
    isError: isMakesError,
  } = useQuery({
    queryKey: ["makes", year],
    queryFn: fetchMakes,
    enabled: Boolean(year),
  });

  const [models, setModels] = useState<string[]>([]);
  const [isLoadingModels, setIsLoadingModels] = useState(false);
  const [modelError, setModelError] = useState(false);





useEffect(() => {
  async function fetchModels() {
    if (!year || !make) {
      setModels([]);
      return;
    }

    setIsLoadingModels(true);
    setModels([]);

    try {
      const response = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${make}/modelyear/${year}?format=json`
      );

      const data = await response.json();

const modelNames = Array.from(
  new Set<string>(
    data.Results.map((item: NhtsaModel) => item.Model_Name).filter(Boolean)
  )
).sort();

      setModels(modelNames);
      setModelError(false);
    } catch (error) {
      console.error("Failed to fetch models:", error);
      setModels([]);
      setModelError(true);
    } finally {
      setIsLoadingModels(false);
    }
  }

  fetchModels();
}, [year, make]);

const selectedVehicleSpec = vehicleSpecs.find(
  (vehicle) =>
    vehicle.year === year &&
    vehicle.make.toLowerCase() === make.toLowerCase() &&
    vehicle.model.toLowerCase() === model.toLowerCase()
);



  return (
    <section className="mx-auto mt-8 max-w-5xl rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-[0_18px_45px_-28px_rgba(15,23,42,0.42)] backdrop-blur-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_24px_55px_-28px_rgba(15,23,42,0.45)] sm:p-8">
      <div className="mb-7">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          AutoSpec Lookup
        </p>

        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Select a Vehicle
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
          Choose a year, make, and model to begin building the vehicle spec
          card.
        </p>
      </div>

      <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">Year</span>
          <select
            value={year}
            onChange={(event) => {
              setYear(event.target.value);
              setMake("");
              setModel("");
              setModelError(false);
            }}
            className="h-11 rounded-xl border border-slate-300 bg-white px-3 text-slate-900 shadow-sm outline-none transition duration-200 ease-out focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">Select year</option>
            {Array.from(
              { length: new Date().getFullYear() - 1980 + 1 },
              (_, index) => new Date().getFullYear() - index
            ).map((yearOption) => (
              <option key={yearOption} value={yearOption}>
                {yearOption}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">Make</span>
          <select
            value={make}
            onChange={(event) => {
              setMake(event.target.value);
              setModel("");
              setModelError(false);
            }}
            disabled={!year}
            className="h-11 rounded-xl border border-slate-300 bg-white px-3 text-slate-900 shadow-sm outline-none transition duration-200 ease-out disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
           <option value="">
            {isLoadingMakes ? "Loading makes..." : "Select make"}
          </option>

          {makes.map((makeName: string, index: number) => (
            <option key={`${makeName}-${index}`} value={makeName}>
              {makeName}
            </option>
          ))}
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">Model</span>
          <select
            value={model}
            onChange={(event) => setModel(event.target.value)}
            disabled={!make}
            className="h-11 rounded-xl border border-slate-300 bg-white px-3 text-slate-900 shadow-sm outline-none transition duration-200 ease-out disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
          <option value="">
              {isLoadingModels ? "Loading models..." : "Select model"}
            </option>

           {models.map((modelName: string, index: number) => (
            <option key={`${modelName}-${index}`} value={modelName}>
              {modelName}
            </option>
          ))}
          </select>
        </label>
        {modelError && (
          <p className="md:col-span-3 text-sm text-red-600">
            Unable to load vehicle models. Please try again.
          </p>
        )}
        {isMakesError && (
          <p className="md:col-span-3 text-sm text-red-600">
            Unable to load vehicle makes. Please try again.
          </p>
        )}
      </div>

{selectedVehicleSpec && (
  <SpecCard vehicle={selectedVehicleSpec} />
)}
    </section>
  );
}