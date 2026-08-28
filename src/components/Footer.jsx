import { motion } from "motion/react";
import { ArrowUpRight, Mail } from "lucide-react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Approach", href: "#services" },
  { label: "Examples", href: "#examples" },
  { label: "Workflow finder", href: "#workflow-finder" },
  { label: "Principles", href: "#principles" },
  { label: "Contact", href: "#contact-us" },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#05080e] px-5 py-12 text-slate-100 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl"
      >
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1fr_0.6fr_0.8fr]">
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3"
              aria-label="SignalFoundry home"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 font-mono text-sm font-bold text-emerald-300">
                SF
              </span>

              <span>
                <span className="block text-lg font-semibold tracking-[-0.025em] text-white">
                  SignalFoundry
                </span>
                <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  AI workflow studio
                </span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Practical AI-assisted workflow systems for teams that want less
              manual work and more reliable operations.
            </p>

            <a
              href="#contact-us"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
            >
              Book a workflow audit
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Explore
            </p>

            <nav className="mt-5" aria-label="Footer navigation">
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-slate-400 transition hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Start a conversation
            </p>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              Have a repeated task, messy handoff, or workflow bottleneck? Start
              with the process that creates the most friction.
            </p>

            <a
              href="mailto:contact@signalfoundry.com"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
            >
              <Mail size={16} aria-hidden="true" />
              contact@signalfoundry.com
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SignalFoundry. Portfolio concept.</p>

          <p>Built to demonstrate B2B workflow and frontend product design.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
