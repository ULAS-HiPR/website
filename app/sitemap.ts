import type { MetadataRoute } from "next";
import { getSortedPostsData } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

const publicRoutes = [
  "",
  "/about",
  "/blog",
  "/contact-us",
  "/controls",
  "/engines",
  "/payloads",
  "/projects",
  "/sponsorship",
  "/test-vehicles",
];

function absoluteUrl(path: string) {
  return path ? `${SITE_URL}${path}/` : `${SITE_URL}/`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = publicRoutes.map((path) => ({
    url: absoluteUrl(path),
  }));

  const blogPosts = getSortedPostsData().map((post) => ({
    url: absoluteUrl(`/blog/${post.filename}`),
    lastModified: post.date,
  }));

  return [...staticPages, ...blogPosts];
}
