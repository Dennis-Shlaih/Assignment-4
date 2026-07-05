function AboutPage() {
    return (
        <main className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">
                About MyWatch
            </h1>

            <p className="mb-4">
                MyWatch is a personal movie tracker that helps users keep
                track of films they want to watch, are currently watching,
                have completed, or have dropped.
            </p>

            <p className="mb-4">
                Users can browse a catalog of movies, search by title,
                filter by status, update ratings and notes, and organize
                their watch list.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">
                Technologies
            </h2>

            <ul className="list-disc pl-6 space-y-1">
                <li>React + TypeScript</li>
                <li>React Router</li>
                <li>TanStack Query</li>
                <li>Zustand</li>
                <li>json-server</li>
                <li>Tailwind CSS</li>
            </ul>
        </main>
    );
}

export default AboutPage;