import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const outcomes = [
  "Reduce repetitive admin work",
  "Connect tools your team already uses",
  "Start with one high-impact workflow",
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#070b12] px-5 pb-20 pt-16 text-slate-100 sm:px-8 sm:pb-24 sm:pt-24 lg:px-12 lg:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:46px_46px]" />
      <div className="pointer-events-none absolute -left-40 top-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-emerald-400/15 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 top-20 -z-10 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-[130px]" />

      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300"
          >
            <Sparkles size={14} aria-hidden="true" />
            AI workflow studio
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300"
          >
            SignalFoundry
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl"
          >
            Make your operations feel{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
              less manual.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
          >
            SignalFoundry helps growing teams turn repetitive work into
            dependable AI-assisted workflows—built around the tools and
            decisions they already use every day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.34 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="#workflow-finder"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              Find your best workflow
              <ArrowDownRight size={17} aria-hidden="true" />
            </a>

            <a
              href="#contact-us"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/40 px-5 py-3.5 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-800/70"
            >
              Book a workflow audit
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-10 grid gap-3 text-sm text-slate-300 sm:grid-cols-3"
          >
            {outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-2">
                <CheckCircle2
                  size={17}
                  className="mt-0.5 shrink-0 text-emerald-400"
                  aria-hidden="true"
                />
                <span>{outcome}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-400/20 via-cyan-400/10 to-transparent blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-2xl shadow-black/40 backdrop-blur sm:p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>

              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                Workflow map
              </span>
            </div>

            <div className="mt-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-300">
                Client intake
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                From request to the right owner.
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
                Capture context once, classify the request, generate a useful
                summary, and route the work to the right person.
              </p>

              <div className="mt-7 grid gap-3">
                {[
                  ["01", "Capture", "Structured request form"],
                  ["02", "Interpret", "AI summary and urgency signals"],
                  ["03", "Route", "Owner, project, and next action"],
                ].map(([number, title, detail]) => (
                  <div
                    key={number}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-slate-950/60 p-4"
                  >
                    <span className="font-mono text-xs text-emerald-300">
                      {number}
                    </span>

                    <div>
                      <p className="text-sm font-semibold text-slate-100">
                        {title}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">{detail}</p>
                    </div>

                    <span className="ml-auto h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.85)]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
