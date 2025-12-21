import { Article } from "@/app/blogs/lib/utils/types";

export function filterArticles(articles: Article[], selectedTag: string) {
  return articles
    .sort((a, b) => Number(new Date(b.publishedDate)))
    .filter((article) => {
      if (!selectedTag) {
        return true;
      }
      return article.categories?.includes(selectedTag);
    });
}
