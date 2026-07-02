import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { fetchItems } from '../services/api'
import type { Item } from '../types/Item'

function CatalogPage() {
    const {
        data,
        isPending,
        isError
    } = useQuery<Item[]>({
        queryKey: ["items"],
        queryFn: fetchItems
    });

    if (isPending) {
        return <p>Loading...</p>
    }
    if (isError) {
        return <p>Error loading catalog</p>
    }

    return (
        <main className="p-6">
            <h1 className="text-3xl font-bold mb-6">
                MyWatch
            </h1>
            <div className="space-y-4">
                {data?.map((item) => (
                <Link 
                    to={`/items/${item.id}`}
                    key = {item.id}
                    className="block"
                >
                    <div className="p-4 border rounded">
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