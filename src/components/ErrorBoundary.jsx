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
            {error}
          </div>
          <div className="p-3 text-sm font-semibold">
            {errorInfo}
            <br />
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
