import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import Language from "./pages/Language";
import Aptitude from "./pages/Aptitude";
import RoleSpecifixTest from "./pages/RoleSpecifixTest";
import DsaTest from "./pages/DsaTest.jsx";
import { useDispatch } from "react-redux";
import { getJobRoles } from "./store/slices/jobRoleSlice.js";
import { useEffect } from "react";
import {
  getCandidate,
  getCandidateSkills,
} from "./store/slices/candidateSlice.js";
import StartPage from "./pages/StartPage.jsx";
import Testing from "./pages/Testing.jsx";
import EndScreen from "./pages/EndScreen.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true, // default child route for "/"
        element: (
          <ErrorBoundary>
            <HomePage />
          </ErrorBoundary>
        ),
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "language",
        element: <Language />,
      },
      {
        path: "startTest",
        element: <StartPage />,
      },
      {
        path: "aptitude",
        element: <Aptitude />,
      },

      {
        path: "roleBasedTest",
        element: <RoleSpecifixTest />,
      },
      {
        path: "dsa",
        element: <DsaTest />,
      },
      {
        path: "testended",
        element: <EndScreen />,
      },
      {
        path: "testing",
        element: <Testing />,
      },
    ],
  },
]);

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobRoles());
    const id = localStorage.getItem("candidate_id");
    if (id) {
      dispatch(getCandidate(id));
      dispatch(getCandidateSkills(id));
    }
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
