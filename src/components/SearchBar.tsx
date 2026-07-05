import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

function SearchBar() {
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
        <div className="w-full max-w-md">
            <input 
                className="w-full p-2 border rounded"
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Search by title..."
            />
        </div>
    );
}
export default SearchBar