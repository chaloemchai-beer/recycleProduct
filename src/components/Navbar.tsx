"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";

export default function Navbar() {
  const { role } = useAuth();
  const { items } = useCart();
  const cartCount = items.reduce((sum, i) => sum + i.qty, 0);
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full bg-[var(--background)]/80 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-3">
        {/* Brand */}
        <Link href="/" className="text-xl font-semibold text-[var(--foreground)]">
          Recycle<span className="text-green-600">Ecom</span>
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-[var(--foreground)]">
          <li>
            <Link href="/products" className="hover:text-green-600">Products</Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-green-600">Blog</Link>
          </li>
          <li>
            <Link href="/cart" className="flex items-center gap-1 hover:text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h11l4-8H5.4" />
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
              </svg>
              <span>({cartCount})</span>
            </Link>
          </li>
          {role !== "guest" ? (
            <li>
              <button
                onClick={() => {
                  if (typeof window !== "undefined") {
                    localStorage.removeItem("role");
                  }
                  location.href = "/";
                }}
                className="hover:text-green-600"
              >
                Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link href="/login" className="hover:text-green-600">Login</Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-green-600">Sign Up</Link>
              </li>
            </>
          )}
        </ul>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="md:hidden p-2 text-[var(--foreground)] focus:outline-none"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-[var(--background)] border-t border-neutral-200 dark:border-neutral-800">
          <ul className="flex flex-col gap-4 p-4 text-sm font-medium text-[var(--foreground)]">
            <li>
              <Link href="/products" onClick={() => setOpen(false)}>Products</Link>
            </li>
            {role === "seller" && (
              <li>
                <Link href="/sell" onClick={() => setOpen(false)}>Sell</Link>
              </li>
            )}
            {role === "seller" && (
              <li>
                <Link href="/blog/new" onClick={() => setOpen(false)}>New Post</Link>
              </li>
            )}
            <li>
              <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
            </li>
            <li>
              <Link href="/cart" onClick={() => setOpen(false)} className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h11l4-8H5.4" />
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
              </svg>
              <span>({cartCount})</span>
            </Link>
            </li>
            {role !== "guest" ? (
              <li>
                <button
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      localStorage.removeItem("role");
                    }
                    location.href = "/";
                  }}
                  className="text-left"
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link href="/login" onClick={() => setOpen(false)}>Login</Link>
                </li>
                <li>
                  <Link href="/register" onClick={() => setOpen(false)}>Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
