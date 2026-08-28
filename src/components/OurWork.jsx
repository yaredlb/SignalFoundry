import { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileText,
  Lightbulb,
  MessageSquareText,
  RotateCcw,
  SearchCheck,
} from "lucide-react";

const questions = [
  {
    id: "friction",
    label: "Where does your team lose the most time?",
    options: [
      {
        value: "intake",
        title: "Client intake",
        description:
          "Requests arrive incomplete, scattered, or without ownership.",
        icon: FileText,
      },
      {
        value: "knowledge",
        title: "Internal knowledge",
        description:
          "Answers are buried in docs, messages, and tribal knowledge.",
        icon: SearchCheck,
      },
      {
        value: "reporting",
        title: "Reporting & updates",
        description:
          "Teams repeatedly gather, summarize, and share the same status.",
        icon: BarChart3,
      },
      {
        value: "support",
        title: "Customer support",
        description: "Questions need triage before reaching the right person.",
        icon: MessageSquareText,
      },
    ],
  },
  {
    id: "time",
    label: "How much team time does it take each week?",
    options: [
      { value: "low", title: "Under 3 hours" },
      { value: "medium", title: "3–8 hours" },
      { value: "high", title: "8–15 hours" },
      { value: "very-high", title: "15+ hours" },
    ],
  },
  {
    id: "team",
    label: "How large is the team using this workflow?",
    options: [
      { value: "solo", title: "1–5 people" },
      { value: "small", title: "6–20 people" },
      { value: "mid", title: "21–50 people" },
      { value: "large", title: "50+ people" },
    ],
  },
];

const recommendations = {
  intake: {
    title: "Client intake triage",
    description:
      "Create one structured request flow that captures context, generates a useful summary, flags urgency, and routes work to the right owner.",
    deliverables: [
      "Structured intake form",
      "AI-generated request summary",
      "Routing rules and ownership",
    ],
    icon: FileText,
  },
  knowledge: {
    title: "Internal knowledge assistant",
    description:
      "Give your team a focused way to find approved answers, surface relevant documentation, and reduce repeated internal questions.",
    deliverables: [
      "Knowledge-source map",
      "Search and answer workflow",
      "Escalation and feedback loop",
    ],
    icon: SearchCheck,
  },
  reporting: {
    title: "Automated status reporting",
    description:
      "Turn updates from your existing tools into a clear reporting rhythm that summarizes progress, risks, decisions, and next steps.",
    deliverables: [
      "Connected status inputs",
      "AI-generated weekly summary",
      "Stakeholder-ready update format",
    ],
    icon: BarChart3,
  },
  support: {
    title: "Support request triage",
    description:
      "Capture, categorize, summarize, and route incoming support requests so the right person starts with the right context.",
    deliverables: [
      "Request categorization",
      "Priority and sentiment signals",
      "Assignment and response guidance",
    ],
    icon: MessageSquareText,
  },
};

const OurWork = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    friction: "",
    time: "",
    team: "",
  });

  const question = questions[step];
  const isLastStep = step === questions.length - 1;
  const selectedValue = answers[question.id];
  const isComplete = Object.values(answers).every(Boolean);

  const recommendation = useMemo(() => {
    if (!answers.friction) {
      return null;
    }

    return recommendations[answers.friction];
  }, [answers.friction]);

  const RecommendationIcon = recommendation?.icon;

  function selectOption(value) {
    setAnswers((current) => ({
      ...current,
      [question.id]: value,
    }));
  }

  function nextStep() {
    if (!selectedValue) {
      return;
    }

    if (!isLastStep) {
      setStep((current) => current + 1);
    }
  }

  function previousStep() {
    if (step > 0) {
      setStep((current) => current - 1);
    }
  }

  function resetFinder() {
    setStep(0);
    setAnswers({
      friction: "",
      time: "",
      team: "",
    });
  }

  return (
    <section
      id="workflow-finder"
      className="relative isolate overflow-hidden bg-[#070b12] px-5 py-20 text-slate-100 sm:px-8 md:py-28 lg:px-12"
    >
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-[30rem] w-[30rem] rounded-full bg-emerald-400/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[26rem] w-[26rem] rounded-full bg-cyan-400/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Workflow fit finder
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              Find the workflow worth improving first.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-400">
              Answer three quick questions. You will get a practical starting
              point for reducing repeated work—not a vague AI recommendation.
            </p>

            <div className="mt-10 space-y-4">
              {questions.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex items-center gap-3 text-sm ${
                    index === step
                      ? "text-white"
                      : index < step
                        ? "text-emerald-300"
                        : "text-slate-600"
                  }`}
                >
                  <span
                    className={`grid h-7 w-7 place-items-center rounded-full border font-mono text-xs ${
                      index === step
                        ? "border-emerald-400 bg-emerald-400/15 text-emerald-300"
                        : index < step
                          ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                          : "border-white/10 text-slate-600"
                    }`}
                  >
                    {index < step ? "✓" : index + 1}
                  </span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-2xl shadow-black/25 backdrop-blur sm:p-8">
            {!isComplete ? (
              <>
                <div className="border-b border-white/10 pb-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">
                        Step {step + 1} of {questions.length}
                      </p>

                      <h3 className="mt-2 text-2xl font-semibold text-white">
                        {question.label}
                      </h3>
                    </div>

                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                      <Lightbulb size={20} aria-hidden="true" />
                    </span>
                  </div>

                  <div
                    className="mt-5 h-1 overflow-hidden rounded-full bg-white/10"
                    aria-hidden="true"
                  >
                    <motion.div
                      initial={false}
                      animate={{
                        width: `${((step + 1) / questions.length) * 100}%`,
                      }}
                      transition={{ duration: 0.35 }}
                      className="h-full rounded-full bg-emerald-400"
                    />
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {question.options.map((option) => {
                    const Icon = option.icon;
                    const isSelected = selectedValue === option.value;

                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => selectOption(option.value)}
                        className={`rounded-2xl border p-5 text-left transition ${
                          isSelected
                            ? "border-emerald-400 bg-emerald-400/10 shadow-[0_0_0_1px_rgba(52,211,153,0.18)]"
                            : "border-white/10 bg-slate-950/60 hover:border-slate-500 hover:bg-slate-900"
                        }`}
                      >
                        {Icon ? (
                          <span
                            className={`grid h-10 w-10 place-items-center rounded-xl ${
                              isSelected
                                ? "bg-emerald-400 text-slate-950"
                                : "bg-white/5 text-slate-300"
                            }`}
                          >
                            <Icon size={19} aria-hidden="true" />
                          </span>
                        ) : null}

                        <p
                          className={`mt-4 font-semibold ${
                            isSelected ? "text-white" : "text-slate-200"
                          }`}
                        >
                          {option.title}
                        </p>

                        {option.description ? (
                          <p className="mt-2 text-sm leading-6 text-slate-400">
                            {option.description}
                          </p>
                        ) : null}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-7 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={previousStep}
                    disabled={step === 0}
                    className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-400 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Back
                  </button>

                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!selectedValue}
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {isLastStep ? "Get my recommendation" : "Continue"}
                    <ArrowRight size={17} aria-hidden="true" />
                  </button>
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-300">
                      Your best first move
                    </p>

                    <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
                      {recommendation.title}
                    </h3>
                  </div>

                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-400 text-slate-950">
                    {RecommendationIcon && (
                      <RecommendationIcon size={21} aria-hidden="true" />
                    )}
                  </span>
                </div>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  {recommendation.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-400">
                    Focus:{" "}
                    {
                      questions[0].options.find(
                        (option) => option.value === answers.friction,
                      )?.title
                    }
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-400">
                    Time:{" "}
                    {
                      questions[1].options.find(
                        (option) => option.value === answers.time,
                      )?.title
                    }
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-400">
                    Team:{" "}
                    {
                      questions[2].options.find(
                        (option) => option.value === answers.team,
                      )?.title
                    }
                  </span>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {recommendation.deliverables.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-slate-950/65 p-4"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-emerald-300"
                        aria-hidden="true"
                      />
                      <p className="mt-4 text-sm font-medium leading-6 text-slate-200">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#contact-us"
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-emerald-300"
                  >
                    Discuss this workflow
                    <ArrowRight size={17} aria-hidden="true" />
                  </a>

                  <button
                    type="button"
                    onClick={resetFinder}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3.5 text-sm font-semibold text-slate-300 transition hover:border-slate-500 hover:bg-white/5 hover:text-white"
                  >
                    Start again
                    <RotateCcw size={16} aria-hidden="true" />
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
