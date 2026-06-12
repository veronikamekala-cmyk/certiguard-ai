"use client";

import { useState } from "react";
import { api } from "@/lib/api";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {

        const res = await api("/api/auth/login", {
            method: "POST",
            body: JSON.stringify({
                email,
                password
            })
        });

        const data = await res.json();

        if (data.token) {
            localStorage.setItem("token", data.token);
            alert("Login Success");
        } else {
            alert(data);
        }
    }

    return (
        <main className="flex min-h-screen items-center justify-center">

            <div className="w-full max-w-md rounded-lg border p-6 shadow-lg">

                <h1 className="mb-6 text-center text-3xl font-bold">
                    CertiGuard AI
                </h1>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-4 w-full rounded border p-3"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-4 w-full rounded border p-3"
                />

                <button
                    onClick={handleLogin}
                    className="w-full rounded bg-black p-3 text-white"
                >
                    Login
                </button>

            </div>

        </main>
    );
}