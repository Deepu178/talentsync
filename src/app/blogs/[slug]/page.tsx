import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import NotFound from "@/components/NotFound";

import ArticleList from "@/app/blogs/components/ArticleList";
import { renderBlocks } from "@/app/blogs/components/notionBlocks/renderBlocks";
import blogsData from "@/app/blogs/lib/data/blogsData";
import getLocalizedDate from "@/app/blogs/lib/utils/getLocalizedDate";
import {
  getAllArticles,
  getArticlePage,
  getArticlePageData,
} from "@/app/blogs/lib/utils/notion";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = params.slug.replaceAll("%22", '"').replaceAll("%3A", ":");

  const data = await getAllArticles(process.env.BLOG_DATABASE_ID ?? "");

  const page = getArticlePage(data, slug);

  if (!page) {
    return {
      title: "Not Found",
      description: "The blog you are looking for does not exists.",
      authors: blogsData.authors,
    };
  }

  const { title, publishedDate, summary } = await getArticlePageData(
    page,
    slug,
    process.env.BLOG_DATABASE_ID ?? "",
  );
  const publishedOn = getLocalizedDate(publishedDate);

  const ogImage = `${
    blogsData.websiteUrl
  }/api/og-image?title=${encodeURIComponent(title)}&date=${encodeURIComponent(
    publishedOn,
  )}`;

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${title}`,
    description: summary,
    authors: blogsData.authors,
    openGraph: {
      title: `${title}`,
      description: summary,
      url: `https://www.uproposalgpt.com/blogs/${params.slug}`,
      images: [ogImage, ...previousImages],
    },
  };
}

export const dynamic = "force-dynamic";
export const revalidate = 10;

export default async function BlogPage({ params }: Props) {
  const slug = params.slug.replaceAll("%22", '"').replaceAll("%3A", ":");
  const data = await getAllArticles(process.env.BLOG_DATABASE_ID ?? "");

  const page = getArticlePage(data, slug);

  if (!page) return <NotFound />;

  const result = await getArticlePageData(
    page,
    slug,
    process.env.BLOG_DATABASE_ID ?? "",
  );

  const { content, title, coverImage, publishedDate, summary, moreArticles } =
    result;

  const publishedOn = getLocalizedDate(publishedDate);

  return (
    <>
      <div>
        <div className="px-6 py-16 pb-48 mx-auto -mb-48 text-center bg-muted md:-mb-96 md:pb-96">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-2 space-x-2 text-sm text-muted-foreground">
              <div className="">{publishedOn}</div>
            </div>
            <h1 className="font-extrabold tracking-tight text-foreground text-w-4xl sm:text-4xl">
              {title}
            </h1>
            <div className="max-w-3xl mx-auto mt-3 text-xl leading-8 text-muted-foreground sm:mt-4">
              {summary}
            </div>
          </div>
        </div>

        <div className="max-w-5xl px-6 mx-auto my-16 md:px-8">
          <Image
            className="object-cover w-full aspect-video rounded-xl"
            src={coverImage}
            alt={title}
            width={800}
            height={800}
          />
        </div>
        <div className="max-w-4xl px-6 mx-auto mb-24 space-y-8 md:px-8">
          {content.map((block) => (
            <Fragment key={block.id}>{renderBlocks(block)}</Fragment>
          ))}
        </div>
        <div className="py-12 border-t border-border">
          <div className="layout">
            <div className="flex items-center justify-between my-8">
              <div className="text-3xl font-bold ">Latest articles</div>
              <Link href="/blogs">
                <span className="font-semibold cursor-pointer">
                  More articles ➜
                </span>
              </Link>
            </div>
            <ArticleList articles={moreArticles || []} />
          </div>
        </div>
      </div>
    </>
  );
}
