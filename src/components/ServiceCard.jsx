import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.25 }}
      className="group flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900/55 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-slate-900"
    >
      <div className="flex items-start justify-between gap-5">
        <span className="grid h-11 w-11 place-items-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
          <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
        </span>

        <span className="font-mono text-xs text-slate-600">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-9 text-2xl font-semibold tracking-[-0.03em] text-white">
        {service.title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-slate-400">
        {service.description}
      </p>

      <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
        {service.outcomes.map((outcome) => (
          <p
            key={outcome}
            className="flex items-start gap-2 text-sm leading-6 text-slate-300"
          >
            <CheckCircle2
              size={16}
              className="mt-0.5 shrink-0 text-emerald-300"
              aria-hidden="true"
            />
            <span>{outcome}</span>
          </p>
        ))}
      </div>

      <a
        href="#contact-us"
        className="mt-auto inline-flex items-center gap-2 border-t border-white/10 pt-6 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
      >
        Discuss this workflow
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </motion.article>
  );
};

export default ServiceCard;
