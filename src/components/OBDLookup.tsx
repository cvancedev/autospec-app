"use client";

import { useState } from "react";
import { obdCodes } from "@/data/obdCodes";

export default function OBDLookup() {
  const [search, setSearch] = useState("");

  const result = obdCodes.find(
    (code) => code.code.toLowerCase() === search.toLowerCase(),
  );

  return (
    <div className="space-y-4">
      <label htmlFor="obd-code-search" className="block text-sm font-medium text-slate-700">
        OBD-II Code
      </label>
      <input
        id="obd-code-search"
        type="text"
        placeholder="Enter OBD-II code (ex: P0300)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setSearch("");
          }
        }}
        className="w-full border rounded p-2"
      />

      {search && (
        <>
          {result ? (
            <div className="border rounded p-4">
              <h3 className="font-bold">{result.code}</h3>
              <p className="font-semibold">{result.title}</p>
              <p>{result.description}</p>
            </div>
          ) : (
            <div className="text-red-500">Code not found</div>
          )}
        </>
      )}
    </div>
  );
}
