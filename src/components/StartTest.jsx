import { motion } from "framer-motion";

export default function StartTest({ testDetails, setStart }) {
  if (!testDetails) {
    return (
      <div className="flex justify-center items-center min-h-[80vh] text-xl font-semibold text-[var(--color-text-secondary)]">
        ⚠️ No Test Details Provided
      </div>
    );
  }

  const { name, time, format } = testDetails;

  return (
    <div className="flex flex-col items-center justify-center  bg-[var(--color-bg)] text-[var(--color-text-primary)] px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-[var(--color-surface)] p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-lg text-center"
      >
        {/* Test Name */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold mb-4"
        >
          {name || "Untitled Test"}
        </motion.h1>

        {/* Test Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-3 text-base sm:text-lg mb-6 text-[var(--color-text-secondary)]"
        >
          <p>
            <span className="font-semibold text-[var(--color-text-primary)]">
              ⏳ Duration:
            </span>{" "}
            {time || "N/A"} mins
          </p>
          <p>
            <span className="font-semibold text-[var(--color-text-primary)]">
              📝 Format:
            </span>{" "}
            {format || "N/A"}
          </p>
        </motion.div>

        {/* Start Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={setStart}
          className="px-6 py-3 w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] rounded-lg text-lg font-semibold transition"
        >
          Start Test
        </motion.button>
      </motion.div>
    </div>
  );
}
