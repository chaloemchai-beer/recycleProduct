"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError(null);
    // TODO: Replace with real sign-up logic or API call
    console.log("Sign up", { name, email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[var(--background)]">
      <div className="w-full max-w-md space-y-6 rounded-lg border border-solid border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 shadow">
        <h1 className="text-center text-2xl font-semibold text-[var(--foreground)]">Create your account</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)]">
              Name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 text-[var(--foreground)] placeholder:text-neutral-500 outline-none focus:border-black dark:focus:border-white"
            />
          </div>

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
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 text-[var(--foreground)] placeholder:text-neutral-500 outline-none focus:border-black dark:focus:border-white"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-[var(--foreground)]">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 text-[var(--foreground)] placeholder:text-neutral-500 outline-none focus:border-black dark:focus:border-white"
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-md bg-foreground px-4 py-2 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            Sign up
          </button>
        </form>

        <p className="text-center text-sm text-[var(--foreground)]">
          Already have an account? {" "}
          <Link href="/login" className="underline hover:no-underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
