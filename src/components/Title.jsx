import { motion } from "motion/react";

const Title = ({ eyebrow, title, description, align = "center" }) => {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`flex max-w-3xl flex-col ${alignment}`}
    >
      {eyebrow && (
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default Title;