import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { fetchItem } from '../services/api'
import type { Item } from '../types/Item'


function DetailPage() {
    const { id } = useParams()

    const {data, isPending, isError} = useQuery<Item>(
        {
            queryKey: ["Items", id],
            queryFn: () => fetchItem(id!)
        }
    );

    if (isPending) {
        return <p>Loading...</p>
    }
    if (isError) {
        return <p>Error loading item</p>
    }
     if (!data) {
        return <p>Item not found.</p>;
    }

    return (
        <main className="p-6">
            <h1 className="text-3xl font-bold">
                {data.title}
            </h1>
            <p>Creator: {data.creator}</p>
            <p>Year: {data.year}</p>
            <p>Genre: {data.genre}</p>
            <p>Status: {data.status}</p>
            <p>Rating: {data.rating ?? "Not rated"}</p>
            <p>Note: {data.note ?? "No notes yet"}</p>
        </main>
    );
}

export default DetailPage;