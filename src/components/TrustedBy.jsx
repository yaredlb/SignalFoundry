import { motion } from "motion/react";
import { Braces, Database, FileText, MessageSquare } from "lucide-react";

const systems = [
  {
    name: "Knowledge",
    description: "Docs and internal answers",
    icon: FileText,
  },
  {
    name: "Communication",
    description: "Requests and handoffs",
    icon: MessageSquare,
  },
  {
    name: "Operations",
    description: "Records and reporting",
    icon: Database,
  },
  {
    name: "Integrations",
    description: "Connected workflow tools",
    icon: Braces,
  },
];

const TrustedBy = () => {
  return (
    <section className="border-y border-white/10 bg-slate-950 px-5 py-10 text-slate-100 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl"
      >
        <div className="grid items-center gap-6 lg:grid-cols-[0.7fr_1.3fr]">
          <p className="max-w-xs text-sm font-medium leading-6 text-slate-400">
            Designed around the systems where work already happens.
          </p>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {systems.map((system, index) => {
              const Icon = system.icon;

              return (
                <motion.div
                  key={system.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-white/10 bg-slate-900/45 p-4"
                >
                  <Icon
                    size={18}
                    className="text-emerald-300"
                    aria-hidden="true"
                  />

                  <p className="mt-4 text-sm font-semibold text-slate-200">
                    {system.name}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {system.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TrustedBy;
