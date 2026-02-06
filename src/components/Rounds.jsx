import { CircleCheckBig, Lock, LockKeyhole } from "lucide-react";
import { useSelector } from "react-redux";
import { GiSandsOfTime } from "react-icons/gi";

export const Rounds = () => {
    const { rounds } = useSelector((state) => state.candidate);
    return (
        <div className="space-y-2 mb-6">
            {rounds.map((round) => (
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
                        {round.status === "completed" && <CircleCheckBig size={16} />}
                        {round.status === "active" && <GiSandsOfTime size={16} />}
                        {round.status === "locked" && <LockKeyhole size={16} />}
                    </span>
                </div>
            ))}
        </div>
    );
};


