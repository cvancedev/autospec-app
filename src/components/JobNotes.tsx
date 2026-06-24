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
    <section className="rounded-3xl border border-slate-200/80 bg-white/95 p-5 shadow-[0_18px_45px_-28px_rgba(15,23,42,0.42)] transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_24px_55px_-28px_rgba(15,23,42,0.45)] sm:p-6">
      <div className="mb-4">
        <h3 className="text-base font-semibold text-slate-900 sm:text-lg">Job Notes</h3>
        <p className="mt-1 text-sm text-slate-600">
          Capture service observations, recommendations, and technician notes.
        </p>
      </div>

      <label
        htmlFor="job-notes"
        className="mb-2 block text-sm font-medium text-slate-700"
      >
        Notes
      </label>

      <textarea
        id="job-notes"
        value={notes}
        onChange={handleNotesChange}
        placeholder="Add notes about this job..."
        rows={6}
        className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition duration-200 ease-out placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </section>
  );
}