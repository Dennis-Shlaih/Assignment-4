import { useQuery } from '@tanstack/react-query'
import { Link, useSearchParams } from 'react-router-dom'
import { fetchItems } from '../services/api'

import { useUiStore } from "../store/useUiStore";

import SearchBar from '../components/SearchBar'
import type { Item } from '../types/Item'

function CatalogPage() {
    const [searchParams] = useSearchParams();
    const {
        data,
        isPending,
        isError
    } = useQuery<Item[]>({
        queryKey: ["items"],
        queryFn: fetchItems
    });

    const density = useUiStore((state) => state.density);

    if (isPending) {
        return <p>Loading...</p>
    }
    if (isError) {
        return <p>Error loading catalog</p>
    }
    if (!data) {
        return <p>No data</p>
    }
    
    const query = searchParams.get("q") ?? "";
    const filteredData = data?.filter((item) => 
        item.title.toLowerCase().includes(query.toLowerCase()));

    return (
        <main className="p-6">
            <h1 className="text-3xl font-bold mb-6">
                MyWatch
            </h1>
            <SearchBar/>
            <div className="space-y-4">
                {filteredData.map((item) => (
                <Link 
                    to={`/items/${item.id}`}
                    key = {item.id}
                    className="block"
                >
                    <div className={`border rounded ${
                        density === "compact" 
                        ? "p-2" 
                        : "p-5"
                    }`}
                    >
                        <h2 className="font-semibold">
                            {item.title}
                        </h2>
                        <p>{item.creator}</p>
                        <p>{item.year}</p>
                        <p>{item.genre}</p>
                        <p>Status: {item.status}</p>
                    </div>
                </Link>
                ))}
            </div>    
        </main>
    );  
}

export default CatalogPage;