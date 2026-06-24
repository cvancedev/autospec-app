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
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-4">
        <h3 className="text-base font-semibold text-slate-900">Parts Checklist</h3>
        <p className="mt-1 text-sm text-slate-600">
          Track required parts and mark them complete during the job.
        </p>
      </div>

      <div className="mb-4 flex flex-col gap-2 sm:flex-row">
        <input
          type="text"
          value={newPartName}
          onChange={handlePartNameChange}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleAddPart();
            }
          }}
          placeholder="Add a part (ex: front brake pads)"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />

        <button
          type="button"
          onClick={handleAddPart}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {parts.map((part) => (
          <li
            key={part.id}
            className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-2"
          >
            <input
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
          </li>
        ))}
      </ul>

      {parts.length === 0 && (
        <p className="mt-3 text-sm text-slate-500">No parts added yet.</p>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={handleClearCompleted}
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Clear Completed
        </button>

        <button
          type="button"
          onClick={handleClearAll}
          className="rounded-lg border border-red-300 px-3 py-2 text-sm font-medium text-red-700 transition hover:bg-red-50"
        >
          Clear All
        </button>
      </div>
    </section>
  );
}