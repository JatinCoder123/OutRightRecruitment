import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, candidateAction } from "../store/slices/candidateSlice.js";

import { toast } from "react-toastify";
import LoadingButton from "../components/LoadingButton.jsx";

export default function RegisterPage() {
  const { roles } = useSelector((state) => state.jobRoles);
  const { loading, error, isRegister } = useSelector(
    (state) => state.candidate
  );
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedRole, setSelectedRole] = useState({ id: null, title: "" });
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    if (!firstName.trim() || !selectedRole.title.trim() || !email.trim()) {
      toast.error("Please provide all the details.");
      return;
    }
    dispatch(register(firstName, lastName, email, selectedRole["id"]));
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(candidateAction.clearAllErrors());
    }
    if (isRegister) {
      navigate("/language");
    }
  }, [error, isRegister, loading, dispatch]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl rounded-2xl p-5 sm:p-8 shadow-2xl"
      >
        {/* Softer Animated Shadow Glow */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[var(--color-primary)] to-green-600 blur-xl opacity-25   -z-10"></div>

        {/* Heading */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 text-center">
          Candidate Information
        </h1>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-5">
          {/* First Name */}
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-[var(--color-primary)] outline-none text-sm sm:text-base"
          />

          {/* Last Name */}
          <input
            type="text"
            placeholder="Last Name (Optional)"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-[var(--color-primary)] outline-none text-sm sm:text-base"
          />
          {/* Email */}
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-[var(--color-primary)] outline-none text-sm sm:text-base"
          />

          {/* Dropdown for Job Role */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="w-full flex justify-between items-center px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-[var(--color-primary)] outline-none text-sm sm:text-base transition"
            >
              {selectedRole.title || "Select Job Role"}
              <span className="ml-2 text-xs sm:text-sm md:text-base">
                {open ? "▲" : "▼"}
              </span>
            </button>

            <AnimatePresence>
              {open && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-10 mt-2 w-full bg-gray-800 border border-gray-700 rounded-xl shadow-lg overflow-hidden max-h-40 sm:max-h-52 md:max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-[var(--color-primary)] scrollbar-track-gray-700"
                >
                  {roles?.map((role, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ backgroundColor: "var(--color-primary)" }}
                      className="px-3 sm:px-4 py-2 sm:py-3 cursor-pointer text-xs sm:text-sm md:text-base text-white transition"
                      onClick={() => {
                        setSelectedRole({ id: role.id, title: role.title });
                        setOpen(false);
                      }}
                    >
                      {role.title}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* Submit Button */}

          {loading ? (
            <LoadingButton text={"Register"} />
          ) : (
            <button
              type="submit"
              className="w-full py-2.5 sm:py-3 md:py-4 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-medium shadow-md transition text-sm sm:text-base md:text-lg"
            >
              Continue
            </button>
          )}
        </form>
      </motion.div>
    </div>
  );
}
