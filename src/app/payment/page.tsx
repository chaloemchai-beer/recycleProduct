"use client";

import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function PaymentPage() {
  const { items, clear } = useCart();
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const router = useRouter();

  const [name, setName] = useState("");
  const [card, setCard] = useState("");
  const [exp, setExp] = useState("");
  const [cvv, setCvv] = useState("");

  if (items.length === 0) {
    router.replace("/cart");
    return null;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Payment info", { name, card, exp, cvv, total });
    clear();
    alert("Payment successful (mock)");
    router.push("/");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 grid gap-12 md:grid-cols-2">
      {/* Left: order summary */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-[var(--foreground)]">Order summary</h2>
        <div className="space-y-4 max-h-[400px] overflow-auto pr-2">{
          items.map((i) => (
            <div key={i.id} className="flex items-center gap-3 text-sm border-b border-neutral-200 dark:border-neutral-800 pb-2">
              <Image src={i.image} alt={i.title} width={50} height={40} className="rounded object-cover" />
              <span className="flex-1 line-clamp-1">{i.title} x{i.qty}</span>
              <span>${(i.price * i.qty).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <p className="text-lg font-medium flex justify-between"><span>Total</span> <span className="text-green-600">${total.toFixed(2)}</span></p>
      </div>

      {/* Right: payment form */}
      <div className="space-y-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)]">Name on card</label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 outline-none focus:border-black dark:focus:border-white"
            />
        </div>
        <div>
          <label htmlFor="card" className="block text-sm font-medium text-[var(--foreground)]">Card number</label>
          <input
            id="card"
            type="text"
            pattern="[0-9]{16}"
            maxLength={16}
            required
            value={card}
            onChange={(e) => setCard(e.target.value)}
            className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 outline-none focus:border-black dark:focus:border-white"
          />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="exp" className="block text-sm font-medium text-[var(--foreground)]">Expiry (MM/YY)</label>
            <input
              id="exp"
              type="text"
              pattern="[0-9]{2}/[0-9]{2}"
              placeholder="08/25"
              required
              value={exp}
              onChange={(e) => setExp(e.target.value)}
              className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 outline-none focus:border-black dark:focus:border-white"
            />
          </div>
          <div className="w-24">
            <label htmlFor="cvv" className="block text-sm font-medium text-[var(--foreground)]">CVV</label>
            <input
              id="cvv"
              type="password"
              pattern="[0-9]{3,4}"
              maxLength={4}
              required
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 outline-none focus:border-black dark:focus:border-white"
            />
          </div>
        </div>
        <button type="submit" className="w-full rounded-md bg-foreground text-background px-4 py-2 font-medium hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors">
          Pay ${total.toFixed(2)}
        </button>
      </form>
      </div>
    </div>
  );
}
