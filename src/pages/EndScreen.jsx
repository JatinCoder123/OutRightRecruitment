import { motion } from "framer-motion";

export default function EndScreen() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-2xl bg-[var(--color-surface)] rounded-2xl shadow-lg p-6 sm:p-10 relative overflow-hidden text-center"
      >
        {/* Animated glow behind */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] blur-3xl"
        />

        <div className="relative z-10">
          {/* Thank you message */}
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            🎉 Thank You!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-300 text-sm sm:text-base md:text-lg mb-6"
          >
            You’ve successfully completed the assessment. Our team will
            carefully review your responses, and we’ll get back to you shortly.
            🚀
          </motion.p>

          {/* Subtle closing note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-[var(--color-primary)] font-medium text-sm sm:text-base"
          >
            Wishing you the best of luck ahead! 🌟
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
