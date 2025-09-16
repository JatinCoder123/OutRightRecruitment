import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import StartTest from "../components/StartTest.jsx";
import { questionsAction } from "../store/slices/questionsSlice.js";
import DSAQuiz from "../components/DsaQuiz.jsx";
import PageLoader from "../components/PageLoader.jsx";
import { useNavigate } from "react-router-dom";

export default function RoleSpecifixTest() {
  const [isStart, setStart] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    dsaQuestions,
    dsaLoading: loading,
    dsaError: error,
  } = useSelector((state) => state.questions);
  const { dsaTestComplete } = useSelector((state) => state.result);

  function handleStart() {
    setStart(true);
  }

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(questionsAction.clearDsaErrors());
    }
    if (dsaTestComplete) navigate("/testended");
  }, [error, dispatch]);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="pt-8 w-full max-w-7xl mx-auto px-4 sm:px-6">
      {!isStart ? (
        <StartTest
          testDetails={{
            name: "DSA Test",
            time: "30 minutes",
            format: "Coding Questions",
          }}
          setStart={handleStart}
        />
      ) : (
        <DSAQuiz
          questions={dsaQuestions || []}
          timerDuration={30 * 60} // 30 mins in seconds
          to="testended" // navigate to /end after submit
        />
      )}
    </div>
  );
}
