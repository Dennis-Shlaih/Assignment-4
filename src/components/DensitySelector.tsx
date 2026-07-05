import { useUiStore } from "../store/useUiStore";

function DensitySelector() {
    const density = useUiStore((state) => state.density)
    const setDensity = useUiStore((state) => state.setDensity);
    const theme = useUiStore((state) => state.theme)

    return (
        <select
        value={density}
        onChange={(e) => setDensity(e.target.value as "compact" || "comfortable")}
        className={`border rounded p-2 ${
            theme === "dark" 
                ? "bg-gray-800 text-white border-gray-600" 
                : "bg-white text-black border-gray-300"
            }`}
        > 
            <option value="compact">Compact</option>
            <option value="comfortable">Comfortable</option>
        </select>
    );
}

export default DensitySelector;