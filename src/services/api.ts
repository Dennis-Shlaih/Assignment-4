const API_URL = "http://localhost:3001";
import type {Item} from '../types/Item'
export async function fetchItems() {
    const response = await fetch(`${API_URL}/items`);

    if (!response.ok) {
        throw new Error("Failed to fetch items");
    }

    return response.json();
}

export async function fetchItem(id: string) {
    const response = await fetch(`${API_URL}/items/${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch item");
    }
    return response.json();
}

export async function updateItem(
    id: number,
    updates: Partial<Item>
) {
    const response = await fetch(`${API_URL}/items/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updates),
    });

    if (!response.ok) {
        throw new Error("Failed to update item");
    }

    return response.json();
}