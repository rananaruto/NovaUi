import { components } from "@/data/components";
import ComponentDetailClient from "./component-detail-client";

export async function generateStaticParams() {
  return components.map((component) => ({
    slug: component.slug,
  }));
}

export default async function ComponentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ComponentDetailClient slug={slug} />;
}
