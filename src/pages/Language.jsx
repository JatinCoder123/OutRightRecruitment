import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  addCandidateSkills,
  candidateAction,
  getJobRoleLanguage,
} from "../store/slices/candidateSlice";
import PageLoader from "../components/PageLoader";

export default function Language() {
  const [selected, setSelected] = useState([]);
  const { languages, candidate, error, skills, isLanguageSelected } =
    useSelector((state) => state.candidate);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (localStorage.getItem("testStarted")) navigate("startTest");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selected.length == 0) {
      toast.error("Select Your Preferable Languages.");
      return;
    }
    dispatch(addCandidateSkills(candidate.id, selected));
    navigate("/startTest");
  };
  function handleLanguageSelection(name) {
    if (selected.includes(name)) {
      setSelected((prev) => {
        const arr = [...prev];
        return arr.filter((lang) => lang != name);
      });
    } else {
      setSelected((prev) => [name, ...prev]);
    }
  }
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(candidateAction.clearAllErrors());
    }
    if (isLanguageSelected) navigate("/startTest");
  }, [error, languages, candidate, skills, isLanguageSelected, dispatch]);
  useEffect(() => {
    dispatch(getJobRoleLanguage(candidate.role_id));
  }, [candidate]);

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg bg-[var(--color-surface)] shadow-lg rounded-2xl p-8"
      >
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Choose the language
        </h1>
        {languages.length > 0 ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              {languages?.length > 0 &&
                languages.map((p) => (
                  <motion.button
                    key={p.id}
                    type="button"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleLanguageSelection(p.id)}
                    className={`px-4 py-3 rounded-xl border font-medium transition ${
                      selected.includes(p.id)
                        ? "bg-primary-hover text-white border-primary-hover shadow-md"
                        : "bg-gray-900 text-gray-300 border-gray-700 hover:bg-gray-800"
                    }`}
                  >
                    {p.name}
                  </motion.button>
                ))}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-medium shadow-md transition"
            >
              Continue
            </button>
          </form>
        ) : (
          <PageLoader text={"Fetching Languages"} />
        )}
      </motion.div>
    </div>
  );
}
