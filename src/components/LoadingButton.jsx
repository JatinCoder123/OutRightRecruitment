import { Hourglass } from "ldrs/react";
import "ldrs/react/Hourglass.css";

const LoadingButton = ({ text }) => {
  return (
    <button
      className="flex items-center justify-center w-full font-bold "
      disabled
    >
      <Hourglass size="50" bgOpacity="0.1" speed="2" color="#06b6d4" />
      {text}...
    </button>
  );
};

export default LoadingButton;
