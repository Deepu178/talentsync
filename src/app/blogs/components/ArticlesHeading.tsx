"use client";
import useBlogTag from "@/app/blogs/lib/hooks/useBlogTag";

const ArticlesHeading = () => {
  const { tag } = useBlogTag();
  return (
    <div className="my-8 text-3xl font-bold text-foreground capitalize">
      {!tag ? "Latest articles" : `${tag} articles`}
    </div>
  );
};

export default ArticlesHeading;
