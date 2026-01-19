import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Clock, Layers, Info } from "lucide-react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateCandidate } from "../store/slices/candidate";

export default function Terms({
    aptitudeQuestions = 20,
    roleQuestions = 15,
    dsaQuestions = 10,
}) {
    const [agreed, setAgreed] = useState(false);
    const { candidate, updating } = useSelector((state) => state.candidate);
    const dispatch = useDispatch();
    const onStart = () => {
        dispatch(updateCandidate({ is_test_started: true }));
    };
    useEffect(() => {
        window.history.pushState({ page: "terms" }, "", window.location.href);
        const handleBack = (event) => {
            alert("Back button pressed!");
            window.history.pushState({ page: "terms" }, "", window.location.href);
        };
        window.addEventListener("popstate", handleBack);
        return () => {
            window.removeEventListener("popstate", handleBack);
        };
    }, []);

    return (
        <div className="min-h-screen flex items-center w-full 
      bg-gradient-to-br from-[#020617] via-[#020617] to-black px-4">

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full bg-gray-900/90 backdrop-blur relative
        border border-white/10 rounded-2xl p-8 shadow-2xl"
            >

                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                    <Info className="text-indigo-400" />
                    <h1 className="text-2xl font-bold text-white">
                        Test Instructions & Guidelines
                    </h1>
                </div>

                {/* Warning */}
                <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4">
                    <div className="flex items-start gap-3 text-red-300 text-sm">
                        <AlertTriangle className="mt-0.5" />
                        <p>
                            <strong>Strict Proctoring Enabled:</strong>{" "}
                            Switching tabs, minimizing the browser, refreshing the page,
                            or leaving the test window will result in
                            <span className="text-red-400 font-semibold">
                                {" "}automatic test submission
                            </span>.
                        </p>
                    </div>
                </div>

                {/* Overview */}
                <div className="grid gap-4 mb-6 text-sm text-gray-300">
                    <div className="flex items-center gap-3">
                        <Clock className="text-indigo-400" />
                        <span>
                            <strong>Total Duration:</strong> 45 Minutes (all rounds combined)
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Layers className="text-indigo-400" />
                        <span>
                            <strong>Test Format:</strong> Multiple rounds in a single session
                        </span>
                    </div>
                </div>

                {/* Rounds */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold text-white mb-3">
                        Test Rounds Structure
                    </h2>

                    <ul className="space-y-3 text-gray-300 text-sm list-disc pl-5">
                        <li>
                            <strong>Round 1 – Aptitude Test:</strong> {aptitudeQuestions} questions
                        </li>

                        <li>
                            <strong>Round 2 – Role-Based Assessment:</strong> {roleQuestions} questions
                        </li>

                        {candidate.is_dsa && (
                            <li>
                                <strong>Round 3 – DSA Assessment:</strong> {dsaQuestions} questions
                            </li>
                        )}
                    </ul>
                </div>

                {/* Rules */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold text-white mb-3">
                        Important Rules
                    </h2>
                    <ul className="space-y-2 text-gray-300 text-sm list-disc pl-5">
                        <li>The test must be completed in one continuous session.</li>
                        <li>Do not refresh or navigate away from the page.</li>
                        <li>You can change answers during an active round.</li>
                        <li>Once a round is submitted, answers cannot be changed.</li>
                        <li>
                            A menu button will appear during the test showing rounds and
                            question count.
                        </li>
                    </ul>
                </div>

                {/* Agreement */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <label className="flex items-start gap-2 text-sm text-gray-300 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            className="mt-1 h-4 w-4 accent-indigo-600"
                        />
                        I have read and understood all instructions and agree to follow
                        the assessment rules.
                    </label>

                    <button
                        disabled={!agreed || updating}
                        onClick={onStart}
                        className={`w-[200px] py-3 rounded-xl font-semibold transition-all
              ${agreed && !updating
                                ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg"
                                : "bg-gray-700 text-gray-400 cursor-not-allowed"
                            }`}
                    >
                        {updating ? "Starting..." : "Start Test"}
                    </button>
                </div>

            </motion.div>
        </div>
    );
}
