"use client";

import { ChangeEvent, useEffect, useState } from "react";

const PARTS_CHECKLIST_STORAGE_KEY = "parts-checklist";

interface PartChecklistItem {
  id: string;
  name: string;
  completed: boolean;
}

export default function PartsChecklist() {
  const [newPartName, setNewPartName] = useState<string>("");
  const [parts, setParts] = useState<PartChecklistItem[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const savedParts = localStorage.getItem(PARTS_CHECKLIST_STORAGE_KEY);

    if (!savedParts) {
      return [];
    }

    try {
      const parsedParts = JSON.parse(savedParts);
      return Array.isArray(parsedParts) ? parsedParts : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(PARTS_CHECKLIST_STORAGE_KEY, JSON.stringify(parts));
  }, [parts]);

  const handlePartNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewPartName(event.target.value);
  };

  const handleAddPart = () => {
    const trimmedPartName = newPartName.trim();

    if (!trimmedPartName) {
      return;
    }

    const nextParts: PartChecklistItem[] = [
      ...parts,
      {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        name: trimmedPartName,
        completed: false,
      },
    ];

    setParts(nextParts);
    setNewPartName("");
  };

  const handleTogglePart = (id: string) => {
    const nextParts = parts.map((part) =>
      part.id === id ? { ...part, completed: !part.completed } : part,
    );

    setParts(nextParts);
  };

  const handleClearCompleted = () => {
    const nextParts = parts.filter((part) => !part.completed);
    setParts(nextParts);
  };

  const handleClearAll = () => {
    setParts([]);
  };

  return (
    <section className="rounded-3xl border border-slate-200/80 bg-white/95 p-5 shadow-[0_18px_45px_-28px_rgba(15,23,42,0.42)] transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_24px_55px_-28px_rgba(15,23,42,0.45)] sm:p-6">
      <div className="mb-5">
        <h3 className="text-base font-semibold text-slate-900 sm:text-lg">Parts Checklist</h3>
        <p className="mt-1 text-sm text-slate-600">
          Track required parts and mark them complete during the job.
        </p>
      </div>

      <div className="mb-5 flex flex-col gap-2 sm:flex-row">
        <label
          htmlFor="parts-checklist-input"
          className="sr-only"
        >
          Part name
        </label>
        <input
          id="parts-checklist-input"
          type="text"
          value={newPartName}
          onChange={handlePartNameChange}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleAddPart();
            }
          }}
          placeholder="Add a part (ex: front brake pads)"
          className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-900 shadow-sm outline-none transition duration-200 ease-out placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />

        <button
          type="button"
          onClick={handleAddPart}
          className="h-11 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition duration-200 ease-out hover:bg-blue-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2.5">
        {parts.map((part) => (
          <li
            key={part.id}
            className="rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 shadow-sm transition duration-200 ease-out hover:border-slate-300 hover:shadow-md"
          >
            <label
              htmlFor={`part-${part.id}`}
              className="flex cursor-pointer items-center gap-3"
            >
              <input
                id={`part-${part.id}`}
                type="checkbox"
                checked={part.completed}
                onChange={() => handleTogglePart(part.id)}
                className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />

              <span
                className={
                  part.completed ? "text-slate-400 line-through" : "text-slate-800"
                }
              >
                {part.name}
              </span>
            </label>
          </li>
        ))}
      </ul>

      {parts.length === 0 && (
        <p className="mt-3 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-500">
          No parts added yet.
        </p>
      )}

      <div className="mt-5 flex flex-wrap gap-2.5">
        <button
          type="button"
          onClick={handleClearCompleted}
          className="rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm transition duration-200 ease-out hover:bg-slate-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
        >
          Clear Completed
        </button>

        <button
          type="button"
          onClick={handleClearAll}
          className="rounded-xl border border-red-300 bg-white px-3.5 py-2 text-sm font-medium text-red-700 shadow-sm transition duration-200 ease-out hover:bg-red-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-200"
        >
          Clear All
        </button>
      </div>
    </section>
  );
}