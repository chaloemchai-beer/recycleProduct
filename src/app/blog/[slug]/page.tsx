
import { mockPosts } from "@/data/mockPosts";
import BlogPostClient from "./BlogPostClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return mockPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
  const post = mockPosts.find((p) => p.slug === slug);
  if (!post) notFound();
  return <BlogPostClient post={post} />;
}
