"use client";

import { createContext, useCallback, useContext, useState } from "react";

const TagContext = createContext({
  tag: "",
  setTag: (_: string) => {
    return;
  },
});

export const BlogTagProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedTag, setSelectedTag] = useState<string>("");

  const setTag = useCallback((tag: string) => {
    setSelectedTag(tag);
  }, []);

  return (
    <TagContext.Provider
      value={{
        tag: selectedTag,
        setTag,
      }}
    >
      {children}
    </TagContext.Provider>
  );
};

export default function useBlogTag() {
  return useContext(TagContext);
}
