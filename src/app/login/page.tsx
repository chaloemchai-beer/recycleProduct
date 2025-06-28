"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { setRole } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "admin@admin.com" && password === "admin@admin.com") {
      setRole("seller");
      router.push("/sell");
    } else if (email === "user@email.com" && password === "user@email.com") {
      setRole("user");
      router.push("/products");
    } else {
      setRole("guest");
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[var(--background)]">
      <div className="w-full max-w-md space-y-6 rounded-lg border border-solid border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 shadow">
        <h1 className="text-center text-2xl font-semibold text-[var(--foreground)]">Sign in to your account</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)]">
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 text-[var(--foreground)] placeholder:text-neutral-500 outline-none focus:border-black dark:focus:border-white"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[var(--foreground)]">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 text-[var(--foreground)] placeholder:text-neutral-500 outline-none focus:border-black dark:focus:border-white"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-foreground px-4 py-2 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            Sign in
          </button>
        </form>

        <p className="text-center text-sm text-[var(--foreground)]">
          Don&apos;t have an account? {" "}
          <Link href="/register" className="underline hover:no-underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
