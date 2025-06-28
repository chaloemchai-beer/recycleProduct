"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const mockProducts: Product[] = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    price: 45,
    image: "https://images.unsplash.com/photo-1706765779494-2705542ebe74?q=80&w=1051&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Refurbished Smartphone",
    price: 120,
    image: "https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Wooden Dining Chair",
    price: 30,
    image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=1518&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Mountain Bike",
    price: 220,
    image: "https://plus.unsplash.com/premium_photo-1678718713393-2b88cde9605b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function Section({ title, products, role }: { title: string; products: Product[]; role: string }) {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-[var(--foreground)]">{title}</h2>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="flex flex-col rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden bg-[var(--background)]"
          >
            <Image src={p.image} alt={p.title} width={400} height={300} className="object-cover h-48 w-full" />
            <div className="flex-1 p-4 flex flex-col justify-between gap-4">
              <div>
                <h3 className="text-lg font-medium text-[var(--foreground)] line-clamp-2">{p.title}</h3>
                <p className="text-green-600 font-semibold mt-1">${p.price}</p>
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/products/${p.id}`}
                  className="rounded-md border border-foreground px-4 py-1.5 text-sm font-medium hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-colors"
                >
                  Details
                </Link>
                {role === "seller" && (
                  <Link
                    href={`/sell?edit=${p.id}`}
                    className="rounded-md bg-foreground text-background px-4 py-1.5 text-sm font-medium hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
                  >
                    Edit
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ProductsPage() {
  const { role } = useAuth();
  const latest = mockProducts;
  const recommended = mockProducts.slice().reverse();
  const popular = mockProducts;
  const deals = mockProducts.filter((_, i) => i % 2 === 0);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-10">
      <header className="text-center space-y-3">
        {role === "seller" && (
          <div className="flex justify-end mb-4">
            <Link href="/sell" className="rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-[#383838] dark:hover:bg-[#ccc]">Add Product</Link>
          </div>
        )}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">Products</h1>
        <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          Browse our curated selection of quality second-hand items ready for a new home.
        </p>
      </header>

      {/* Banner */}
      <div className="w-full h-40 sm:h-56 rounded-lg overflow-hidden relative">
        <Image src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80" alt="promo" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-white text-2xl sm:text-3xl font-bold">Summer Sale up to 50% off!</h2>
        </div>
      </div>

      {/* Latest */}
      <Section title="Latest Products" products={latest} role={role} />

      {/* Recommended */}
      <Section title="Recommended for You" products={recommended} role={role} />

      {/* Popular */}
      <Section title="Most Popular" products={popular} role={role} />

      {/* Deals */}
      <Section title="Special Deals" products={deals} role={role} />
    </div>
  );
}
