import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { fetchItem, updateItem } from '../services/api'

import type { Item } from '../types/Item'

function DetailPage() {
    const queryClient = useQueryClient();
    const { id } = useParams()

    const {data, isPending, isError} = useQuery<Item>(
        {
            queryKey: ["items", id],
            queryFn: () => fetchItem(id!)
        }
    );
    
    const statusMutation = useMutation({
        mutationFn: (newStatus: Item["status"]) =>
            updateItem(Number(id), {
                status: newStatus,
            }),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["items"],
            });
        },
    });

    const ratingMutation = useMutation({
        mutationFn: (newRating: number | null) =>
            updateItem(Number(id), {
                rating: newRating,
            }),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["items"],
            });
        },
    });

    const noteMutation = useMutation({
        mutationFn: (newNote: string) =>
            updateItem(Number(id), {
                note: newNote,
            }),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["items"],
            });
        },
    });

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
            <select
                value={data.status}
                onChange={(e) =>
                    statusMutation.mutate(
                        e.target.value as Item["status"]
                    )
                }
                className="border rounded p-2"
            >
                <option value="want">Want</option>
                <option value="active">Active</option>
                <option value="done">Done</option>
                <option value="dropped">Dropped</option>
            </select>
            <select
                value={data.rating ?? ""}
                onChange={(e) =>
                    ratingMutation.mutate(
                        e.target.value === "" ? null : Number(e.target.value)
                    )
                }
                className="border rounded p-2"
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </main>
    );
}

export default DetailPage;