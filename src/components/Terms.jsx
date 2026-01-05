import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Clock, Layers, Info } from "lucide-react";

export default function Terms({
    onStart,
    isDSAEligible = true,
    aptitudeQuestions = 20,
    roleQuestions = 15,
    dsaQuestions = 10,
}) {
    const [agreed, setAgreed] = useState(false);

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

                {/* Warning Box */}
                <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4">
                    <div className="flex items-start gap-3 text-red-300 text-sm">
                        <AlertTriangle className="mt-0.5" />
                        <p>
                            <strong>Strict Proctoring Enabled:</strong>
                            Switching tabs, minimizing the browser, refreshing the page,
                            or leaving the test window will result in
                            <span className="text-red-400 font-semibold">
                                {" "}immediate test submission
                            </span>.
                        </p>
                    </div>
                </div>

                {/* Test Overview */}
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
                            <strong>Test Format:</strong> Multiple rounds conducted in a single session
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
                            <strong>Round 1 – Aptitude Test:</strong>{" "}
                            {aptitudeQuestions} questions
                        </li>

                        <li>
                            <strong>Round 2 – Role-Based Assessment:</strong>{" "}
                            {roleQuestions} questions
                        </li>

                        {isDSAEligible && (
                            <li>
                                <strong>Round 3 – DSA Assessment:</strong>{" "}
                                {dsaQuestions} questions
                            </li>
                        )}
                    </ul>
                </div>

                {/* Additional Rules */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold text-white mb-3">
                        Important Rules
                    </h2>
                    <ul className="space-y-2 text-gray-300 text-sm list-disc pl-5">
                        <li>The test must be completed in one continuous session.</li>
                        <li>Do not refresh the page at any point.</li>
                        <li>
                            You may review and change your answers within an active round.
                        </li>
                        <li>
                            Once a round is submitted, answers for that round cannot be modified.
                        </li>
                        <li>
                            A menu button will appear at the top-right during the test showing
                            total rounds and question count.
                        </li>
                    </ul>

                </div>

                {/* Agreement */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="agree"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            className=" h-4 w-4 accent-indigo-600 cursor-pointer"
                        />
                        <label
                            htmlFor="agree"
                            className="text-sm text-gray-300 cursor-pointer"
                        >
                            I have read and understood all instructions and agree to
                            abide by the rules of the assessment.
                        </label>
                    </div>


                    <button
                        disabled={!agreed}
                        onClick={onStart}
                        className={`w-[200px] py-3 rounded-xl font-semibold transition-all cursor-pointer
                    ${agreed
                                ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg"
                                : "bg-gray-700 text-gray-400 cursor-not-allowed"
                            }`}
                    >
                        Start Test
                    </button>
                </div>


            </motion.div>
        </div>
    );
}
