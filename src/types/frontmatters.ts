export type BlogFrontmatter = {
  wordCount: number;
  slug: string;
  englishOnly?: boolean;
  title: string;
  description: string;
  banner: string;
  publishedAt: string;
  lastUpdated?: string;
  tags: string;
  repost?: string;
};

export type ContentType = "blog";

export type PickFrontmatter<T extends ContentType> = T extends "blog"
  ? BlogFrontmatter
  : null;

export type InjectedMeta = { views?: number; likes?: number };

export type BlogType = {
  code: string;
  frontmatter: BlogFrontmatter;
};

export type FrontmatterWithTags = BlogFrontmatter;
export type FrontmatterWithDate = BlogFrontmatter;
export type Frontmatter = BlogFrontmatter;
