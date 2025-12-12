import Link from "next/link";
import { buildTagline } from "../lib/tagline";

const featureCards = [
  {
    title: "Rapid Experiments",
    description:
      "Spin up new product explorations instantly and iterate with confidence."
  },
  {
    title: "Autonomous Decisions",
    description:
      "Delegate planning to AI agents that execute high-leverage actions safely."
  },
  {
    title: "Shared Context",
    description:
      "Keep your team aligned with persistent knowledge that updates live."
  }
];

export default function HomePage() {
  const tagline = buildTagline("Agentic Playground");

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-20 px-6 py-16">
      <header className="flex flex-col gap-6 text-center">
        <span className="mx-auto inline-flex items-center rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
          {tagline}
        </span>
        <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
          Test Bold Ideas With Confidence
        </h1>
        <p className="text-pretty text-lg text-slate-300 md:text-xl">
          Launch autonomous experiments, measure outcomes instantly, and move
          faster than ever. This sandbox showcases a starter template ready for
          your next big test.
        </p>
        <div className="mx-auto flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Link
            href="#get-started"
            className="rounded-full bg-emerald-400 px-6 py-3 text-base font-medium text-slate-950 transition hover:bg-emerald-300"
          >
            Get Started
          </Link>
          <Link
            href="#why"
            className="rounded-full border border-slate-700 px-6 py-3 text-base font-medium text-slate-100 transition hover:border-slate-500"
          >
            Explore Features
          </Link>
        </div>
      </header>

      <section
        id="why"
        className="grid gap-6 md:grid-cols-3"
        aria-labelledby="features-title"
      >
        <h2 id="features-title" className="sr-only">
          Feature Highlights
        </h2>
        {featureCards.map((card) => (
          <article
            key={card.title}
            className="flex flex-col gap-3 rounded-3xl border border-slate-800 bg-slate-900/60 px-6 py-8"
          >
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="text-sm text-slate-300">{card.description}</p>
          </article>
        ))}
      </section>

      <section
        id="get-started"
        className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-10"
      >
        <h2 className="text-3xl font-semibold">Kick Off Your Next Test</h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          Use this template as a launchpad. Swap in your experiment detail,
          connect analytics, and deploy to Vercel in minutes. The structure is
          intentionally minimal so you can focus on validating what matters.
        </p>
      </section>

      <footer className="flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-6 text-sm text-slate-500 md:flex-row">
        <span>© {new Date().getFullYear()} Agentic Lab</span>
        <Link
          href="https://vercel.com"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-slate-300"
        >
          Deployed on Vercel
        </Link>
      </footer>
    </main>
  );
}
