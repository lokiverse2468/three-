import Link from "next/link";

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <header className="relative w-full px-6 py-6 sm:px-12 sm:py-8 lg:px-16">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="inline-flex items-center self-start rounded-full border border-slate-800/60 bg-slate-900/60 px-4 py-2 text-xs uppercase tracking-[0.4em] text-slate-200 transition hover:border-slate-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300"
          >
            Lumen UI
          </Link>
          <nav className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.25em] text-slate-400 sm:justify-end sm:gap-6 sm:text-sm sm:tracking-[0.3em]">
            <Link
              href="/command"
              className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300"
            >
              Command Room
            </Link>
            <Link
              href="/demo"
              className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300"
            >
              Live Demo
            </Link>
            <Link
              href="/ui-kit"
              className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300"
            >
              UI Kit
            </Link>
          </nav>
        </div>
      </header>
      <main className="relative flex min-h-[calc(100vh-6rem)] w-full flex-col">
        {children}
      </main>
    </div>
  );
}

