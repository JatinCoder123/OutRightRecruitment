import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  resultActions,
  submitAptiResult,
  submitRoleResult,
} from "../store/slices/resultSlice.js";
import { toast } from "react-toastify";
import LoadingButton from "./LoadingButton.jsx";
export default function Quiz({ questions = [], to, testDetails }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { candidate } = useSelector((state) => state.candidate);
  const { loading, error, message } = useSelector((state) => state.result);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0); // ✅ track correct answers
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showGrid, setShowGrid] = useState(false);
  const [timeLeft, setTimeLeft] = useState(testDetails["time"] * 60);

  const gridRef = useRef(null);

  const currentQuestion = questions[currentIndex] || {
    id: 0,
    question: "No question available",
    options: [],
  };

  const handleAnswer = (option) => {
    if (timeLeft <= 0) return;

    const updatedAnswers = { ...answers, [currentQuestion.id]: option };
    setAnswers(updatedAnswers);

    // ✅ Update score when answer is selected
    if (option === currentQuestion.correct_answer) {
      // prevent double counting (if user changes answer)
      setScore(
        Object.entries(updatedAnswers).filter(
          ([id, ans]) =>
            ans ===
            (questions.find((q) => q.id === Number(id))?.correct_answer || "")
        ).length
      );
    } else {
      // recalc score if wrong answer selected
      setScore(
        Object.entries(updatedAnswers).filter(
          ([id, ans]) =>
            ans ===
            (questions.find((q) => q.id === Number(id))?.correct_answer || "")
        ).length
      );
    }
  };

  const goTo = (index) => {
    if (timeLeft <= 0) return;
    if (index >= 0 && index < questions.length) {
      setCurrentIndex(index);
      setShowGrid(false);
    }
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const timerId = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const handleSubmit = () => {
    console.log("✅ Final Score:", score);
    if (testDetails.type == "apti") {
      dispatch(submitAptiResult(candidate.id, score));
    } else dispatch(submitRoleResult(candidate.id, score));
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(resultActions.clearAllError());
    }
    if (message) {
      toast.success(message);
      navigate(`/${to}`);
      dispatch(resultActions.clearMessage());
    }
  }, [error, loading, message, dispatch]);

  return (
    <div className="relative w-full max-w-3xl mx-auto p-4 sm:p-6">
      {/* Timer Above Question Card */}
      <div className="flex justify-center mb-4">
        <div
          className={`px-5 py-2 rounded-lg shadow-md font-semibold text-lg ${timeLeft <= 10 ? "bg-red-600 text-white" : "bg-gray-800 text-white"
            }`}
        >
          ⏳ {formatTime(timeLeft)}
        </div>
      </div>

      {/* Toggle Question Grid */}
      <button
        onClick={() => setShowGrid((prev) => !prev)}
        disabled={timeLeft <= 0}
        className="absolute top-4 right-4 p-2 rounded-lg bg-[var(--color-surface)] hover:bg-[var(--color-primary)] text-white transition disabled:opacity-50"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Question Card */}
      <motion.div
        key={currentQuestion.id || currentIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.4 }}
        className="bg-[var(--color-surface)] rounded-2xl p-6 shadow-lg"
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          {currentQuestion?.question || "Question not available"}
        </h2>

        <div className="grid gap-3">
          {(currentQuestion?.options || []).map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(option)}
              disabled={timeLeft <= 0}
              className={`px-4 py-3 rounded-xl border text-left transition ${answers[currentQuestion.id] === option
                  ? "bg-[var(--color-primary)] text-white border-transparent"
                  : "bg-gray-900 border-gray-700 text-gray-200 hover:border-[var(--color-primary)]"
                } ${timeLeft <= 0 ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {option || "N/A"}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Navigation Buttons */}
      <div className="flex flex-col gap-7 sm:flex-row sm:justify-between items-center mt-6">
        <div className="flex gap-10 sm:gap-3">
          <button
            onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
            disabled={currentIndex === 0 || timeLeft <= 0}
            className="px-4 py-2 bg-gray-600 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          {currentIndex < questions.length - 1 && (
            <button
              onClick={() =>
                setCurrentIndex((prev) =>
                  Math.min(prev + 1, questions.length - 1)
                )
              }
              disabled={timeLeft <= 0}
              className="px-4 py-2 bg-primary hover:bg-primary-hover rounded-lg disabled:opacity-50"
            >
              Next
            </button>
          )}
        </div>
        {loading ? (
          <LoadingButton text={"submiting..."} />
        ) : (
          <button
            onClick={handleSubmit}
            disabled={timeLeft <= 0}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg disabled:opacity-50"
          >
            Submit
          </button>
        )}
      </div>

      {/* Question Grid (toggleable) */}
      {/* Question Grid (toggleable) */}
      <AnimatePresence>
        {showGrid && (
          <motion.div
            ref={gridRef}
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-64 bg-[var(--color-surface)] shadow-lg p-6 z-50 overflow-y-auto"
          >
            <h3 className="flex items-center text-lg font-semibold mb-4">
              <ChevronLeft onClick={() => setShowGrid((prev) => !prev)} />
              Questions
            </h3>
            <div className="grid grid-cols-4 gap-3">
              {questions.map((q, index) => (
                <button
                  key={q?.id || index}
                  onClick={() => goTo(index)}
                  disabled={timeLeft <= 0}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition ${index === currentIndex
                      ? "bg-[var(--color-primary)] text-white"
                      : answers[q?.id]
                        ? "bg-green-600 text-white"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    } ${timeLeft <= 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
