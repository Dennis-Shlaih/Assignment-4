import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useUiStore} from '../store/useUiStore';

function SearchBar() {
    const theme = useUiStore((state) => state.theme)

    const [searchParams, setSearchParams] = useSearchParams();
    const initialQuery = searchParams.get("q") ?? "";
    const [value, setValue] = useState(initialQuery);
    useEffect(() => {
        setValue(initialQuery);
    }, [initialQuery]);
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newValue = e.target.value;
        setValue(newValue);
        const params = new URLSearchParams(searchParams);
        if (newValue.trim() === "") {
            params.delete("q");
        } 
        
        else {
            params.set("q", newValue);
        }
        setSearchParams(params);
    }

    return (
        <div className="w-full">
            <input 
                className={`border rounded px-4 py-2 w-full ${
                    theme === "dark" 
                        ? "bg-gray-800 text-white border-gray-600" 
                        : "bg-white text-black border-gray-300"
                }`}
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Search by title..."
            />
        </div>
    );
}
export default SearchBar