import { mockProducts } from "@/data/mockProducts";
import ProductDetailClient from "./ProductDetailClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return mockProducts.map((p) => ({ id: p.id.toString() }));
}

// Server component for static export
export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const numericId = parseInt(id, 10);
  const product = mockProducts.find((p) => p.id === numericId);
  if (!product) notFound();
  return <ProductDetailClient product={product} />;
}
