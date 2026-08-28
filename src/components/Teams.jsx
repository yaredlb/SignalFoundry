import { motion } from "motion/react";
import { CheckCircle2, ListChecks, ShieldCheck, Sparkles } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Clear inputs",
    description:
      "The workflow starts with the right context, captured once in a format people can complete quickly.",
    icon: ListChecks,
  },
  {
    number: "02",
    title: "Useful assistance",
    description:
      "AI supports repeatable tasks such as summarizing, categorizing, and drafting—while people keep decision control.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Responsible handoffs",
    description:
      "Every request has an owner, a clear next action, and the context needed to move work forward.",
    icon: ShieldCheck,
  },
];

const Teams = () => {
  return (
    <section
      id="principles"
      className="border-t border-white/10 bg-slate-950 px-5 py-20 text-slate-100 sm:px-8 md:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Design principles
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              Automation should make work easier to understand.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-2xl text-lg leading-8 text-slate-400"
          >
            A useful workflow is more than a series of tool connections. It
            gives people better context, makes responsibility visible, and keeps
            important decisions reviewable.
          </motion.p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {principles.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <motion.article
                key={principle.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-slate-900/55 p-6"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm text-emerald-300">
                    {principle.number}
                  </span>

                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                </div>

                <h3 className="mt-10 text-2xl font-semibold tracking-[-0.03em] text-white">
                  {principle.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {principle.description}
                </p>

                <div className="mt-7 flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2
                    size={17}
                    className="text-emerald-300"
                    aria-hidden="true"
                  />
                  Built around people and process
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Teams;
