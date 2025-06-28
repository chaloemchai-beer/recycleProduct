"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SellPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const { role } = useAuth();

  useEffect(() => {
    if (role !== "seller") {
      router.replace("/");
    }
  }, [role, router]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement actual upload logic
    console.log("Submit product", { title, price, description, image });
    router.push("/products");
  };

  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 py-16 space-y-8">
      <header className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">Sell an item</h1>
        <p className="text-neutral-600 dark:text-neutral-300">Fill out the form below to list your product.</p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-[var(--foreground)]">Title</label>
          <input
            id="title"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 outline-none focus:border-black dark:focus:border-white"
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-[var(--foreground)]">Price ($)</label>
          <input
            id="price"
            type="number"
            min="0"
            step="0.01"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 outline-none focus:border-black dark:focus:border-white"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-[var(--foreground)]">Description</label>
          <textarea
            id="description"
            rows={4}
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 outline-none focus:border-black dark:focus:border-white"
          />
        </div>

        {/* Image upload */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-[var(--foreground)]">Image</label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0] || null;
              setImage(file);
              if (file) setPreview(URL.createObjectURL(file));
            }}
            className="mt-1 block w-full text-sm text-neutral-600 dark:text-neutral-300"
          />
          {preview && (
            <Image
              src={preview}
              alt="Preview"
              width={800}
              height={400}
              className="mt-4 w-full h-64 object-cover rounded-md border border-neutral-300 dark:border-neutral-700"
            />
          )}
        </div>

        <button type="submit" className="w-full rounded-md bg-foreground text-background px-4 py-2 font-medium hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors">
          List product
        </button>
      </form>
    </div>
  );
}
