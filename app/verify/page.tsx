export default function VerifyPage() {
    return (
        <main className="min-h-screen p-8">
            <h1 className="mb-6 text-3xl font-bold">Certificate Verification Result</h1>

            <div className="rounded-lg border p-6 shadow">
                <h2 className="text-xl font-semibold">Status: Verified ✅</h2>

                <div className="mt-4 space-y-2">
                    <p><strong>Authenticity Score:</strong> 92%</p>
                    <p><strong>Institution:</strong> Example University</p>
                    <p><strong>Certificate ID:</strong> CERT-2026-001</p>
                    <p><strong>Verification Date:</strong> Today</p>
                </div>
            </div>
        </main>
    );
}