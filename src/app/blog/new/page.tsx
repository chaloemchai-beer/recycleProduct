"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/contexts/AuthContext";

export default function NewPostPage() {
  const { role } = useAuth();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (role !== "seller") {
      router.replace("/blog");
    }
  }, [role, router]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Create post", { title, content, image });
    router.push("/blog");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] text-center">
        New Blog Post
      </h1>

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

        {/* Image upload */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-[var(--foreground)]">Cover image</label>
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
              className="mt-4 w-full object-cover rounded-md border border-neutral-300 dark:border-neutral-700"
            />
          )}
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-[var(--foreground)]">Content</label>
          <textarea
            id="content"
            rows={8}
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 outline-none focus:border-black dark:focus:border-white"
          />
        </div>

        <button type="submit" className="w-full rounded-md bg-foreground text-background px-4 py-2 font-medium hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors">
          Publish
        </button>
      </form>
    </div>
  );
}
