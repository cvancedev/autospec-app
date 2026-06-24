"use client";

import { ChangeEvent, useState } from "react";

const JOB_NOTES_STORAGE_KEY = "job-notes";

export default function JobNotes() {
  const [notes, setNotes] = useState<string>(() => {
    if (typeof window === "undefined") {
      return "";
    }

    return localStorage.getItem(JOB_NOTES_STORAGE_KEY) ?? "";
  });

  const handleNotesChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const nextNotes = event.target.value;
    setNotes(nextNotes);
    localStorage.setItem(JOB_NOTES_STORAGE_KEY, nextNotes);
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <label
        htmlFor="job-notes"
        className="mb-2 block text-sm font-medium text-slate-700"
      >
        Job Notes
      </label>

      <textarea
        id="job-notes"
        value={notes}
        onChange={handleNotesChange}
        placeholder="Add notes about this job..."
        rows={6}
        className="w-full resize-y rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </section>
  );
}