import { motion } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Title } from "../components/Title";
import { toast } from "react-toastify";
import { validateInput } from "../assets/assests";
import { Input } from "../components/Input";
import MainButton from "../components/MainButton";

export default function Login() {
  // Form state
  const [formData, setFormData] = useState({
    firstName: { value: "", isValid: true },
    lastName: { value: "", isValid: true },
    email: { value: "", isValid: true },
    jobRole: { value: "", isValid: true },
    experience: { value: "", isValid: true },
    skills: { value: [], isValid: true },
  });
  const [jobRoleIndex, setJobRoleIndex] = useState(null);
  const [isRoleOpen, setIsRoleOpen] = useState(false);
  const { roles = [], loading, error } = useSelector((state) => state.jobRoles);


  // Language toggle
  const toggleLanguage = (lang) => {
    setFormData((prev) => ({
      ...prev,
      skills: {
        isValid: true,
        value: prev.skills.value.includes(lang)
          ? prev.skills.value.filter((l) => l !== lang)
          : [...prev.skills.value, lang],
      },
    }));
  };
  const jobRoleHandler = (title, index) => {
    setFormData((prev) => ({
      ...prev,
      jobRole: {
        ...prev.jobRole,
        value: title,
        isValid: true,
      },
    }));
    setJobRoleIndex(index);
    setIsRoleOpen(false);
  }

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: {
        isValid: true,
        value,
      },
    }));
  };

  // Submit handler with validation
  const handleSubmit = () => {
    // Trim values to avoid space-only inputs
    let invalid = false;
    if (!validateInput(formData.firstName.value, "text")) {
      setFormData((prev) => ({
        ...prev,
        firstName: {
          ...prev.firstName,
          isValid: false,
        },
      }));
      invalid = true;
    }


    if (!validateInput(formData.email.value, "email")) {
      setFormData((prev) => ({
        ...prev,
        email: {
          ...prev.email,
          isValid: false,
        },
      }));
      invalid = true;
    }
    if (!validateInput(formData.jobRole.value, "text")) {
      setFormData((prev) => ({
        ...prev,
        jobRole: {
          ...prev.jobRole,
          isValid: false,
        },
      }));
      invalid = true;
    }
    const exp = Number(formData.experience.value);

    if (!validateInput(exp, "number")) {
      setFormData((prev) => ({
        ...prev,
        experience: {
          ...prev.experience,
          isValid: false,
        },
      }));
      invalid = true;
    }
    if (!validateInput(formData.skills.value, "list")) {
      setFormData((prev) => ({
        ...prev,
        skills: {
          ...prev.skills,
          isValid: false,
        },
      }));
      invalid = true;
    }
    if (exp < 0 || exp > 25) {
      setFormData((prev) => ({
        ...prev,
        experience: {
          ...prev.experience,
          isValid: false,
        },
      }));
      invalid = true;
    }
    if (invalid) {
      return;
    }
    const payload = {
      firstName: formData.firstName.value.trim(),
      lastName: formData.lastName.value?.trim() || "", // optional
      email: formData.email.value.trim(),
      jobRole: formData.jobRole.value.trim(),
      skills: formData.skills.value,
      experience: exp,
    };

    console.log("Candidate Payload:", payload);
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
                <Input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  formData={formData}
                  onChange={onChangeHandler}
                  message={"First name is required"}
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  formData={formData}
                  onChange={onChangeHandler}
                />
              </div>

              {/* Email */}
              <Input
                type="email"
                placeholder="Email address"
                name="email"
                formData={formData}
                onChange={onChangeHandler}
                message={"Invalid email"}
              />

              {/* Job Role Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsRoleOpen((prev) => !prev)}
                  className={`input-dark w-full flex items-center  border-[1px] border-white/10 bg-[var(--color-input-bg)]  justify-between ${formData.jobRole.isValid ? "bg-[var(--color-input-bg)]  text-[var(--color-text-primary)] border-[1px] border-white/10 placeholder-[var(--color-text-muted)]" : "bg-red-400 border-red-300 text-white placeholder-white"}`}
                >
                  <span className={formData.jobRole.value ? "text-white" : "text-gray-300"}>
                    {formData.jobRole.value || "Select Job Role"}
                  </span>

                  <svg
                    className={`w-4 h-4 transition-transform ${isRoleOpen ? "rotate-180" : ""
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
                {!formData.jobRole.isValid && <span className="text-red-500 text-sm">{"Job Role is required"}</span>}

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
                        onClick={jobRoleHandler.bind(null, role.title, index)}
                        className={`w-full px-4 py-3 text-left text-sm transition
                          ${formData.jobRole.value === role.title
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
              <Input
                type="number"
                placeholder="Year Of Experience"
                max={25}
                min={0}
                name="experience"
                formData={formData}
                message={"Experience should be between 0 and 25"}
                onChange={onChangeHandler}
              />
              {/* Language / Skill Selection */}
              {jobRoleIndex !== null && (
                <div className="mt-2 flex flex-col items-center">
                  <p className="text-white font-medium mb-3">
                    Choose your preferred skills
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {JSON.parse(roles[jobRoleIndex].role_skills)?.map(
                      (lang) => {
                        const active = formData.skills.value.includes(lang);
                        return (
                          <button
                            key={lang}
                            type="button"
                            onClick={() => toggleLanguage(lang)}
                            className={`px-4 py-2 rounded-full text-sm border transition
              ${active
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
                  {!formData.skills.isValid && <span className="text-red-500 text-sm">{"Skills are required"}</span>}
                </div>
              )}
              {/* Submit */}
              <MainButton onClick={handleSubmit}>
                Register
              </MainButton>
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