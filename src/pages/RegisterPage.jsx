import { motion } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Title } from "../components/Title";

export default function Login() {
  // Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [jobRoleIndex, setJobRoleIndex] = useState(null);
  const [experience, setExperience] = useState("");

  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [skills, setSkills] = useState([]);

  // UI state
  const [isRoleOpen, setIsRoleOpen] = useState(false);

  // Redux
  const { roles = [], loading, error } = useSelector((state) => state.jobRoles);

  const languages = ["English", "Spanish", "French", "German"];

  // Language toggle
  const toggleLanguage = (lang) => {
    setSelectedLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  };

  // Submit handler
  const handleSubmit = () => {
    const payload = {
      firstName,
      lastName,
      email,
      jobRole,
      languages: selectedLanguages,
      skills,
    };

    console.log("Candidate Payload:", payload);

    // TODO:
    // dispatch(registerCandidate(payload))
    // or axios.post("/api/candidate", payload)
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#0f172a] via-[#020617] to-black p-3">
      {/* LEFT SECTION (FORM) */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-1 items-center justify-center px-6"
      >
        <div className="w-full max-w-md">
          {/* Title for SMALL SCREENS */}
          <div className="mb-6 text-center lg:hidden">
            <Title />
          </div>

          {/* Card */}
          <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-[0_0_80px_rgba(99,102,241,0.15)]">
            <h2 className="sm:text-2xl text-xl font-semibold text-white text-center">
              Start Your Candidate Profile
            </h2>
            <p className="sm:text-sm text-xs text-gray-400 text-center mt-1">
              Complete your details to begin the assessment
            </p>

            {/* Form */}
            <div className="mt-7 space-y-5">
              {/* Name */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="input-dark"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input-dark"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="Email address"
                className="input-dark"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* Job Role Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsRoleOpen((prev) => !prev)}
                  className="input-dark w-full flex items-center justify-between"
                >
                  <span className={jobRole ? "text-white" : "text-gray-400"}>
                    {jobRole || "Select Job Role"}
                  </span>

                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isRoleOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isRoleOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute z-20 mt-2 w-full max-h-56 overflow-y-auto
                               rounded-xl border border-white/10 bg-[#020617] shadow-lg"
                  >
                    {roles.map((role, index) => (
                      <button
                        key={role.id}
                        type="button"
                        onClick={() => {
                          setJobRole(role.title);
                          setJobRoleIndex(index);
                          setIsRoleOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left text-sm transition
                          ${
                            jobRole === role.title
                              ? "bg-indigo-600 text-white"
                              : "text-gray-300 hover:bg-white/10"
                          }`}
                      >
                        {role.title}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
              {/* Experience */}
              <input
                type="number"
                placeholder="Year Of Experience"
                max={10}
                min={0}
                className="input-dark"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
              {/* Language / Skill Selection */}
              {jobRoleIndex !== null && (
                <div className="mt-2 flex flex-col items-center">
                  <p className="text-gray-300  font-medium mb-3">
                    Choose your preferred skills
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {JSON.parse(roles[jobRoleIndex].role_skills)?.map(
                      (lang) => {
                        const active = selectedLanguages.includes(lang);
                        return (
                          <button
                            key={lang}
                            type="button"
                            onClick={() => toggleLanguage(lang)}
                            className={`px-4 py-2 rounded-full text-sm border transition
              ${
                active
                  ? "bg-indigo-600 border-indigo-500 text-white shadow-md"
                  : "border-white/10 text-gray-300 hover:border-indigo-500 hover:text-white"
              }`}
                          >
                            {lang}
                          </button>
                        );
                      }
                    )}
                  </div>
                </div>
              )}
              {/* Submit */}
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full mt-6 rounded-full py-3 
                bg-gradient-to-r from-indigo-500 to-purple-600
                text-white font-semibold shadow-lg
                hover:scale-[1.02] active:scale-[0.98]
                transition-transform"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* RIGHT SECTION (HERO / BRAND) */}
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="hidden lg:flex flex-1 flex-col justify-center px-16"
      >
        <div className="mb-6">
          <Title />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-xl">
          A smarter way to assess candidates through skill-based interviews
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-xl">
          Take structured quizzes designed for real job roles. Showcase your
          skills, prove your expertise, and move forward with confidence.
        </p>

        <p className="mt-10 text-sm text-gray-500">
          ⏱ Takes only a few minutes • 🎯 Role-focused • 🚀 Career-driven
        </p>
      </motion.div>
    </div>
  );
}
