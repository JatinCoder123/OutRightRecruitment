import { useSelector } from "react-redux";
import { Rounds } from "./Rounds";
import { GiCrossMark } from "react-icons/gi";
import { GiSandsOfTime } from "react-icons/gi";

import { CircleCheckBig, Lock, Square, Star } from "lucide-react";

const TestPageSidebar = ({ activeQuestion, setActiveQuestion, setOpen }) => {
    const { currentQuestions } = useSelector(
        (state) => state.questions
    );
    return (
        <aside className="w-72 bg-[#020617]/70 backdrop-blur border-r border-white/10 p-4 overflow-y-auto h-full">
            {/* Mobile Close Header */}
            <div className="flex items-center justify-between mb-4 lg:hidden">
                <h2 className="text-sm font-semibold text-gray-300">Menu</h2>
                <button
                    onClick={() => setOpen(false)}
                    className="text-white bg-white/10 px-2 py-1 rounded cursor-pointer"
                >
                    <GiCrossMark />
                </button>
            </div>

            {/* Rounds */}
            <h2 className="text-xs font-semibold text-gray-400 mb-2 tracking-wider">
                ROUNDS
            </h2>
            <Rounds />

            {/* Questions */}
            <h2 className="text-xs font-semibold text-gray-400 mb-2 tracking-wider">
                QUESTIONS
            </h2>

            <div className="grid grid-cols-5 gap-2">
                {currentQuestions.map((question, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setActiveQuestion(idx);
                            setOpen(false);
                        }}
                        className={`relative h-9 w-9 rounded-md text-xs font-medium transition
        ${question?.status === "answered" && activeQuestion != idx && "bg-green-500/20 text-green-400"}
        ${activeQuestion == idx && "bg-blue-600 text-white"}
        ${!question?.status && activeQuestion != idx && "bg-white/10 text-gray-400"}
      `}
                    >
                        {idx + 1}
                        {question?.mark && (
                            <span className="absolute -top-1 -right-1 text-yellow-400 text-[10px]">
                                ⭐
                            </span>
                        )}
                    </button>
                ))}
            </div>


            {/* Legend */}
            <div className="mt-6 text-xs text-gray-400 space-y-1 flex flex-col gap-2">
                <p className="flex items-center gap-2"><Square size={12} className="bg-green-500" /> Answered</p>
                <p className="flex items-center gap-2"><Square size={12} className="bg-blue-500" /> Current</p>
                <p className="flex items-center gap-2">⭐ Marked for Review</p>
            </div>
        </aside>
    );
};

export default TestPageSidebar;
