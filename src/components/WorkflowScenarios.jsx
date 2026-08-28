import { motion } from "motion/react";
import {
  ArrowRight,
  ClipboardList,
  FileCheck2,
  FileText,
  UserRoundCheck,
} from "lucide-react";

const scenarios = [
  {
    number: "01",
    title: "Client inquiry intake",
    problem:
      "New requests arrive through forms, emails, and direct messages with inconsistent details and unclear ownership.",
    workflow:
      "One structured intake captures the essentials, categorizes the request, prepares a summary, and routes it to the right person.",
    outcome: "Faster first response with less manual sorting.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Content approval",
    problem:
      "Feedback is scattered across messages, documents, and meetings, making it hard to know what is approved.",
    workflow:
      "A central review queue tracks the asset, reviewer, status, feedback, deadline, and next required action.",
    outcome: "Clear approvals and fewer missed revisions.",
    icon: FileCheck2,
  },
  {
    number: "03",
    title: "Weekly reporting",
    problem:
      "Teams spend valuable time copying metrics, collecting updates, and formatting the same report every week.",
    workflow:
      "Connected inputs gather the needed data and prepare a structured report draft for a person to review and finalize.",
    outcome: "More time interpreting results instead of compiling them.",
    icon: FileText,
  },
  {
    number: "04",
    title: "Candidate review",
    problem:
      "Hiring teams manually compare resumes, notes, and role requirements across multiple disconnected sources.",
    workflow:
      "A structured candidate record organizes submitted information, highlights relevant criteria, and prepares a review-ready summary.",
    outcome: "A more consistent starting point for human decisions.",
    icon: UserRoundCheck,
  },
];

const WorkflowScenarios = () => {
  return (
    <section
      id="examples"
      className="border-t border-white/10 bg-[#0a101b] px-5 py-20 text-slate-100 sm:px-8 md:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Workflow scenarios
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              Examples of work that can move with less friction.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-2xl text-lg leading-8 text-slate-400"
          >
            These conceptual scenarios show how a clearer intake, structured
            context, and responsible automation can improve repeatable work.
            They are examples of workflow thinking, not client case studies.
          </motion.p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {scenarios.map((scenario, index) => {
            const Icon = scenario.icon;

            return (
              <motion.article
                key={scenario.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.25 }}
                className="rounded-2xl border border-white/10 bg-slate-950/50 p-6"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="font-mono text-xs text-emerald-300">
                    {scenario.number}
                  </span>

                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                </div>

                <h3 className="mt-10 text-2xl font-semibold tracking-[-0.03em] text-white">
                  {scenario.title}
                </h3>

                <div className="mt-6 grid gap-5 border-y border-white/10 py-6">
                  <div>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      The friction
                    </p>

                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      {scenario.problem}
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      The workflow
                    </p>

                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {scenario.workflow}
                    </p>
                  </div>
                </div>

                <p className="mt-6 flex items-start gap-2 text-sm font-medium leading-6 text-emerald-200">
                  <ArrowRight
                    size={17}
                    className="mt-0.5 shrink-0 text-emerald-300"
                    aria-hidden="true"
                  />
                  {scenario.outcome}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkflowScenarios;
