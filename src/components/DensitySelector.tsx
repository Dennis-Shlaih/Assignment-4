import { useUiStore } from "../store/useUiStore";

function DensitySelector() {
    const density = useUiStore((state) => state.density)
    const setDensity = useUiStore((state) => state.setDensity);

    return (
        <select
        value={density}
        onChange={(e) => setDensity(e.target.value as "compact" || "comfortable")}
        className="border rounded p-2"> 
            <option value="compact">Compact</option>
            <option value="comfortable">Comfortable</option>
        </select>
    );
}

export default DensitySelector;