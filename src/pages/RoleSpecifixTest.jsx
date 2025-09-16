import Quiz from "../components/Quiz";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import StartTest from "../components/StartTest.jsx";
import { getRoleBasedQuestion } from "../store/slices/questionsSlice.js";
import PageLoader from "../components/PageLoader.jsx";
import { useNavigate } from "react-router-dom";
const testDetails = {
  name: "Role Based Test",
  type: "role",
  time: 20,
  format: "MCQ - 30 Questions",
};
export default function RoleSpecifixTest() {
  const [isStart, setStart] = useState(false);
  const {
    roleBasedQuestions,
    roleBasedLoading: loading,
    roleBasedError: error,
  } = useSelector((state) => state.questions);
  const { roleTestComplete } = useSelector((state) => state.result);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleStart() {
    setStart(true);
  }
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(candidateAction.clearAllErrors());
    }
    if (roleTestComplete) navigate("/dsa");
  }, [error, roleBasedQuestions, roleTestComplete, loading, dispatch]);

  return (
    <div className="pt-8">
      {!isStart && (
        <StartTest
          testDetails={testDetails}
          setStart={handleStart}
          getQuestion={getRoleBasedQuestion}
        />
      )}
      {isStart && loading && <PageLoader />}
      {isStart && !loading && (
        <Quiz
          questions={roleBasedQuestions}
          to={"dsa"}
          testDetails={testDetails}
        />
      )}
    </div>
  );
}
