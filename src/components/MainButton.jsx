export default function MainButton({ children, onClick, loading, loadingText }) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={loading}
            className="w-full mt-6 rounded-full py-3 
            bg-gradient-to-r from-indigo-500 to-purple-600
            text-white font-semibold shadow-lg
            hover:scale-[1.02] active:scale-[0.98]
            transition-transform"
        >
            {loading ? <div className="flex items-center justify-center gap-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                {loadingText}
            </div> : children}
        </button>
    )
}