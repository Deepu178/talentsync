import { Sparkles } from "lucide-react";

import blogsData from "@/app/blogs/lib/data/blogsData";

export default function HeroHeader() {
  return (
    <div className="y-24 text-center bg-secondary">
      <div className="layout py-20">
        <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-foreground">
          <Sparkles size={52} className="text-primary" />
        </div>

        <h1 className="mt-4 text-3xl font-extrabold text-foreground">
          {blogsData.headerTitle}
        </h1>

        <p className="max-w-2xl mx-auto mt-4 text-xl text-muted-foreground">
          {blogsData.headerDescription}
        </p>
      </div>
    </div>
  );
}
