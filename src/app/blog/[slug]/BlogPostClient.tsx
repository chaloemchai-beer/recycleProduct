"use client";

import { Post } from "@/data/mockPosts";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function BlogPostClient({ post }: { post: Post }) {
  const { role } = useAuth();
  const router = useRouter();
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-8">
      <Link href="/blog" className="text-sm text-green-600 hover:underline">
        ← Back to blog
      </Link>

      <article className="space-y-6">
        <div className="space-y-2">
          <time className="text-xs text-neutral-500">
            {new Date(post.date).toLocaleDateString()}
          </time>
          <h1 className="text-3xl font-bold text-[var(--foreground)]">
            {post.title}
          </h1>
        </div>
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={500}
          className="rounded-lg w-full h-auto object-cover"
        />
        <p className="text-neutral-700 dark:text-neutral-300 leading-7 whitespace-pre-line">
          {post.content}
        </p>

        {role === "seller" && (
          <div className="flex gap-3">
            <Link
              href={`/blog/new?edit=${post.slug}`}
              className="rounded-md bg-foreground text-background px-6 py-2 font-medium hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
            >
              Edit
            </Link>
            <button
              onClick={() => {
                if (confirm("Delete this post?")) {
                  alert("Post deleted (mock)");
                  router.push("/blog");
                }
              }}
              className="rounded-md border border-red-600 text-red-600 px-6 py-2 font-medium hover:bg-red-600 hover:text-white transition-colors"
            >
              Delete
            </button>
          </div>
        )}
      </article>
    </div>
  );
}
