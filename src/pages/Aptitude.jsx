import Quiz from "../components/Quiz";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import StartTest from "../components/StartTest.jsx";
import {
  getAptiQuestion,
  getRoleBasedQuestion,
  questionsAction,
} from "../store/slices/questionsSlice.js";
import { toast } from "react-toastify";
import PageLoader from "../components/PageLoader.jsx";
import { useNavigate } from "react-router-dom";

const testDetails = {
  name: "Aptitude Test",
  type: "apti",
  time: 10,
  format: "MCQ - 20 Questions",
};
export default function Aptitude() {
  const [isStart, setStart] = useState(false);
  const {
    aptiQuestions,
    aptiLoading: loading,
    aptiError: error,
  } = useSelector((state) => state.questions);
  const { aptiTestComplete } = useSelector((state) => state.result);
  const { candidate } = useSelector((state) => state.candidate);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleStart() {
    setStart(true);
  }
  useEffect(() => {
    dispatch(getRoleBasedQuestion(candidate.id, candidate.role_id));
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(questionsAction.clearAptiErrors());
    }
    if (aptiTestComplete) navigate("/roleBasedTest");
  }, [error, aptiQuestions, aptiTestComplete, loading, dispatch]);

  return (
    <div className="pt-8">
      {!isStart && (
        <StartTest
          testDetails={testDetails}
          setStart={handleStart}
          getQuestion={getAptiQuestion}
        />
      )}
      {isStart && loading && <PageLoader text={"Fetching Questions For You"} />}
      {isStart && !loading && (
        <Quiz
          questions={aptiQuestions}
          to={"roleBasedTest"}
          testDetails={testDetails}
        />
      )}
    </div>
  );
}
