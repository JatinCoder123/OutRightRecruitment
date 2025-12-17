export default function MainButton({ children, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="w-full mt-6 rounded-full py-3 
            bg-gradient-to-r from-indigo-500 to-purple-600
            text-white font-semibold shadow-lg
            hover:scale-[1.02] active:scale-[0.98]
            transition-transform"
        >
            {children}
        </button>
    )
}