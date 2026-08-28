import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion } from "motion/react";

const navigation = [
  { label: "Approach", href: "#services" },
  { label: "Examples", href: "#examples" },
  { label: "Workflow finder", href: "#workflow-finder" },
  { label: "Principles", href: "#principles" },
  { label: "Contact", href: "#contact-us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-white/10 bg-[#070b12]/85 text-slate-100 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="#home"
          className="flex items-center gap-3"
          aria-label="SignalFoundry home"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 font-mono text-sm font-bold text-emerald-300">
            SF
          </span>

          <span>
            <span className="block text-base font-semibold tracking-[-0.02em] text-white">
              SignalFoundry
            </span>
            <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              AI workflow studio
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-400 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact-us"
            className="hidden items-center gap-2 rounded-xl bg-emerald-400 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-emerald-300 sm:inline-flex"
          >
            Book an audit
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white transition hover:border-white/25 hover:bg-white/5 lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#0b1220] px-5 py-4 lg:hidden"
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact-us"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-4 py-3 text-sm font-bold text-slate-950"
            >
              Book a workflow audit
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </nav>
        </div>
      ) : null}
    </motion.header>
  );
};

export default Navbar;
