"use client";

import { useState } from "react";

export default function VehicleSelector() {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");

  return (
    <section className="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          AutoSpec Lookup
        </p>

        <h2 className="mt-2 text-2xl font-bold text-slate-900">
          Select a Vehicle
        </h2>

        <p className="mt-2 text-sm text-slate-600">
          Choose a year, make, and model to begin building the vehicle spec
          card.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">Year</span>
          <select
            value={year}
            onChange={(event) => {
              setYear(event.target.value);
              setMake("");
              setModel("");
            }}
            className="rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">Select year</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">Make</span>
          <select
            value={make}
            onChange={(event) => {
              setMake(event.target.value);
              setModel("");
            }}
            disabled={!year}
            className="rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">Select make</option>
            <option value="Toyota">Toyota</option>
            <option value="Ford">Ford</option>
            <option value="Honda">Honda</option>
            <option value="Chevrolet">Chevrolet</option>
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">Model</span>
          <select
            value={model}
            onChange={(event) => setModel(event.target.value)}
            disabled={!make}
            className="rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">Select model</option>
            <option value="Camry">Camry</option>
            <option value="F-150">F-150</option>
            <option value="Civic">Civic</option>
            <option value="Silverado">Silverado</option>
          </select>
        </label>
      </div>

      {year && make && model && (
        <div className="mt-6 rounded-xl bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-700">
            Selected Vehicle
          </p>

          <p className="mt-1 text-lg font-bold text-slate-900">
            {year} {make} {model}
          </p>
        </div>
      )}
    </section>
  );
}