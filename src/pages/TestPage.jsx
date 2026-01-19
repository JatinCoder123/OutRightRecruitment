import { useEffect, useState } from "react";
import { getCurrentQuestion } from "../store/slices/questions";
import { useDispatch, useSelector } from "react-redux";

const roundsData = [
    {
        id: 1,
        title: "Aptitude Round",
        status: "active",
    },
    {
        id: 2,
        title: "Role Specific Round",
        status: "locked",
    },
    {
        id: 3,
        title: "DSA Round",
        status: "locked",
    },
];

export default function TestPage() {
    const { count, loading, error, currentQuestions } = useSelector((state) => state.questions);
    const { candidate } = useSelector((state) => state.candidate);
    const [roundsInfo, setRoundsInfo] = useState(roundsData);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const dispatch = useDispatch()
    useEffect(() => {
        const initialWidth = window.innerWidth;
        let resizeTimeout = null;
        const onResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                const widthDiff = Math.abs(window.innerWidth - initialWidth);
                if (widthDiff > 100) {
                    alert("Possible split screen or resize detected");
                }
            }, 300);
        };
        const onVisibilityChange = () => {
            if (document.hidden) {
                alert("Tab switched");
            }
        };
        const onBeforeUnload = (e) => {
            console.log("Refresh")
            e.preventDefault();
            e.returnValue = "";
        };

        document.addEventListener("visibilitychange", onVisibilityChange);
        window.addEventListener("beforeunload", onBeforeUnload);
        window.addEventListener("resize", onResize);



        return () => {
            document.removeEventListener("visibilitychange", onVisibilityChange);
            window.removeEventListener("beforeunload", onBeforeUnload);
            window.removeEventListener("resize", onResize);

        };
    }, []);
    useEffect(() => {
        dispatch(getCurrentQuestion());
    }, []);
    return (
        <div className="h-screen flex flex-col bg-gradient-to-br from-[#020617] via-[#020617] to-black text-gray-200">

            {/* ================= HEADER ================= */}
            <header className="h-16 bg-[#020617]/80 backdrop-blur border-b border-white/10 flex items-center justify-between px-6">
                <h1 className="text-lg font-semibold text-white">
                    Skill Assessment Test
                </h1>
                <div className="flex items-center gap-6 text-sm">
                    <span className="text-gray-400">Round {candidate?.current_round} of 3</span>
                    <span className="font-mono bg-white/10 px-3 py-1 rounded text-white">
                        ⏱ 12:45
                    </span>
                </div>
            </header>

            {/* ================= BODY ================= */}
            <div className="flex flex-1 overflow-hidden">

                {/* ============ SIDEBAR ============ */}
                <aside className="w-72 bg-[#020617]/70 backdrop-blur border-r border-white/10 p-4 overflow-y-auto">

                    {/* Rounds */}
                    <h2 className="text-xs font-semibold text-gray-400 mb-2 tracking-wider">
                        ROUNDS
                    </h2>

                    <div className="space-y-2 mb-6">
                        {roundsData.map((round) => (
                            <div
                                key={round.id}
                                className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm
                ${round.status === "active"
                                        ? "bg-blue-500/10 text-blue-400 border border-blue-500/30"
                                        : "bg-white/5 text-gray-300"
                                    }`}
                            >
                                <span>{round.title}</span>
                                <span>
                                    {round.status === "completed" && "✔"}
                                    {round.status === "active" && "⏳"}
                                    {round.status === "locked" && "🔒"}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Question Navigator */}
                    <h2 className="text-xs font-semibold text-gray-400 mb-2 tracking-wider">
                        QUESTIONS
                    </h2>

                    <div className="grid grid-cols-5 gap-2">
                        {currentQuestions.map((status, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveQuestion(idx)}
                                className={`h-9 w-9 rounded-md text-xs font-medium transition
                  ${status === "answered" &&
                                    "bg-green-500/20 text-green-400"
                                    }
                  ${status === "current" &&
                                    "bg-blue-600 text-white"
                                    }
                  ${status === "unseen" &&
                                    "bg-white/10 text-gray-400"
                                    }
                  ${status === "locked" &&
                                    "bg-white/5 text-gray-600 cursor-not-allowed"
                                    }
                `}
                            >
                                {idx + 1}
                            </button>
                        ))}
                    </div>

                    {/* Legend */}
                    <div className="mt-6 text-xs text-gray-400 space-y-1">
                        <p>✔ Answered</p>
                        <p>⏳ Current</p>
                        <p>⬜ Unseen</p>
                    </div>
                </aside>

                {/* ============ MAIN QUESTION AREA ============ */}
                <main className="flex-1 p-8 overflow-y-auto">
                    <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur border border-white/10 p-6 rounded-xl shadow-lg">

                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-sm text-gray-400">
                                Question {activeQuestion + 1} / {count}
                            </h2>
                            <button className="text-sm text-blue-400 hover:underline">
                                ⭐ Mark for Review
                            </button>
                        </div>

                        <p className="text-lg font-medium mb-6 text-white">
                            {currentQuestions[activeQuestion]?.question}
                        </p>

                        <div className="space-y-3">
                            {currentQuestions[activeQuestion]?.options.map((opt, idx) => (
                                <label
                                    key={idx}
                                    className="flex items-center gap-3 p-3 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 transition"
                                >
                                    <input type="radio" name="answer" className="accent-blue-500" />
                                    <span className="text-gray-200">{opt}</span>
                                </label>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex justify-between mt-8">
                            <button disabled={activeQuestion === 0} onClick={() => setActiveQuestion(activeQuestion - 1)} className="px-5 py-2 border border-white/10 rounded-lg hover:bg-white/10 transition">
                                ⬅ Previous
                            </button>
                            <button disabled={activeQuestion === count - 1} onClick={() => setActiveQuestion(activeQuestion + 1)} className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                Next ➡
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
