import VehicleSelector from "@/components/VehicleSelector";
import JobNotes from "@/components/JobNotes";
import PartsChecklist from "@/components/PartsChecklist";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50/70 px-4 py-10 sm:px-6 sm:py-14">
      <section className="mx-auto max-w-5xl rounded-3xl border border-white/80 bg-white/75 px-6 py-10 text-center shadow-[0_12px_40px_-20px_rgba(15,23,42,0.35)] backdrop-blur-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_20px_55px_-28px_rgba(15,23,42,0.4)] sm:px-10 sm:py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 sm:text-sm">
          AutoSpec Workflow
        </p>

        <h1 className="mt-4 text-balance text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl md:text-5xl">
          Fast Vehicle Specs for Working Technicians
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-7 text-slate-600 sm:text-base">
          Look up vehicle information quickly with a clean, mobile-friendly
          workflow built for real repair jobs.
        </p>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <li className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-blue-100 sm:px-4 sm:text-sm">
            Vehicle Lookup
          </li>
          <li className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-700 transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-sky-100 sm:px-4 sm:text-sm">
            Job Notes
          </li>
          <li className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-emerald-100 sm:px-4 sm:text-sm">
            Parts Checklist
          </li>
          <li className="rounded-full border border-violet-100 bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700 transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-violet-100 sm:px-4 sm:text-sm">
            Tested
          </li>
        </ul>
      </section>

      <VehicleSelector />

      <section className="mx-auto mt-8 max-w-5xl">
        <JobNotes />
      </section>

      <section className="mx-auto mt-8 max-w-5xl">
        <PartsChecklist />
      </section>

      <footer className="mx-auto mt-14 max-w-5xl border-t border-slate-200/80 pt-6 text-center">
        <p className="text-sm font-medium tracking-wide text-slate-500">
          Built with React • Next.js • TypeScript • Tailwind CSS • Jest
        </p>
      </footer>
    </main>
  );
}