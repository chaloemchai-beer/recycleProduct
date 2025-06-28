"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const blogPosts = [
    { slug: "sustainable-fashion-tips", title: "10 Sustainable Fashion Tips to Refresh Your Wardrobe", excerpt: "Simple ways to shop greener and keep your style on point without harming the planet.", image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=600&auto=format&fit=crop" },
    { slug: "electronics-refurbish-guide", title: "Guide to Buying Refurbished Electronics Safely", excerpt: "Everything you need to know before picking up your next pre-loved gadget.", image: "https://plus.unsplash.com/premium_photo-1664473953314-9d1dd27c89c4?q=80&w=600&auto=format&fit=crop" },
    { slug: "reuse-furniture-diy", title: "DIY Ideas to Upcycle Old Furniture at Home", excerpt: "Turn that dusty chair or table into a fresh statement piece with these hacks.", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=600&auto=format&fit=crop" },
  ];

  const products = [
    { id: 1, title: "Vintage Denim Jacket", price: 45, image: "https://images.unsplash.com/photo-1706765779494-2705542ebe74?q=80&w=600&auto=format&fit=crop" },
    { id: 2, title: "Refurbished Smartphone", price: 120, image: "https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=600&auto=format&fit=crop" },
    { id: 3, title: "Wooden Dining Chair", price: 30, image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=600&auto=format&fit=crop" },
    { id: 4, title: "Mountain Bike", price: 220, image: "https://plus.unsplash.com/premium_photo-1678718713393-2b88cde9605b?q=80&w=600&auto=format&fit=crop" },
  ];
  return (
    <div className="flex flex-col gap-24 py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Hero */}
      <section className="flex flex-col items-center text-center gap-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] max-w-3xl">
          Give products a second life &amp; protect the planet
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl">
          Buy and sell quality pre-owned goods on RecycleEcom — the easiest way to shop sustainably.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link href="/products" className="rounded-md bg-foreground text-background px-6 py-3 font-medium hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors">
            Explore products
          </Link>
          <Link href="/sell" className="rounded-md border border-foreground px-6 py-3 font-medium text-[var(--foreground)] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-colors">
            Start selling
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-center">
        {[
          { icon: "♻️", title: "Sustainable shopping", desc: "Every purchase reduces waste and supports a circular economy." },
          { icon: "💰", title: "Save money", desc: "Find great deals on quality items at a fraction of retail prices." },
          { icon: "🛡️", title: "Buyer protection", desc: "Secure payments and dedicated support keep every transaction safe." },
        ].map((f) => (
          <div key={f.title} className="space-y-3 px-6 py-8 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-[var(--background)] shadow-sm">
            <div className="text-4xl">{f.icon}</div>
            <h3 className="text-xl font-semibold text-[var(--foreground)]">{f.title}</h3>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-6">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Latest Blog Posts */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">Latest from our Blog</h2>
          <Link href="/blog" className="text-green-600 hover:underline text-sm">View all</Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-[var(--background)] shadow-sm flex flex-col">
              <Image src={post.image} alt={post.title} width={400} height={250} className="h-48 w-full object-cover" />
              <div className="flex-1 p-4 flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-[var(--foreground)] line-clamp-2">{post.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-3">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="mt-auto text-green-600 text-sm hover:underline">Read more →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Recommended Products */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">Recommended Products</h2>
          <Link href="/products" className="text-green-600 hover:underline text-sm">Browse all</Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div key={p.id} className="flex flex-col rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden bg-[var(--background)]">
              <Image src={p.image} alt={p.title} width={300} height={220} className="h-40 w-full object-cover" />
              <div className="flex-1 p-4 flex flex-col gap-3">
                <h3 className="text-base font-medium text-[var(--foreground)] line-clamp-2">{p.title}</h3>
                <p className="text-green-600 font-semibold">${p.price}</p>
                <Link href={`/products/${p.id}`} className="mt-auto text-sm underline hover:no-underline">View</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="flex flex-col items-center text-center gap-4 py-12 border-y border-neutral-200 dark:border-neutral-800">
        <h2 className="text-3xl font-semibold text-[var(--foreground)] max-w-2xl">
          Join thousands making an impact today
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 max-w-xl">
          Sign up to start buying and selling in minutes.
        </p>
        <Link href="/register" className="rounded-md bg-foreground text-background px-8 py-4 font-semibold hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors">
          Create your account
        </Link>
      </section>
    </div>
  );
}