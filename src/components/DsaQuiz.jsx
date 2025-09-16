import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";
import { useDispatch, useSelector } from "react-redux";
import { resultActions, submitDSAAnswers } from "../store/slices/resultSlice";
import { toast } from "react-toastify";
import LoadingButton from "./LoadingButton";

export default function DSAQuiz({ questions = [], timerDuration = 1800, to }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { loading, error, message } = useSelector((state) => state.result);
  const { candidate } = useSelector((state) => state.candidate);
  const [codeStorage, setCodeStorage] = useState({});
  const [language, setLanguage] = useState("java");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showGrid, setShowGrid] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timerDuration);

  const gridRef = useRef(null);
  const editorRef = useRef(null);

  const currentQuestion = questions[currentIndex] || {
    id: 0,
    question: "No question available",
  };
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;

    // 🚫 Disable all validation for JavaScript/TypeScript
    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: true,
      noSyntaxValidation: true,
    });
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: true,
      noSyntaxValidation: true,
    });
  }

  const handleCodeChange = (value) => {
    setCodeStorage((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        question: currentQuestion,
        language,
        answer: value,
      },
    }));
  };

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    setCodeStorage((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        question: currentQuestion,
        language: selectedLang,
        answer: prev[currentQuestion.id]?.answer || "",
      },
    }));
  };

  const goTo = (index) => {
    if (timeLeft <= 0) return;
    if (index >= 0 && index < questions.length) {
      setCurrentIndex(index);
      setLanguage(codeStorage[questions[index].id]?.language || "java");
      setShowGrid(false);
    }
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const timerId = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };
  useEffect(() => {
    if (!showGrid) return;
    const handleClickOutside = (event) => {
      if (gridRef.current && !gridRef.current.contains(event.target)) {
        setShowGrid(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showGrid]);

  const handleSubmit = () => {
    if (Object.keys(candidate).length > 0) {
      dispatch(submitDSAAnswers(candidate.id, codeStorage));
    }
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(resultActions.clearAllError());
    }
    if (message) {
      toast.success(message);
      navigate(`/${to}`);
      dispatch(resultActions.clearMessage());
    }
  }, [error, loading, message, candidate, dispatch]);

  return (
    <div className="relative w-full max-w-7xl mx-auto p-4 sm:p-6">
      {/* Timer */}
      <div className="flex justify-center mb-4">
        <div
          className={`px-5 py-2 rounded-lg shadow-md font-semibold text-lg ${
            timeLeft <= 10 ? "bg-red-600 text-white" : "bg-gray-800 text-white"
          }`}
        >
          ⏳ {formatTime(timeLeft)}
        </div>
      </div>

      {/* Toggle Question Grid */}
      <button
        onClick={() => setShowGrid((prev) => !prev)}
        disabled={timeLeft <= 0}
        className="absolute top-4 right-4 p-2 rounded-lg bg-[var(--color-surface)] hover:bg-[var(--color-primary)] text-white transition disabled:opacity-50"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Split Layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: Question */}
        <motion.div
          key={currentQuestion.id || currentIndex}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.4 }}
          className="bg-[var(--color-surface)] rounded-2xl p-6 shadow-lg flex-1 overflow-y-auto max-h-[500px]"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            {currentQuestion?.question || "Question not available"}
          </h2>

          {currentQuestion?.example_input && (
            <div className="mb-2">
              <strong>Example Input:</strong>
              <pre className="bg-gray-900 text-white p-2 rounded mt-1 whitespace-pre-wrap">
                {currentQuestion.example_input}
              </pre>
            </div>
          )}

          {currentQuestion?.example_output && (
            <div className="mb-2">
              <strong>Example Output:</strong>
              <pre className="bg-gray-900 text-white p-2 rounded mt-1 whitespace-pre-wrap">
                {currentQuestion.example_output}
              </pre>
            </div>
          )}
        </motion.div>

        {/* Right: Editor */}
        <motion.div
          className="flex-1 h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-700 flex flex-col"
          ref={editorRef}
        >
          {/* Language Dropdown */}
          <div className="flex justify-end p-2 bg-gray-800 border-b border-gray-700">
            <select
              value={language}
              onChange={handleLanguageChange}
              className="bg-gray-900 text-white px-3 py-1 rounded-lg outline-none border border-gray-700 focus:border-sky-500"
            >
              <option value="java">Java</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="cpp">C++</option>
              <option value="php">PHP</option>
            </select>
          </div>

          {/* Code Editor */}
          <div className="md:h-[100vh] h-[60vh]">
            <Editor
              height="100%"
              language={language}
              theme="vs-dark"
              onMount={handleEditorDidMount}
              value={codeStorage[currentQuestion.id]?.answer || ""}
              onChange={handleCodeChange}
              options={{
                fontSize: 14,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                wordWrap: "on",
                automaticLayout: true,
                scrollbar: {
                  alwaysConsumeMouseWheel: false,
                },

                // 🚫 Disable Monaco "smart" features
                quickSuggestions: false,
                suggestOnTriggerCharacters: false,
                parameterHints: { enabled: false },
                hover: { enabled: false },
                contextmenu: false,
                links: false,
                selectionHighlight: false,
                occurrencesHighlight: false,
                codeLens: false,
                lineDecorationsWidth: 0,
                lineNumbersMinChars: 0,
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col gap-7 sm:flex-row sm:justify-between items-center mt-6">
        <div className="flex gap-10 sm:gap-3">
          <button
            onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
            disabled={currentIndex === 0 || timeLeft <= 0}
            className="px-4 py-2 bg-gray-600 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          {currentIndex < questions.length - 1 && (
            <button
              onClick={() =>
                setCurrentIndex((prev) =>
                  Math.min(prev + 1, questions.length - 1)
                )
              }
              disabled={timeLeft <= 0}
              className="px-4 py-2 bg-primary hover:bg-primary-hover rounded-lg disabled:opacity-50"
            >
              Next
            </button>
          )}
        </div>

        {/* Submit */}
        {loading ? (
          <LoadingButton text={"Checking..."} />
        ) : (
          <button
            onClick={handleSubmit}
            disabled={timeLeft <= 0}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg disabled:opacity-50"
          >
            Submit
          </button>
        )}
      </div>

      {/* Question Grid */}
      <AnimatePresence>
        {showGrid && (
          <motion.div
            ref={gridRef}
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-64 bg-[var(--color-surface)] shadow-lg p-6 z-50 overflow-y-auto"
          >
            <h3 className="flex items-center text-lg font-semibold mb-4">
              <ChevronLeft onClick={() => setShowGrid((prev) => !prev)} />
              Questions
            </h3>
            <div className="grid grid-cols-4 gap-3">
              {questions.map((q, index) => (
                <button
                  key={q?.id || index}
                  onClick={() => goTo(index)}
                  disabled={timeLeft <= 0}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition ${
                    index === currentIndex
                      ? "bg-[var(--color-primary)] text-white"
                      : codeStorage[q?.id]?.answer
                      ? "bg-green-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  } ${timeLeft <= 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
