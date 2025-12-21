"use client";
import useBlogTag from "@/app/blogs/lib/hooks/useBlogTag";
import { filterArticles } from "@/app/blogs/lib/utils/filterArticles";
import { Article } from "@/app/blogs/lib/utils/types";

import ArticleCard from "./ArticleCard";

type Props = {
  articles: Article[];
};

export default function ArticleList({ articles }: Props) {
  const { tag } = useBlogTag();
  const filteredArticles = filterArticles(articles, tag);
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:gap-12">
      {filteredArticles.map((article) => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </div>
  );
}
