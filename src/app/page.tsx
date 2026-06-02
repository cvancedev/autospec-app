import VehicleSelector from "@/components/VehicleSelector";

export default function Home() {
  return (
    <main>
          <section className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          AutoSpec
        </p>

        <h1 className="mt-3 text-4xl font-bold text-slate-950">
          Fast Vehicle Specs for Working Technicians
        </h1>

        <p className="mt-4 text-slate-600">
          Look up vehicle information quickly with a clean, mobile-friendly
          workflow built for real repair jobs.
        </p>
      </section>

      <VehicleSelector />
    </main>
  );
}