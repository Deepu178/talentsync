"use client";

import useBlogTag from "@/app/blogs/lib/hooks/useBlogTag";

export default function Category({ tag }: { tag: string }) {
  const { tag: selectedTag, setTag: setSelectedTag } = useBlogTag();

  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      return setSelectedTag("");
    }
    return setSelectedTag(tag);
  };

  return (
    <div
      key={tag}
      onClick={() => handleTagClick(tag)}
      className={`${
        selectedTag === tag && "ring-2 ring-border"
      } inline-flex cursor-pointer items-center rounded bg-muted px-3 py-1.5 uppercase`}
    >
      <span className="text-xs font-medium uppercase">{tag || "All"}</span>
    </div>
  );
}
