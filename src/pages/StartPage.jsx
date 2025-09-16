import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCandidate } from "../store/slices/candidateSlice";
import {
  getAptiQuestion,
  getDSAQuestion,
} from "../store/slices/questionsSlice";
import { useEffect } from "react";
import { checkSubmission } from "../store/slices/resultSlice";
export default function StartPage() {
  const navigate = useNavigate();
  const { candidate } = useSelector((state) => state.candidate);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!candidate || Object.keys(candidate).length === 0) {
      const id = localStorage.getItem("candidate_id");
      if (id) dispatch(getCandidate(id));
      return; // exit early
    }

    // candidate is ready
    dispatch(getAptiQuestion(candidate.role_id));
    dispatch(getDSAQuestion(candidate.role_id));
    dispatch(checkSubmission(candidate.id, "apti_result"));
    dispatch(checkSubmission(candidate.id, "role_result"));
    dispatch(checkSubmission(candidate.id, "dsa_result"));
  }, [candidate, dispatch]);

  const handleStart = () => {
    localStorage.setItem("isTestStarted", "true"); // ✅ always string
    navigate("/aptitude");
  };

  const isStarted = localStorage.getItem("isTestStarted") === "true";

  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-3xl bg-[var(--color-surface)] rounded-2xl shadow-lg p-6 sm:p-10 relative overflow-hidden"
      >
        {/* Animated Glow Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] blur-3xl"
        />

        <div className="relative z-10">
          {/* Heading */}
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 text-white"
          >
            Welcome to the Candidate Assessment
          </motion.h1>

          {/* Guide / Rules */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="list-disc list-inside space-y-3 text-gray-300 text-sm sm:text-base md:text-lg mb-8"
          >
            <li>Make sure you have a stable internet connection.</li>
            <li>Once you start, you cannot pause or restart the test.</li>
            <li>Each section is time-bound. Answer carefully.</li>
            <li>
              You can navigate between questions using the navigation panel.
            </li>
            <li>
              Click{" "}
              <span className="text-[var(--color-primary)] font-semibold">
                Submit
              </span>{" "}
              once you’re done.
            </li>
          </motion.ul>

          {/* Start Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center"
          >
            <button
              onClick={handleStart}
              className="px-8 py-3 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-semibold text-lg shadow-lg transition transform hover:scale-105"
            >
              {isStarted ? "Continue Test" : "🚀 Start Test"}
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
