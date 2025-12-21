import ArticleList from "@/app/blogs/components/ArticleList";
import Category from "@/app/blogs/components/Category";
import HeroHeader from "@/app/blogs/components/HeroHeader";

import ArticlesHeading from "./components/ArticlesHeading";
import { convertToArticleList, getAllArticles } from "./lib/utils/notion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description: "Thoughts on product engineering, SaaS architecture, and the future of software.",
};

export const dynamic = "force-dynamic";
export const revalidate = 60;
export default async function Index() {
  const data = await getAllArticles(process.env.BLOG_DATABASE_ID ?? "");

  const { articles, categories } = convertToArticleList(data);

  return (
    <>
      <HeroHeader />
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {categories.map((tag) => (
          <Category tag={tag} key={tag} />
        ))}
      </div>
      <div className="layout">
        <div className="py-8">
          <ArticlesHeading />
          <ArticleList articles={articles} />
        </div>
      </div>
    </>
  );
}
