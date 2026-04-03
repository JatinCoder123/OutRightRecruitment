import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCandidate } from "../store/slices/candidate";
import { toast } from "react-toastify";

export default function EndScreen() {
  const dispatch = useDispatch();
  const { candidate } = useSelector((state) => state.candidate);

  const [showModal, setShowModal] = useState(false);
  const [selectedRounds, setSelectedRounds] = useState([]);
  const [token, setToken] = useState("");

  /* ================= HANDLE CHECKBOX ================= */
  const toggleRound = (round) => {
    setSelectedRounds((prev) =>
      prev.includes(round)
        ? prev.filter((r) => r !== round)
        : [...prev, round]
    );
  };

  /* ================= HANDLE REATTEMPT ================= */
  const handleReattempt = () => {
    if (!token || Number(token) !== candidate?.retry_token) {
      toast.error("Invalid retry token ");
      return;
    }

    if (selectedRounds.length === 0) {
      toast.warn("Please select at least one round ⚠️");
      return;
    }

    let updateData = {
      is_test_end: 0,
      already_retry: 1, // prevent future retries
    };

    /* ================= APPLY RESET ================= */
    if (selectedRounds.includes("apti")) {
      updateData.apti_result = null;
    }

    if (selectedRounds.includes("role")) {
      updateData.role_result = null;
    }

    if (selectedRounds.includes("dsa")) {
      updateData.dsa_result = null;
    }

    /* ================= SET CURRENT ROUND ================= */
    // Priority: apti -> role -> dsa
    if (selectedRounds.includes("apti")) {
      updateData.current_round = 1;
    } else if (selectedRounds.includes("role")) {
      updateData.current_round = 2;
    } else if (selectedRounds.includes("dsa")) {
      updateData.current_round = 3;
    }

    dispatch(updateCandidate(updateData));
    setShowModal(false);
  };

  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl bg-[var(--color-surface)] rounded-2xl shadow-lg p-6 sm:p-10 relative overflow-hidden text-center"
      >
        {/* Glow */}
        <motion.div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] blur-3xl opacity-10" />

        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-white mb-4">
            🎉 Thank You!
          </h1>

          <p className="text-gray-300 mb-6">
            You’ve successfully completed the assessment 🚀
          </p>

          <p className="text-[var(--color-primary)] font-medium mb-6">
            Best of luck! 🌟
          </p>

          {/* ================= REATTEMPT BUTTON ================= */}
          {candidate?.already_retry !== 1 && (
            <button
              onClick={() => setShowModal(true)}
              className="px-6 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600"
            >
              Reattempt Test
            </button>
          )}
        </div>
      </motion.div>

      {/* ================= MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6">
          <div className="bg-[#020617] border border-white/10 rounded-xl p-6 w-full max-w-md">
            <h2 className="text-lg font-semibold text-white mb-4">
              Reattempt Test
            </h2>

            {/* CHECKBOX OPTIONS */}
            <div className="space-y-3 mb-4">
              <p className="text-gray-400 text-sm">
                Select rounds to reattempt:
              </p>

              {/* Apti */}
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedRounds.includes("apti")}
                  onChange={() => toggleRound("apti")}
                />
                Aptitude
              </label>

              {/* Role */}
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedRounds.includes("role")}
                  onChange={() => toggleRound("role")}
                />
                Role
              </label>

              {/* DSA (conditional) */}
              {candidate?.is_dsa && (
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedRounds.includes("dsa")}
                    onChange={() => toggleRound("dsa")}
                  />
                  DSA
                </label>
              )}
            </div>

            {/* TOKEN */}
            <input
              type="text"
              placeholder="Enter retry token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="w-full p-2 rounded bg-white/10 text-white mb-4 outline-none"
            />

            {/* ACTIONS */}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border border-white/20 rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleReattempt}
                className="px-4 py-2 bg-green-600 rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}