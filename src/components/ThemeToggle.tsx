import { useUiStore } from "../store/useUiStore";

function ThemeToggle() {
    const theme = useUiStore((state) => state.theme);
    const toggleTheme = useUiStore((state) => state.toggleTheme);

    return (
        <button
            onClick={toggleTheme}
            className={`border rounded px-4 py-2 transition ${
                theme === "dark"
                    ? "bg-gray-800 text-white border-gray-600 hover:bg-gray-700"
                    : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
        >
            Theme: {theme}
        </button>
    );
}

export default ThemeToggle;