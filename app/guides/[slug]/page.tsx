import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllGuideSlugs, getGuideBySlug } from "@/lib/guides";
import { pageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { title: "Guide not found" };
  return pageMetadata({
    title: guide.title,
    description: guide.description,
    path: `/guides/${slug}/`
  });
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();
  const { Content } = guide;
  return <Content />;
}
