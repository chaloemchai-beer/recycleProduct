"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";

export default function CartPage() {
  const { items, removeItem, clear } = useCart();
  const { role } = useAuth();
  const router = useRouter();
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4">
        <h1 className="text-2xl font-semibold text-[var(--foreground)]">Your cart is empty</h1>
        <Link href="/products" className="rounded-md border border-foreground px-4 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a]">
          Browse products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-10">
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] text-center">Your Cart</h1>

      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4 items-center border-b border-neutral-200 dark:border-neutral-800 pb-4">
            <Image src={item.image} alt={item.title} width={120} height={90} className="rounded object-cover" />
            <div className="flex-1">
              <h2 className="font-medium text-[var(--foreground)] line-clamp-1">{item.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-300">Qty: {item.qty}</p>
            </div>
            <p className="font-medium text-green-600">${item.price * item.qty}</p>
            <button
              onClick={() => removeItem(item.id)}
              className="text-sm text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-neutral-200 dark:border-neutral-800">
        <p className="text-xl font-semibold text-[var(--foreground)]">Total: ${total.toFixed(2)}</p>
        <div className="flex gap-3">
          <button
            onClick={clear}
            className="rounded-md border border-foreground px-4 py-2 text-sm hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a]"
          >
            Clear cart
          </button>
          <button
            onClick={() => {
              if (role === "guest") {
                router.push("/login?redirect=payment");
              } else {
                router.push("/payment");
              }
            }}
            className="rounded-md bg-foreground text-background px-4 py-2 text-sm hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
