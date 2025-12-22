import { useState } from "react";
import { motion } from "framer-motion";

export default function Terms({ onStart }) {
    const [agreed, setAgreed] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center  bg-gradient-to-br from-[#0f172a] via-[#020617] to-black px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl w-full bg-gray-900/80 backdrop-blur border border-white/10 rounded-2xl p-8 shadow-xl"
            >
                {/* Title */}
                <h1 className="text-2xl font-bold text-white mb-4">
                    Test Instructions & Rules
                </h1>

                {/* Rules */}
                <ul className="space-y-3 text-gray-300 text-sm leading-relaxed list-disc pl-5">
                    <li>The test must be completed in one session.</li>
                    <li>Do not refresh or close the browser during the test.</li>
                    <li>Each question has a fixed time limit.</li>
                    <li>Once submitted, answers cannot be changed.</li>
                    <li>Any form of malpractice may result in disqualification.</li>
                </ul>

                {/* Agreement */}
                <div className="mt-6 flex items-start gap-3">
                    <input
                        type="checkbox"
                        id="agree"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-1 h-4 w-4 accent-indigo-600 cursor-pointer"
                    />
                    <label
                        htmlFor="agree"
                        className="text-sm text-gray-300 cursor-pointer"
                    >
                        I have read and understood all the rules and agree to follow them.
                    </label>
                </div>

                {/* Button */}
                <button
                    disabled={!agreed}
                    onClick={onStart}
                    className={`mt-6 w-full py-3 rounded-xl font-semibold transition
            ${agreed
                            ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                            : "bg-gray-700 text-gray-400 cursor-not-allowed"
                        }`}
                >
                    Start Test
                </button>
            </motion.div>
        </div>
    );
}
