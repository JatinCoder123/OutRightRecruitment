import { CircleCheckBig, Lock, LockKeyhole } from "lucide-react";
import { useSelector } from "react-redux";
import { GiSandsOfTime } from "react-icons/gi";
const ROUNDS = [
    {
        id: 1,
        title: "Aptitude Round",
        duration: 20,
    },
    {
        id: 2,
        title: "Role Specific Round",
        duration: 20,
    },
    {
        id: 3,
        title: "DSA Round",
        duration: 20,
    },
]
export const Rounds = () => {
    const { candidate: { is_dsa, current_round } } = useSelector((state) => state.candidate);
    const rounds = is_dsa ? ROUNDS : ROUNDS.slice(0, 2)
    return (
        <div className="space-y-2 mb-6">
            {rounds.map((round) => (
                <div
                    key={round.id}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm
            ${round.id === current_round
                            ? "bg-blue-500/10 text-blue-400 border border-blue-500/30"
                            : "bg-white/5 text-gray-300"
                        }`}
                >
                    <span>{round.title}</span>
                    <span>
                        {round.id < current_round && <CircleCheckBig size={16} />}
                        {round.id === current_round && <GiSandsOfTime size={16} />}
                        {round.id > current_round && <LockKeyhole size={16} />}
                    </span>
                </div>
            ))}
        </div>
    );
};


