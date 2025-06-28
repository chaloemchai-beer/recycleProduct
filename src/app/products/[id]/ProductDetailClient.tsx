"use client";

import { Product } from "@/data/mockProducts";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetailClient({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { role } = useAuth();
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-8">
      <Link href="/products" className="text-sm text-green-600 hover:underline">
        ← Back to products
      </Link>
      <div className="grid gap-8 md:grid-cols-2 items-start">
        <Image
          src={product.image}
          alt={product.title}
          width={600}
          height={400}
          className="rounded-lg object-cover w-full h-auto"
        />
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--foreground)]">
            {product.title}
          </h1>
          <p className="text-green-600 text-xl font-semibold">${product.price}</p>
          <p className="text-neutral-600 dark:text-neutral-300">
            This is a placeholder description for the product. Provide details about its condition, usage, and other relevant information.
          </p>
          {role === "seller" ? (
            <div className="flex gap-3">
              <Link href={`/sell?edit=${product.id}`} className="rounded-md bg-foreground text-background px-6 py-2 font-medium hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors">Edit</Link>
              <button
                onClick={() => {
                  if (window.confirm("Delete this product?")) {
                    alert("Product deleted (mock)");
                    router.push("/products");
                  }
                }}
                className="rounded-md border border-red-600 text-red-600 px-6 py-2 font-medium hover:bg-red-600 hover:text-white transition-colors"
              >
                Delete
              </button>
            </div>
          ) : (
            <button
              onClick={() =>
                addItem({ id: product.id, title: product.title, price: product.price, image: product.image })
              }
              className="rounded-md bg-foreground text-background px-6 py-2 font-medium hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
