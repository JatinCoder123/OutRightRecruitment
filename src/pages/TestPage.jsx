import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentQuestion, questionsAction } from "../store/slices/questions";
import TestPageSidebar from "../components/TestPageSidebar";
import { CgMenuGridR } from "react-icons/cg";
import { Star, StarOff } from "lucide-react";
import { updateCandidate } from "../store/slices/candidate";

export default function TestPage() {
    const dispatch = useDispatch();

    const { count, currentQuestions } = useSelector(
        (state) => state.questions
    );
    const { candidate } = useSelector((state) => state.candidate);

    const [open, setOpen] = useState(false);
    const [submitModal, setSubmitModal] = useState(false);
    const [activeQuestion, setActiveQuestion] = useState(0);

    /* ================= FETCH QUESTIONS ================= */
    useEffect(() => {
        dispatch(getCurrentQuestion());
    }, [dispatch]);

    /* ================= OPTION SELECT ================= */
    const handleOptionSelect = (option) => {
        const current = currentQuestions[activeQuestion];

        // Must always have one answer
        if (current?.candidate_answer === option) return;

        dispatch(
            questionsAction.updateQuestion({
                index: activeQuestion,
                data: {
                    status: "answered",
                    candidate_answer: option,
                },
            })
        );
    };

    /* ================= SUBMIT ================= */
    const handleSubmitConfirm = () => {
        let nextRound = candidate?.current_round;
        if (candidate.current_round === 1 && candidate.role_result == null) {
            nextRound = 2;
        }
        else if (candidate.current_round === 2 && candidate.dsa_result == null && candidate.is_dsa) {
            nextRound = 3;
        }
        const candidateData = {
            current_round: nextRound,
        }
        dispatch(updateCandidate(candidateData));
        setSubmitModal(false);
    };

    return (
        <div className="h-screen flex flex-col bg-gradient-to-br from-[#020617] via-[#020617] to-black text-gray-200">
            {/* ================= HEADER ================= */}
            <header className="h-16 bg-[#020617]/80 backdrop-blur border-b border-white/10 flex items-center justify-between px-6">
                <h1 className="text-lg font-semibold text-white">
                    {candidate?.first_name} {candidate?.last_name}
                </h1>
                <div className="flex items-center gap-6 text-sm">
                    <span className="text-gray-400">
                        Round {candidate?.current_round} of {candidate?.is_dsa ? 3 : 2}
                    </span>
                    <span className="font-mono bg-white/10 px-3 py-1 rounded text-white">
                        ⏱ 12:45
                    </span>
                </div>
            </header>

            {/* ================= BODY ================= */}
            <div className="flex flex-1 relative overflow-hidden">
                {/* Mobile Toggle */}
                <button
                    onClick={() => setOpen(true)}
                    className="lg:hidden absolute top-4 left-4 z-50 p-2 bg-orange-600 text-white rounded-lg "
                >
                    <CgMenuGridR size={20} />
                </button>

                {/* Overlay */}
                {open && (
                    <div
                        onClick={() => setOpen(false)}
                        className="lg:hidden fixed inset-0 bg-black/50 z-40"
                    />
                )}

                {/* Sidebar */}
                <div
                    className={`
                        fixed lg:static top-0 left-0 h-full z-50
                        transform transition-transform duration-300
                        ${open ? "translate-x-0" : "-translate-x-full"}
                        lg:translate-x-0
                    `}
                >
                    <TestPageSidebar
                        activeQuestion={activeQuestion}
                        setActiveQuestion={setActiveQuestion}
                        setOpen={setOpen}
                    />
                </div>

                {/* ================= MAIN ================= */}
                <main className="flex-1 p-6 lg:p-10 overflow-y-auto flex flex-col gap-10 lg:mt-2 mt-10">
                    <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur border border-white/10 p-6 rounded-xl shadow-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-sm text-gray-400">
                                Question {activeQuestion + 1} / {count}
                            </h2>

                            <button
                                onClick={() =>
                                    dispatch(
                                        questionsAction.updateQuestion({
                                            index: activeQuestion,
                                            data: {
                                                mark:
                                                    !currentQuestions[activeQuestion]
                                                        ?.mark,
                                            },
                                        })
                                    )
                                }
                                className="text-sm text-blue-400 flex items-center gap-2 hover:underline"
                            >
                                {currentQuestions[activeQuestion]?.mark ? (
                                    <StarOff
                                        className="text-yellow-500"
                                        size={15}
                                    />
                                ) : (
                                    <Star
                                        className="text-yellow-500"
                                        size={15}
                                    />
                                )}
                                {currentQuestions[activeQuestion]?.mark
                                    ? "Unmark"
                                    : "Mark"}{" "}
                                for Review
                            </button>
                        </div>

                        <p className="text-lg font-medium mb-6 text-white">
                            {currentQuestions[activeQuestion]?.question}
                        </p>

                        {/* ================= OPTIONS ================= */}
                        <div className="space-y-3">
                            {currentQuestions[activeQuestion]?.options?.map(
                                (opt, idx) => {
                                    const isSelected =
                                        currentQuestions[activeQuestion]
                                            ?.candidate_answer === opt;

                                    return (
                                        <div
                                            key={idx}
                                            onClick={() =>
                                                handleOptionSelect(opt)
                                            }
                                            className={`p-4 border rounded-lg cursor-pointer transition
                                                ${isSelected
                                                    ? "border-green-500 bg-green-500/20 text-white"
                                                    : "border-white/10 hover:bg-white/10 text-gray-200"
                                                }`}
                                        >
                                            {opt}
                                        </div>
                                    );
                                }
                            )}
                        </div>

                        {/* ================= NAV ================= */}
                        <div className="flex justify-between mt-8">
                            <button
                                disabled={activeQuestion === 0}
                                onClick={() =>
                                    setActiveQuestion((p) => p - 1)
                                }
                                className="px-5 py-2 border border-white/10 rounded-lg hover:bg-white/10 disabled:opacity-50"
                            >
                                ⬅ Previous
                            </button>

                            <button
                                disabled={activeQuestion === count - 1}
                                onClick={() =>
                                    setActiveQuestion((p) => p + 1)
                                }
                                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                            >
                                Next ➡
                            </button>
                        </div>
                    </div>

                    {/* ================= SUBMIT ================= */}
                    <div className="flex justify-center">
                        <button
                            onClick={() => setSubmitModal(true)}
                            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
                        >
                            Submit Test
                        </button>
                    </div>
                </main>
            </div>

            {/* ================= SUBMIT MODAL ================= */}
            {submitModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/70">
                    <div className="bg-[#020617] border border-white/10 rounded-xl p-6 max-w-md w-full shadow-xl">
                        <h2 className="text-lg font-semibold text-white mb-3">
                            Submit Test
                        </h2>

                        <p className="text-gray-300 mb-2">
                            Once you submit the test, you <b>cannot go back</b>{" "}
                            or change your answers.
                        </p>

                        <p className="text-yellow-400 font-medium mb-6">
                            Are you sure?
                        </p>

                        <div className="flex justify-end gap-4">
                            <button
                                onClick={() => setSubmitModal(false)}
                                className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10"
                            >
                                No
                            </button>
                            <button
                                onClick={handleSubmitConfirm}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
                            >
                                Yes, Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
