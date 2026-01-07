import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import { useDispatch } from "react-redux";
import { getJobRoles } from "./store/slices/jobRole.js";
import { useEffect } from "react";
import { getCandidate } from "./store/slices/candidate.js";
import { ToastContainer } from "react-toastify";
import Terms from "./components/Terms.jsx";
import TestPage from "./pages/TestPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <RegisterPage />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/test",
        element: <TestPage />,
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
    }
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
