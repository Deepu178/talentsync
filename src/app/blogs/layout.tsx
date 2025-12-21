import { Metadata } from "next";

import blogsData from "./lib/data/blogsData";
import { BlogTagProvider } from "./lib/hooks/useBlogTag";

export const metadata: Metadata = {
  title: blogsData.title,
  description: blogsData.headerDescription,
  authors: blogsData.authors,
  openGraph: {
    title: blogsData.title,
    description: blogsData.headerDescription,
    url: "https://www.talentsync.work/blogs",
    images: [
      {
        url: "https://user-images.githubusercontent.com/68834718/265245167-9e433e3e-1fbb-4a23-8f05-d3a444824e18.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://user-images.githubusercontent.com/68834718/265245167-9e433e3e-1fbb-4a23-8f05-d3a444824e18.png",
        width: 1800,
        height: 1600,
        alt: "talentsync",
      },
    ],
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function BlogLayout({ children }: RootLayoutProps) {
  return (
    <BlogTagProvider>
      <div className="pt-14">{children}</div>
    </BlogTagProvider>
  );
}
