import React from "react";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({ error, errorInfo });

    // 🔹 Optional: send error logs to server
    // logErrorToService(error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="font-montserrat w-[300px] h-[250px] -translate-x-[6px] -translate-y-[6px] bg-pink-400 border-4 border-black shadow-[12px_12px_0_#000000] overflow-hidden transition-all duration-300">
          <div className="font-bold text-sm w-full h-8 bg-white px-3 py-1 text-black border-b-4 border-black flex items-center">
            Window
          </div>
          <div className="p-3 text-sm font-semibold">
            This is a neobrutalist-style window with a button and space for any
            content you want!
            <br />
            <button className="px-3 py-1 mt-3 border-4 border-black shadow-[3px_3px_0_#000000] font-bold bg-green-400 transition-all duration-300 cursor-pointer hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0_#000000] hover:bg-sky-400 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none">
              Button
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
