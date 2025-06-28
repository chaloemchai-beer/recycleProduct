"use client";

import Link from "next/link";
import Image from "next/image";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

const posts: Post[] = [
  {
    slug: "sustainable-fashion-tips",
    title: "10 Sustainable Fashion Tips to Refresh Your Wardrobe",
    excerpt: "Simple ways to shop greener and keep your style on point without harming the planet.",
    date: "2025-06-15",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1218&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    slug: "electronics-refurbish-guide",
    title: "Guide to Buying Refurbished Electronics Safely",
    excerpt: "Everything you need to know before picking up your next pre-loved gadget.",
    date: "2025-05-30",
    image: "https://plus.unsplash.com/premium_photo-1664473953314-9d1dd27c89c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    slug: "reuse-furniture-diy",
    title: "DIY Ideas to Upcycle Old Furniture at Home",
    excerpt: "Turn that dusty chair or table into a fresh statement piece with these hacks.",
    date: "2025-05-10",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1575&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

import { useAuth } from "@/contexts/AuthContext";

function Section({ title, list, role }: { title: string; list: Post[]; role: string }) {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold text-[var(--foreground)]">{title}</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((post) => (
          <article key={post.slug} className="rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-[var(--background)] shadow-sm flex flex-col">
            <Image src={post.image} alt={post.title} width={400} height={250} className="h-48 w-full object-cover" />
            <div className="flex-1 p-5 flex flex-col gap-4">
              <div className="space-y-1">
                <time className="text-xs text-neutral-500">{new Date(post.date).toLocaleDateString()}</time>
                <h3 className="text-lg font-semibold text-[var(--foreground)] line-clamp-2">{post.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-3">{post.excerpt}</p>
              </div>
              <div className="mt-auto flex gap-2 items-center">
                <Link href={`/blog/${post.slug}`} className="inline-block text-green-600 font-medium hover:underline">Read more →</Link>
                {role === "seller" && (
                  <Link href={`/blog/new?edit=${post.slug}`} className="text-sm text-foreground underline hover:no-underline">Edit</Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function BlogPage() {
  const { role } = useAuth();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-12">
      {role === "seller" && (
        <div className="flex justify-end mb-6">
          <Link href="/blog/new" className="rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors">Add Post</Link>
        </div>
      )}

      {/* Banner */}
      <div className="w-full h-40 sm:h-56 rounded-lg overflow-hidden relative">
        <Image src="https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80" alt="blog banner" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-white text-2xl sm:text-3xl font-bold">Fresh Stories &amp; Tips</h2>
        </div>
      </div>

      <header className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">Our Blog</h1>
        <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          Insights and stories on sustainable living, recycling, and mindful shopping.
        </p>
      </header>

      {/* latest, popular, tips sections */}
      <Section title="Latest Posts" list={posts} role={role} />

      <Section title="Popular Reads" list={posts.slice().reverse()} role={role} />

      <Section title="Editor's Picks" list={posts} role={role} />

      {/* All posts grid */}
      <h2 className="text-2xl font-semibold text-[var(--foreground)]">All Posts</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-[var(--background)] shadow-sm flex flex-col">
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={250}
              className="h-48 w-full object-cover"
            />
            <div className="flex-1 p-5 flex flex-col gap-4">
              <div className="space-y-1">
                <time className="text-xs text-neutral-500">{new Date(post.date).toLocaleDateString()}</time>
                <h2 className="text-lg font-semibold text-[var(--foreground)] line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
              <div className="mt-auto flex gap-2 items-center">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block text-green-600 font-medium hover:underline"
                >
                  Read more →
                </Link>
                {role === "seller" && (
                  <Link href={`/blog/new?edit=${post.slug}`} className="text-sm text-foreground underline hover:no-underline">Edit</Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
