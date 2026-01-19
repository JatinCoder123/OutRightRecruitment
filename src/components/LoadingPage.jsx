import { Atom } from "react-loading-indicators";

const LoadingPage = () => {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-slate-900">
            <Atom color="#32cd32" size="medium" />
            <p className="mt-4 text-sm text-gray-200 tracking-wide">
                Please wait a moment
            </p>
        </div>
    );
};

export default LoadingPage;
