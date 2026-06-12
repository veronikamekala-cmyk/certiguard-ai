"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UploadPage() {
    const router = useRouter();
    const [fileName, setFileName] = useState("");

    const handleUpload = () => {
        if (!fileName) {
            alert("Please select a certificate file.");
            return;
        }

        router.push("/verify");
    };

    return (
        <main className="flex min-h-screen items-center justify-center">
            <div className="w-full max-w-lg rounded-lg border p-6 shadow">
                <h1 className="mb-4 text-2xl font-bold">
                    Upload Certificate
                </h1>

                <input
                    type="file"
                    className="w-full rounded border p-3"
                    onChange={(e) =>
                        setFileName(e.target.files?.[0]?.name || "")
                    }
                />

                {fileName && (
                    <p className="mt-3 text-sm">
                        Selected: {fileName}
                    </p>
                )}

                <button
                    onClick={handleUpload}
                    className="mt-4 w-full rounded bg-black p-3 text-white"
                >
                    Upload & Verify
                </button>
            </div>
        </main>
    );
}