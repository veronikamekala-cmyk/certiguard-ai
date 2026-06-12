export default function Dashboard() {
    return (
        <main className="min-h-screen p-8">
            <h1 className="mb-6 text-4xl font-bold">
                CertiGuard AI Dashboard
            </h1>

            <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border p-6 shadow">
                    <h2 className="text-xl font-semibold">
                        Total Certificates
                    </h2>
                    <p className="mt-2 text-3xl">0</p>
                </div>

                <div className="rounded-lg border p-6 shadow">
                    <h2 className="text-xl font-semibold">
                        Verified
                    </h2>
                    <p className="mt-2 text-3xl">0</p>
                </div>

                <div className="rounded-lg border p-6 shadow">
                    <h2 className="text-xl font-semibold">
                        Suspicious
                    </h2>
                    <p className="mt-2 text-3xl">0</p>
                </div>
            </div>
        </main>
    );
}