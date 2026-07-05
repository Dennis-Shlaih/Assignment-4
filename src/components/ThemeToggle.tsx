import { useUiStore } from "../store/useUiStore";

function ThemeToggle() {
    const theme = useUiStore((state) => state.theme);
    const toggleTheme = useUiStore((state) => state.toggleTheme);

    return (
        <button
            onClick={toggleTheme}
            className="border rounded px-4 py-2"
        >
            Theme: {theme}
        </button>
    );
}

export default ThemeToggle;