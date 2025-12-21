import Image from "next/image";
import slugify from "slugify";

import getLocalizedDate from "../lib/utils/getLocalizedDate";
import { Article } from "../lib/utils/types";

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  const slug = slugify(article.title).toLowerCase();

  const formattedTime = getLocalizedDate(article.publishedDate);

  return (
    <a href={`/blogs/${slug}`}>
      <div className="flex flex-col overflow-hidden cursor-pointer group">
        <div className="relative">
          <div className="absolute">
            {article?.categories?.map((category) => (
              <div
                key={category}
                className="relative left-3 top-3 z-[2] mb-2 mr-2 inline-flex items-center rounded bg-secondary px-3 py-1.5 text-xs font-medium uppercase opacity-90 shadow"
              >
                {category}
              </div>
            ))}
          </div>
          <div className="contrast-[0.9] filter">
            <Image
              className="object-cover w-full transition rounded-lg aspect-video bg-primary-foreground group-hover:opacity-90"
              src={article.coverImage}
              width={500}
              height={500}
              alt="article cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between flex-1 py-4 bg-background">
          <div className="flex-1">
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p className="mt-3 text-base text-muted-foreground line-clamp-2">
              {article.summary}
            </p>
          </div>
          <div className="flex items-center mt-4">
            <div className="flex mb-2 space-x-1 text-sm text-muted-foreground">
              {article.categories?.map((category) => (
                <div key={category}>
                  <span className="font-semibold text-muted-foreground">
                    {category}{" "}
                  </span>
                  <span aria-hidden="true">&middot;</span>
                </div>
              ))}
              <time dateTime={formattedTime}>{formattedTime}</time>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
