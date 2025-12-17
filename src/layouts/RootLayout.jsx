import { Outlet, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[--color-bg] text-[--color-text-primary]">
      {/* Navbar */}
      <header className="bg-[--color-surface] shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <Link to={"/"}>
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="App Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold tracking-wide text-red-500">
                OutRight
              </span>
              <span className="text-xl font-bold tracking-wide text-primary">
                Recruitment
              </span>
            </div>
          </Link>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1 container mx-auto px-6 py-10">
        <Outlet />
      </main>
      {/* Toast Container */}


      {/* Footer */}
      <footer className="bg-[--color-surface] py-4 text-center text-[--color-text-secondary] text-sm">
        © {new Date().getFullYear()} QuizApp. All rights reserved.
      </footer>
    </div>
  );
}
