import { motion } from "motion/react";
import { Bot, Gauge, GitBranch, Workflow } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Workflow audit",
    description:
      "Find the repeated tasks, slow handoffs, and missing context that create unnecessary operational drag.",
    icon: Gauge,
    outcomes: [
      "A map of the current workflow",
      "Priority areas for improvement",
      "Clear human review points",
    ],
  },
  {
    title: "Automation design",
    description:
      "Turn the strongest opportunities into a practical system with defined triggers, tools, ownership, and exceptions.",
    icon: Workflow,
    outcomes: [
      "A step-by-step automation plan",
      "Tool and integration recommendations",
      "Defined ownership at every handoff",
    ],
  },
  {
    title: "AI-assisted operations",
    description:
      "Use AI where it is genuinely useful: organizing intake, preparing summaries, drafting updates, and routing work.",
    icon: Bot,
    outcomes: [
      "Faster request processing",
      "More consistent operational context",
      "Human approval where it matters",
    ],
  },
  {
    title: "Iteration and handoff",
    description:
      "Document the system, measure its usefulness, and make it understandable for the people responsible for running it.",
    icon: GitBranch,
    outcomes: [
      "Simple operating documentation",
      "A plan for ongoing improvement",
      "A workflow your team can own",
    ],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#070b12] px-5 py-20 text-slate-100 sm:px-8 md:py-28 lg:px-12"
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
              How we help
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              Practical systems for work that repeats.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-2xl text-lg leading-8 text-slate-400"
          >
            We start with the work your team already does, then design
            AI-assisted workflows that reduce friction without removing the
            judgment people need to do good work.
          </motion.p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
