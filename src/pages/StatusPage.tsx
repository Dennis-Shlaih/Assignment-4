import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams, Link } from "react-router-dom";

import { fetchItems } from "../services/api";

import { useUiStore } from "../store/useUiStore";

import type { Item } from "../types/Item";

function StatusPage() {
    const { status } = useParams();
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") ?? "";
    const {
        data,
        isPending,
        isError
    } = useQuery<Item[]>({
        queryKey: ["items"],
        queryFn: fetchItems
    });
    
    const density = useUiStore((state) => state.density);

    if (isPending) return <p>Loading...</p>;
    if (isError) return <p>Error loading items</p>;
    if (!data) return <p>No data</p>;

    const statusFiltered = data.filter((item) => item.status === status);

    const filteredData = statusFiltered.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <main className="p-6">
            <h1 className="text-3xl font-bold mb-4">
                Status: {status}
            </h1>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredData.map((item) => (
                    <Link
                        to={`/items/${item.id}`}
                        key={item.id}
                        className="block"
                    >
                        <div className={`border rounded ${density === "compact"
                            ? "p-2" 
                            : "p-5"
                        }`}>
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

export default StatusPage;