import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  RotateCcw,
  Send,
} from "lucide-react";

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  function resetForm() {
    setIsSubmitted(false);
  }

  return (
    <section
      id="contact-us"
      className="border-t border-white/10 bg-[#070b12] px-5 py-20 text-slate-100 sm:px-8 md:py-28 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Start a conversation
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            Bring us the workflow that is slowing your team down.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Tell us where work gets repeated, delayed, or lost between tools. We
            will help you identify a practical first system to improve.
          </p>

          <div className="mt-10 space-y-4">
            {[
              "A focused review of your workflow and tools",
              "A practical first automation opportunity",
              "A clear recommendation—not a generic AI pitch",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-slate-300">
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-emerald-300"
                  aria-hidden="true"
                />
                <span className="leading-7">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="mailto:contact@signalfoundry.com"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
          >
            <Mail size={17} aria-hidden="true" />
            contact@signalfoundry.com
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>

          <p className="mt-4 max-w-md text-xs leading-5 text-slate-500">
            Portfolio concept: this form demonstrates the contact experience and
            does not send data to a live inbox.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-3xl border border-white/10 bg-slate-900/65 p-5 shadow-2xl shadow-black/25 sm:p-8"
        >
          {!isSubmitted ? (
            <form onSubmit={onSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold text-slate-200">
                    Your name
                  </span>

                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Jane Smith"
                    required
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/15"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-slate-200">
                    Work email
                  </span>

                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="jane@company.com"
                    required
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/15"
                  />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="text-sm font-semibold text-slate-200">
                  Company or team
                </span>

                <input
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Company name"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/15"
                />
              </label>

              <label className="mt-5 block">
                <span className="text-sm font-semibold text-slate-200">
                  What workflow needs attention?
                </span>

                <select
                  name="workflow"
                  defaultValue=""
                  required
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/15"
                >
                  <option value="" disabled>
                    Select a workflow
                  </option>
                  <option value="Client intake">Client intake</option>
                  <option value="Internal knowledge">Internal knowledge</option>
                  <option value="Reporting and updates">
                    Reporting and updates
                  </option>
                  <option value="Customer support">Customer support</option>
                  <option value="Something else">Something else</option>
                </select>
              </label>

              <label className="mt-5 block">
                <span className="text-sm font-semibold text-slate-200">
                  Tell us what is happening
                </span>

                <textarea
                  name="message"
                  rows={6}
                  placeholder="Describe the repeated task, tools involved, and where your team gets stuck."
                  required
                  className="mt-2 w-full resize-y rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-slate-600 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/15"
                />
              </label>

              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-300"
              >
                Prepare workflow request
                <Send size={17} aria-hidden="true" />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex min-h-[32rem] flex-col justify-center"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                <CheckCircle2 size={27} aria-hidden="true" />
              </span>

              <p className="mt-8 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Request prepared
              </p>

              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
                Thanks for sharing the workflow.
              </h3>

              <p className="mt-5 max-w-lg text-lg leading-8 text-slate-400">
                This portfolio form demonstrates a completed request state. It
                does not transmit your information or send a live message.
              </p>

              <button
                type="button"
                onClick={resetForm}
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl border border-slate-700 px-5 py-3.5 text-sm font-semibold text-slate-300 transition hover:border-slate-500 hover:bg-white/5 hover:text-white"
              >
                Try another request
                <RotateCcw size={16} aria-hidden="true" />
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
