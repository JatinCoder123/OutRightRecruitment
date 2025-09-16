import { motion } from "framer-motion";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.getItem("isTestStarted") && navigate("/startTest");
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[60vh] text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        {/* Logo */}
        <motion.img
          src="/logo.png"
          alt="Company Logo"
          className="mx-auto h-20 w-20 md:h-24 md:w-24 mb-6 rounded-full shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Welcome to the Candidate Quiz Portal
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          Take the test, showcase your skills, and move to the next round 🚀
        </p>

        {/* Start Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/register")}
          className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-xl shadow-md font-medium text-lg transition"
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
}
