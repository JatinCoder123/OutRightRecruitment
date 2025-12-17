export const Title = () => {
  return (
    <div className="flex items-center gap-3 mb-10">
      <img
        src="/logo.png"
        className="sm:w-18 sm:h-18 w-12 h-12 drop-shadow-[0_0_20px_rgba(99,102,241,0.5)]"
        alt="Outright Recruitment"
      />
      <div>
        <h2 className="sm:text-3xl text-xl font-extrabold text-white">
          OutRight{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Recruitment
          </span>
        </h2>
        <p className="sm:text-sm text-xs text-gray-400 mt-1">
          Smart interview & assessment platform
        </p>
      </div>
    </div>
  );
};
